import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactFormNotification, sendContactFormConfirmation } from '@/lib/email-service';
import { saveSubmission } from '@/lib/contact-storage';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .refine((val) => val === '' || /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(val), {
      message: 'Please enter a valid phone number (e.g., (123) 456-7890)'
    }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters' })
    .max(200, { message: 'Address must be less than 200 characters' }),
  service: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

/**
 * A simple function to log contact form submissions to a file
 * In a production environment, this would be replaced with an email service
 */
async function logContactRequest(data: any) {
  console.log('New contact form submission:');
  console.log('----------------------------');
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Phone: ${data.phone || 'Not provided'}`);
  console.log(`Service: ${data.service || 'Not specified'}`);
  console.log(`Message: ${data.message}`);
  console.log(`Date: ${new Date().toISOString()}`);
  console.log('----------------------------');
  
  // In a real implementation, you would send an email here
  // Example with a service like SendGrid, Mailgun, or AWS SES
  // return sendEmail({
  //   to: 'contact@saddlewoodcontracting.com',
  //   from: 'website@saddlewoodcontracting.com',
  //   subject: `New Contact Form: ${data.service || 'General Inquiry'}`,
  //   text: `
  //     Name: ${data.name}
  //     Email: ${data.email}
  //     Phone: ${data.phone || 'Not provided'}
  //     Service: ${data.service || 'Not specified'}
  //     Message: ${data.message}
  //   `
  // });
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();
    
    // Validate form data
    const validatedData = contactFormSchema.parse(body);
    
    // Generate a unique submission ID
    const submissionDate = new Date();
    const submissionId = `SC-${submissionDate.toISOString().split('T')[0]}-${Math.floor(Math.random() * 10000)}`;
    
    // Log the contact request for debugging purposes
    await logContactRequest(validatedData);
    
    // Prepare email data
    const emailData = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      address: validatedData.address,
      service: validatedData.service || '',
      message: validatedData.message,
      submissionId: submissionId,
      submissionDate: submissionDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      })
    };
    
    // Save submission to file storage (reliable backup method)
    const submission = {
      id: submissionId,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      address: validatedData.address,
      service: validatedData.service || '',
      message: validatedData.message,
      submittedAt: submissionDate.toISOString()
    };
    
    // Always save to file system first (guaranteed to work)
    saveSubmission(submission);
    
    // Then try to send emails (might fail if SendGrid has issues)
    sendContactFormNotification(emailData)
      .then(success => {
        if (success) {
          console.log('Notification email sent to Saddlewood');
        } else {
          console.warn('Failed to send notification email to Saddlewood');
        }
      })
      .catch(err => {
        console.error('Error sending notification email:', err);
      });
    
    // Send confirmation email to the customer
    sendContactFormConfirmation(emailData)
      .then(success => {
        if (success) {
          console.log('Confirmation email sent to customer');
        } else {
          console.warn('Failed to send confirmation email to customer');
        }
      })
      .catch(err => {
        console.error('Error sending confirmation email:', err);
      });
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: {
        name: validatedData.name,
        email: validatedData.email,
        id: submissionId,
        submitted: submissionDate.toISOString(),
      }
    }, { status: 201 });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      }, { status: 400 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request',
    }, { status: 500 });
  }
}