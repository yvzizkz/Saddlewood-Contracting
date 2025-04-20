import { MailService } from '@sendgrid/mail';

// Initialize SendGrid with API key
const mailService = new MailService();

if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY is not defined. Email notifications will not be sent.');
} else {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

// Email template types
export type ContactFormEmailData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  service?: string;
  message: string;
  submissionId: string;
  submissionDate: string;
};

/**
 * Send notification email to Saddlewood about a new contact form submission
 */
export async function sendContactFormNotification(data: ContactFormEmailData): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY is not defined. Email notification not sent.');
      return false;
    }

    // The recipient email for Saddlewood
    // For testing, we'll send to both Saddlewood and to your email so you can verify both emails
    const toEmail = ['r.vite67@gmail.com', 'contact@saddlewoodcontracting.com'];
    
    // Format service type for better readability
    const serviceType = data.service 
      ? data.service.charAt(0).toUpperCase() + data.service.slice(1) 
      : 'Not specified';

    await mailService.send({
      to: toEmail,
      from: 'r.vite67@gmail.com', // Using your verified sender email
      subject: `New Contact Form: ${serviceType} Request - ${data.submissionId}`,
      text: `
New contact form submission from the Saddlewood Contracting website:

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Address: ${data.address}
- Service Requested: ${serviceType}

Message:
${data.message}

Submission Details:
- ID: ${data.submissionId}
- Date: ${data.submissionDate}

Please respond to the client within 24-48 business hours.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
  <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #444;">Contact Information</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Address:</strong> ${data.address}</p>
    <p><strong>Service Requested:</strong> ${serviceType}</p>
  </div>
  
  <div style="margin-bottom: 20px;">
    <h3 style="color: #444;">Message:</h3>
    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-line;">${data.message}</p>
  </div>
  
  <div style="background-color: #f0f8ff; padding: 15px; border-radius: 4px; font-size: 0.9em;">
    <h3 style="margin-top: 0; color: #0066cc;">Submission Details:</h3>
    <p><strong>Reference ID:</strong> ${data.submissionId}</p>
    <p><strong>Date:</strong> ${data.submissionDate}</p>
    <p style="font-style: italic; margin-top: 15px;">Please respond to the client within 24-48 business hours.</p>
  </div>
  
  <div style="margin-top: 30px; font-size: 0.8em; color: #666; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
    This is an automated notification from the Saddlewood Contracting website.
  </div>
</div>
      `
    });
    
    console.log('Contact form notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact form notification email:', error);
    return false;
  }
}

/**
 * Send confirmation email to the user who submitted the contact form
 */
export async function sendContactFormConfirmation(data: ContactFormEmailData): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY is not defined. Confirmation email not sent.');
      return false;
    }

    const serviceType = data.service 
      ? data.service.charAt(0).toUpperCase() + data.service.slice(1) 
      : 'Not specified';

    await mailService.send({
      to: data.email,
      from: 'r.vite67@gmail.com', // Using your verified sender email
      subject: `Thank You for Contacting Saddlewood Contracting - Ref: ${data.submissionId}`,
      text: `
Thank You for Contacting Saddlewood Contracting

Dear ${data.name},

Thank you for reaching out to Saddlewood Contracting! We're excited about the possibility of working with you on your ${serviceType} project.

Your message is important to us, and one of our specialists will personally contact you within 24-48 business hours to discuss your needs in detail.

Your Request Details:
Reference ID: ${data.submissionId}
Submitted: ${data.submissionDate}
Service: ${serviceType}

If you'd like to speak with someone right away, please don't hesitate to call us at 480-999-6100.

We look forward to helping transform your space into something truly special!

Warm regards,

The Saddlewood Contracting Team
480-999-6100
www.saddlewoodcontracting.com
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
  <div style="text-align: center; margin-bottom: 20px;">
    <h1 style="color: #333; font-size: 24px;">Thank You for Contacting Saddlewood Contracting</h1>
  </div>
  
  <div style="margin-bottom: 25px; line-height: 1.6;">
    <p style="font-size: 16px;">Dear <strong>${data.name}</strong>,</p>
    <p style="font-size: 16px;">Thank you for reaching out to Saddlewood Contracting! We're excited about the possibility of working with you on your <strong>${serviceType}</strong> project.</p>
    <p style="font-size: 16px;">Your message is important to us, and one of our specialists will personally contact you within 24-48 business hours to discuss your needs in detail.</p>
  </div>
  
  <div style="background-color: #f5f8ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #4a6da7;">
    <h3 style="margin-top: 0; color: #4a6da7; font-size: 18px;">Your Request Details:</h3>
    <p style="margin-bottom: 8px; font-size: 15px;"><strong>Reference ID:</strong> ${data.submissionId}</p>
    <p style="margin-bottom: 8px; font-size: 15px;"><strong>Submitted:</strong> ${data.submissionDate}</p>
    <p style="margin-bottom: 8px; font-size: 15px;"><strong>Service:</strong> ${serviceType}</p>
  </div>
  
  <div style="margin-bottom: 25px; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
    <p style="font-size: 16px;">If you'd like to speak with someone right away, please don't hesitate to call us at <strong style="color: #4a6da7; font-size: 17px;">480-999-6100</strong>.</p>
  </div>
  
  <p style="font-size: 16px;">We look forward to helping transform your space into something truly special!</p>
  
  <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
    <p style="font-size: 16px;">Warm regards,</p>
    <p style="font-size: 17px; font-weight: bold; color: #333;">The Saddlewood Contracting Team</p>
    <p style="font-size: 16px;">480-999-6100<br>
    <a href="https://www.saddlewoodcontracting.com" style="color: #4a6da7; text-decoration: none; font-weight: bold;">www.saddlewoodcontracting.com</a></p>
  </div>
</div>
      `
    });
    
    console.log('Contact form confirmation email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact form confirmation email:', error);
    return false;
  }
}