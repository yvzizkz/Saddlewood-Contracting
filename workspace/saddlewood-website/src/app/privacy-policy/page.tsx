import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Last Updated: April 19, 2025</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p>
            Saddlewood Contracting LLC ("we," "our," or "us") respects your privacy and is committed to protecting 
            your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website, contact us for services, or otherwise interact with us.
          </p>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other 
              contact information you provide when requesting our services, filling out our contact form, or 
              communicating with us.
            </li>
            <li>
              <strong>Service Information:</strong> Details about your property and the specific services you're 
              interested in receiving.
            </li>
            <li>
              <strong>Automatically Collected Information:</strong> When you visit our website, we may collect certain 
              information automatically, including IP addresses, browser type, device information, and pages visited.
            </li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Providing and managing the services you request</li>
            <li>Communicating with you about your service requests or inquiries</li>
            <li>Sending you information about our services, promotions, or updates (you can opt out at any time)</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Information Sharing</h2>
          <p>
            We do not sell your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Service providers who assist us in operating our business</li>
            <li>Professional advisors, such as lawyers, auditors, and insurers</li>
            <li>Government bodies when required by law</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Your Rights and Choices</h2>
          <p>
            You have certain rights regarding your personal information, including the right to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, accidental loss, or damage. However, no internet transmission is completely secure, 
            and we cannot guarantee the security of information transmitted to our website.
          </p>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last Updated" date at the top.
          </p>
          
          <h2 className="text-3xl font-bold mt-8 mb-6">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Saddlewood Contracting LLC</strong></p>
            <p>Phoenix, Arizona</p>
            <p>Phone: 480-999-6100</p>
            <p>Email: info@saddlewoodcontracting.com</p>
          </div>
          
          <div className="mt-8 mb-8">
            <Link href="/" className="text-black hover:underline">
              « Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}