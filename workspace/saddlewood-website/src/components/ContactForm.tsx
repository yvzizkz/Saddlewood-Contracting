"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import EmailThankYouPage from './EmailThankYouPage';
import SimpleCaptcha from './SimpleCaptcha';

// Define Zod schema for form validation
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

// Infer TypeScript type from the schema
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });
  
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    submissionId?: string;
  } | null>(null);

  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, touchedFields },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange', // Validate on change for real-time feedback
  });
  
  const handleCaptchaVerification = (verified: boolean) => {
    setCaptchaVerified(verified);
  };
  
  const onSubmit = async (data: ContactFormData) => {
    // Check if captcha is verified
    if (!captchaVerified) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please verify that you are not a robot by completing the captcha.',
      });
      return;
    }
    
    // Set submitting state
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: '',
    });
    
    try {
      // Submit data to the API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          captchaToken: 'simple-captcha-verified' // Using our simple captcha
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      
      // Form submission was successful
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: result.message || 'Thank you for contacting us! We will get back to you shortly.',
      });
      
      // Set data for thank you page
      setSubmittedData({
        name: data.name,
        email: data.email,
        submissionId: result.data?.id || `${new Date().toISOString().split('T')[0]}-${Math.floor(Math.random() * 1000)}`
      });
      
      // Reset form data
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      // Form submission failed
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'There was an error submitting your message. Please try again later.',
      });
    }
  };
  
  // Show the thank you page if submission was successful
  if (formStatus.success && submittedData) {
    return <EmailThankYouPage 
      name={submittedData.name}
      email={submittedData.email}
      submissionId={submittedData.submissionId}
      onClose={() => {
        setFormStatus({
          submitting: false,
          success: false,
          error: false,
          message: '',
        });
        setSubmittedData(null);
      }}
    />;
  }

  return (
    <div className="shadow-lg rounded-2xl bg-white p-8 border-t-4 border-primary">
      <h3 className="text-2xl font-bold mb-6 text-primary">Request A Free Estimate</h3>
      
      {formStatus.error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 shadow-sm border-l-4 border-red-500">
          <p className="font-medium">Error</p>
          <p>{formStatus.message}</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name and Email in 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-1">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
              <span className="mr-1">Name</span> <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${errors.name ? 'border-red-500 bg-red-50' : touchedFields.name ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
              />
              {touchedFields.name && !errors.name && (
                <span className="absolute right-3 top-3 text-green-500">
                  ✓
                </span>
              )}
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span> {errors.name.message}
              </p>
            )}
          </div>
          
          <div className="mb-1">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
              <span className="mr-1">Email</span> <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
                type="email"
                id="email"
                placeholder="your@email.com"
                {...register('email')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${errors.email ? 'border-red-500 bg-red-50' : touchedFields.email ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
              />
              {touchedFields.email && !errors.email && (
                <span className="absolute right-3 top-3 text-green-500">
                  ✓
                </span>
              )}
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span> {errors.email.message}
              </p>
            )}
          </div>
        </div>
        
        {/* Phone and Address in 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-1">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <input 
                type="tel"
                id="phone"
                {...register('phone')}
                placeholder="(123) 456-7890"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${errors.phone ? 'border-red-500 bg-red-50' : touchedFields.phone ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
              />
              {touchedFields.phone && !errors.phone && (
                <span className="absolute right-3 top-3 text-green-500">
                  ✓
                </span>
              )}
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span> {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-1">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2 flex items-center">
              <span className="mr-1">Address</span> <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
                id="address"
                {...register('address')}
                placeholder="123 Main St, City, AZ"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${errors.address ? 'border-red-500 bg-red-50' : touchedFields.address ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
              />
              {touchedFields.address && !errors.address && (
                <span className="absolute right-3 top-3 text-green-500">
                  ✓
                </span>
              )}
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span> {errors.address.message}
              </p>
            )}
          </div>
        </div>
        
        <div className="mb-1">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Needed
          </label>
          <select 
            id="service"
            {...register('service')}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          >
            <option value="">Select a service</option>
            <option value="hvac">HVAC Installation or Repair</option>
            <option value="electrical">Electrical Services</option>
            <option value="plumbing">Plumbing Services</option>
            <option value="remodeling">Home Remodeling</option>
            <option value="other">Other/Not Sure</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
            <span className="mr-1">Message</span> <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea 
              id="message"
              {...register('message')}
              rows={5}
              placeholder="Please describe your project or the service you need..."
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none
                ${errors.message ? 'border-red-500 bg-red-50' : touchedFields.message ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
            ></textarea>
            {touchedFields.message && !errors.message && (
              <span className="absolute right-3 top-3 text-green-500">
                ✓
              </span>
            )}
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <span className="mr-1">⚠️</span> {errors.message.message}
            </p>
          )}
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
          <SimpleCaptcha onVerify={handleCaptchaVerification} />
        </div>
        
        {!captchaVerified && isDirty && isValid && (
          <p className="text-amber-500 text-sm text-center mb-4 flex items-center justify-center">
            <span className="mr-1">⚠️</span> Please complete the verification above.
          </p>
        )}

        <div className="text-xs text-gray-600 border-t pt-4 mb-6">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        </div>

        <button 
          type="submit" 
          className={`rounded-full px-8 py-4 font-medium w-full transition-all duration-300 text-lg shadow-md
            ${!isDirty || !isValid || !captchaVerified
              ? 'bg-gray-400 text-white cursor-not-allowed' 
              : 'bg-primary text-white hover:bg-black hover:text-white hover:shadow-lg'}`}
          disabled={formStatus.submitting || !isDirty || !isValid || !captchaVerified}
        >
          {formStatus.submitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Get Your Free Estimate'
          )}
        </button>
        
        {!isValid && isDirty && (
          <p className="text-amber-500 text-sm text-center mt-2 flex items-center justify-center">
            <span className="mr-1">⚠️</span> Please correct the form errors before submitting.
          </p>
        )}
      </form>
    </div>
  );
}
