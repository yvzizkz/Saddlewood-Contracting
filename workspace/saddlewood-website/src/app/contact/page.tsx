import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white font-medium">Get in touch for a free estimate or consultation</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="mb-6">
              Whether you need a quick repair or a complete renovation, our team is ready to help.
              Fill out the form, and we'll get back to you as soon as possible to discuss your needs.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Our Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center mr-3 flex-shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <strong className="block">Address</strong>
                    <span>Phoenix, Arizona</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center mr-3 flex-shrink-0">
                    <span>📞</span>
                  </div>
                  <div>
                    <strong className="block">Phone</strong>
                    <span>480-999-6100</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center mr-3 flex-shrink-0">
                    <span>✉️</span>
                  </div>
                  <div>
                    <strong className="block">Email</strong>
                    <span>info@saddlewoodcontracting.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm bg-gray-100 p-4 rounded-lg">
              <p className="font-bold mb-2">Licensed Contractor:</p>
              <p>ROC 350714 – CR-39 Air Conditioning and Refrigeration</p>
              <p>ROC 350715 – CR-11 Electrical</p>
              <p>ROC 350716 – CR-37 Plumbing</p>
              <p>ROC 305762 – KB-2 Dual Residential and Small Commercial</p>
            </div>
          </div>
          
          <div>
            {/* GoHighLevel Form Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Your Free Estimate</h3>
              <div className="text-center text-gray-600 py-12">
                <p className="mb-4">GoHighLevel form will be embedded here</p>
                <p className="text-sm">This placeholder will be replaced with your GoHighLevel form embed code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
