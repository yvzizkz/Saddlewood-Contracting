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
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
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
          We've received your message and will get back to you soon!
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Submission Details</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {name}</p>
          <p><span className="font-medium">Email:</span> {email}</p>
          <p><span className="font-medium">Reference ID:</span> {submissionId}</p>
          <p><span className="font-medium">Date:</span> {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-md font-semibold text-blue-700 mb-2">What happens next?</h3>
        <ul className="list-disc pl-5 text-blue-700 space-y-1">
          <li>Our team will review your request within 24-48 business hours</li>
          <li>You'll receive a confirmation email at {email}</li>
          <li>A team member will contact you to discuss your needs</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Link 
          href="/"
          className="bg-primary text-white py-2 px-6 rounded-full text-center hover:bg-opacity-90 transition-all"
        >
          Return to Home
        </Link>
        <Link 
          href="/services"
          className="border border-primary text-primary py-2 px-6 rounded-full text-center hover:bg-primary hover:text-white transition-all"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}