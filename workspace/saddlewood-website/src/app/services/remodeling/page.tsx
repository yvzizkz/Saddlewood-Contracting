import React from 'react';
import Link from 'next/link';

export default function RemodelingPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Remodeling Services</h1>
          <p className="text-xl">Transform your space with professional remodeling solutions</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Remodeling Services</h2>
            <p className="mb-4">
              Saddlewood Contracting offers comprehensive remodeling services to transform your home or business. 
              With our KB-2 dual residential and small commercial license, we have the expertise to handle projects of any size.
            </p>
            <p className="mb-6">
              From kitchen and bathroom renovations to full-property remodels, our team delivers quality craftsmanship, 
              attention to detail, and project management excellence.
            </p>
            
            <Link href="/contact" className="btn-primary inline-block">
              Start Your Project
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Our Remodeling Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Kitchen Remodeling</strong> - Transform the heart of your home with modern designs and functionality</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Bathroom Renovations</strong> - Create beautiful, functional bathroom spaces</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Room Additions</strong> - Expand your living space with quality construction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Whole Home Remodels</strong> - Comprehensive renovations for your entire property</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Commercial Renovations</strong> - Update your business space for improved functionality and aesthetics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Outdoor Living Spaces</strong> - Create beautiful outdoor environments</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl ring-2 ring-gray-300 p-8 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">The Saddlewood Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Full-Service Capability</h4>
              <p>ROC 305762 – KB-2 Dual Residential and Small Commercial license</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Design Consultation</h4>
              <p>Expert guidance to help bring your vision to life</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Detailed Planning</h4>
              <p>Comprehensive project planning to ensure on-time, on-budget completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
