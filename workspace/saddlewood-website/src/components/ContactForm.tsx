"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import EmailThankYouPage from './EmailThankYouPage';

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
  
  const onSubmit = async (data: ContactFormData) => {
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
        body: JSON.stringify(data),
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
    <div className="shadow-lg rounded-2xl bg-white p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
      
      {formStatus.error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {formStatus.message}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-2">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input 
            id="name"
            {...register('name')}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
              ${errors.name ? 'border-red-500 bg-red-50' : touchedFields.name ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
          {touchedFields.name && !errors.name && (
            <p className="text-green-500 text-sm mt-1">Looks good!</p>
          )}
        </div>
        
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
              ${errors.email ? 'border-red-500 bg-red-50' : touchedFields.email ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          {touchedFields.email && !errors.email && (
            <p className="text-green-500 text-sm mt-1">Valid email format!</p>
          )}
        </div>
        
        <div className="mb-2">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input 
            type="tel"
            id="phone"
            {...register('phone')}
            placeholder="(123) 456-7890"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
              ${errors.phone ? 'border-red-500 bg-red-50' : touchedFields.phone ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        
        <div className="mb-2">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Needed
          </label>
          <select 
            id="service"
            {...register('service')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            <option value="hvac">HVAC</option>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="remodeling">Remodeling</option>
            <option value="other">Other/Not Sure</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="message"
            {...register('message')}
            rows={5}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
              ${errors.message ? 'border-red-500 bg-red-50' : touchedFields.message ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <div className="mb-4 text-xs text-gray-600">
          By submitting this form, you agree to our{' '}
          <a href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</a>{' '}
          and acknowledge our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        </div>

        <button 
          type="submit" 
          className={`rounded-full px-6 py-3 font-medium w-full transition-all duration-300
            ${!isDirty || !isValid 
              ? 'bg-gray-400 text-white cursor-not-allowed' 
              : 'bg-primary text-white hover:ring-2 hover:ring-primary'}`}
          disabled={formStatus.submitting || !isDirty || !isValid}
        >
          {formStatus.submitting ? 'Submitting...' : 'Submit'}
        </button>
        
        {!isValid && isDirty && (
          <p className="text-amber-500 text-sm text-center mt-2">
            Please correct the form errors before submitting.
          </p>
        )}
      </form>
    </div>
  );
}
