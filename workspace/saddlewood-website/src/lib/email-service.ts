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
    const toEmail = 'info@saddlewoodcontracting.com';
    
    // Format service type for better readability
    // Ensure we get the actual service value from the form
    const serviceType = data.service && data.service.trim() !== ''
      ? data.service.charAt(0).toUpperCase() + data.service.slice(1) 
      : 'Not specified';
    
    console.log('Sending notification with service type:', serviceType, 'from data service:', data.service);

    await mailService.send({
      to: toEmail,
      from: 'info@saddlewoodcontracting.com', // Verified sender email
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

    // Format service type for better readability
    // Ensure we get the actual service value from the form
    const serviceType = data.service && data.service.trim() !== ''
      ? data.service.charAt(0).toUpperCase() + data.service.slice(1) 
      : 'Not specified';
    
    console.log('Sending confirmation with service type:', serviceType, 'from data service:', data.service);
      
    // Get first name from full name for more personable greeting
    const firstName = data.name.split(' ')[0];

    await mailService.send({
      to: data.email,
      from: 'info@saddlewoodcontracting.com', // Verified sender email
      subject: `We've Got Your Request, ${firstName} — Thank You!`,
      text: `
Hi ${data.name},

Thanks for reaching out to Saddlewood Contracting about your ${serviceType} needs — we're honored to be considered. Your request has been received and is already in good hands.

We'll take a look and follow up with you within 24–48 business hours to talk next steps. In the meantime, if something's urgent or you just prefer to chat, feel free to give us a call.

📝 Your Request Summary
Reference ID: ${data.submissionId}
Submitted: ${data.submissionDate}
Service Type: ${serviceType}

📞 Need Help Now? Call us directly at 480-999-6100.
🌐 Visit us anytime at www.saddlewoodcontracting.com

Talk soon,
The Saddlewood Team
480-999-6100
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #eee; border-radius: 8px; background-color: #fff; color: #333;">
  <div style="margin-bottom: 30px;">
    <h2 style="color: #333; margin-bottom: 5px;">We've Got Your Request, ${firstName}!</h2>
    <div style="height: 4px; width: 60px; background-color: #333; margin-bottom: 20px;"></div>
  </div>
  
  <div style="margin-bottom: 25px; line-height: 1.6;">
    <p>Hi ${data.name},</p>
    <p>Thanks for reaching out to Saddlewood Contracting about your <strong>${serviceType}</strong> needs — we're honored to be considered. Your request has been received and is already in good hands.</p>
    <p>We'll take a look and follow up with you within 24–48 business hours to talk next steps. In the meantime, if something's urgent or you just prefer to chat, feel free to give us a call.</p>
  </div>
  
  <div style="background-color: #f7f7f7; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
    <h3 style="margin-top: 0; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">📝 Your Request Summary</h3>
    <p style="margin-bottom: 8px;"><strong>Reference ID:</strong> ${data.submissionId}</p>
    <p style="margin-bottom: 8px;"><strong>Submitted:</strong> ${data.submissionDate}</p>
    <p style="margin-bottom: 0;"><strong>Service Type:</strong> ${serviceType}</p>
  </div>
  
  <div style="margin-bottom: 30px;">
    <p style="margin-bottom: 10px;"><strong>📞 Need Help Now?</strong> Call us directly at <a href="tel:4809996100" style="color: #333; text-decoration: underline;">480-999-6100</a>.</p>
    <p><strong>🌐 Visit us anytime</strong> at <a href="https://www.saddlewoodcontracting.com" style="color: #333; text-decoration: underline;">www.saddlewoodcontracting.com</a></p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
    <p style="margin-bottom: 5px;">Talk soon,</p>
    <p style="margin-bottom: 5px;"><strong>The Saddlewood Team</strong></p>
    <p><a href="tel:4809996100" style="color: #333; text-decoration: none;">480-999-6100</a></p>
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