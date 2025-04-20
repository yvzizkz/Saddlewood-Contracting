import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
    
    // Log contact request (would be an email in production)
    await logContactRequest(validatedData);
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: {
        name: validatedData.name,
        email: validatedData.email,
        submitted: new Date().toISOString(),
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