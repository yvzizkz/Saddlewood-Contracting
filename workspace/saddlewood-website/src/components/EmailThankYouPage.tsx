import React from 'react';
import Link from 'next/link';

interface EmailThankYouPageProps {
  name: string;
  email: string;
  submissionId?: string;
  onClose?: () => void;
}

export default function EmailThankYouPage({
  name,
  email,
  submissionId = `${new Date().toISOString().split('T')[0]}-${Math.floor(Math.random() * 1000)}`,
  onClose
}: EmailThankYouPageProps) {
  // Get first name for more personable greeting
  const firstName = name.split(' ')[0];
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">We've Got Your Request, {firstName}!</h2>
        <div className="h-1 w-20 bg-gray-800 mx-auto mb-4"></div>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-green-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        <p className="text-gray-600 text-lg">
          Thanks for reaching out to Saddlewood Contracting!<br/>
          Your request is in good hands.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📝 Your Request Summary</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Reference ID:</span> {submissionId}</p>
          <p><span className="font-medium">Submitted:</span> {new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short'
          })}</p>
          <p><span className="font-medium">Email:</span> {email}</p>
        </div>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <h3 className="text-md font-semibold text-blue-700 mb-3">What happens next?</h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>We'll take a look and follow up with you within 24–48 business hours</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>You've already received a confirmation email at {email}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Our team will contact you to discuss your specific needs</span>
          </li>
        </ul>
        
        <div className="mt-4 pt-4 border-t border-blue-200">
          <p className="font-medium text-blue-700">📞 Need help now?</p>
          <p className="text-blue-700">Call us directly at <a href="tel:4809996100" className="underline">480-999-6100</a></p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Link 
          href="/"
          className="bg-primary text-white py-3 px-6 rounded-full text-center hover:bg-opacity-90 transition-all font-medium"
        >
          Return to Home
        </Link>
        <Link 
          href="/#services"
          className="border border-primary text-primary py-3 px-6 rounded-full text-center hover:bg-primary hover:text-white transition-all font-medium"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}