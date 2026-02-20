import React from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div>
      <div className="bg-obsidian text-text-primary py-12 border-b-2 border-border-default">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl">Last Updated: April 19, 2025</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the Saddlewood Contracting LLC website and services.
            By using our website or services, you agree to these Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Services</h2>
          <p>
            Saddlewood Contracting LLC provides HVAC, electrical, plumbing, and remodeling services. All services are
            subject to the specific terms and conditions agreed upon at the time of service scheduling or in a written contract.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Scheduling and Appointments</h2>
          <p>
            When scheduling a service, we will make reasonable efforts to arrive at the scheduled time. However, due to
            unforeseen circumstances, delays may occur. We will communicate any significant changes to the schedule as
            promptly as possible.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Project Estimates</h2>
          <p>
            Any estimates provided are based on our assessment of the work required and are subject to change if additional
            issues are discovered during the service. We will communicate any significant changes before proceeding
            with additional work.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Payment</h2>
          <p>
            Payment terms will be specified in your service agreement or contract. Unless otherwise stated, payment is due upon
            completion of the service. We accept various payment methods, including credit cards, checks, and electronic transfers.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Warranties and Guarantees</h2>
          <p>
            We stand behind our work and provide warranties on our services. The specific warranty terms vary by service type
            and will be provided in writing at the time of service. Manufacturer warranties apply to products and equipment
            installed by Saddlewood Contracting LLC.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Liability Limitations</h2>
          <p>
            Saddlewood Contracting LLC is not liable for:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Damages resulting from pre-existing conditions not caused by our services</li>
            <li>Damages caused by third parties</li>
            <li>Incidental or consequential damages</li>
            <li>Acts of nature or conditions beyond our control</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-6">Consumer Rights</h2>
          <p>
            These Terms and Conditions do not affect your statutory rights as a consumer under applicable federal, state,
            or local laws.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Property Access and Preparation</h2>
          <p>
            You agree to provide our technicians with reasonable access to areas requiring service. You are responsible for
            clearing and preparing the workspace as advised by our staff prior to service.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Cancellation Policy</h2>
          <p>
            If you need to cancel or reschedule a service appointment, please provide at least 24 hours' notice. Late cancellations
            or no-shows may result in a cancellation fee.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Website Use</h2>
          <p>
            The content on our website is for informational purposes only. We make reasonable efforts to ensure the accuracy of the
            information, but we do not guarantee its completeness or currency.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Changes to Terms and Conditions</h2>
          <p>
            We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new
            Terms and Conditions on this page and updating the "Last Updated" date at the top.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Saddlewood Contracting LLC</strong></p>
            <p>Phoenix, Arizona</p>
            <p>Phone: 480-999-6100</p>
            <p>Email: info@saddlewoodcontracting.com</p>
          </div>

          <div className="mt-8 mb-8">
            <Link href="/" className="text-gold hover:underline">
              « Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
