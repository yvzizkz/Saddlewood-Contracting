import React from 'react';
import Link from 'next/link';
import ServiceCTA from '@/components/ServiceCTA';

export default function PlumbingPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Plumbing Services</h1>
          <p className="text-xl">Professional plumbing solutions for residential and commercial needs</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Complete Plumbing Solutions</h2>
            <p className="mb-4">
              Saddlewood Contracting delivers reliable plumbing services throughout Arizona. From emergency repairs to complete 
              plumbing system installations, our licensed professionals handle every job with expertise and attention to detail.
            </p>
            <p className="mb-6">
              We take pride in offering prompt service, quality workmanship, and fair pricing on all plumbing projects, large or small.
            </p>
            
            <ServiceCTA service="Plumbing" />
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Our Plumbing Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Leak Detection & Repair</strong> - Finding and fixing leaks quickly to prevent water damage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Pipe Installation & Replacement</strong> - New installations or replacing damaged pipes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Fixture Installation</strong> - Sinks, faucets, toilets, showers, and more</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Water Heater Services</strong> - Installation, repair, and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Drain Cleaning</strong> - Resolving clogs and maintaining proper drainage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Sewer Line Services</strong> - Inspection, repair, and replacement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl ring-2 ring-gray-300 p-8 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Plumbing Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Licensed Plumbers</h4>
              <p>ROC 350716 – CR-37 Plumbing licensed for your peace of mind</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Quality Materials</h4>
              <p>Using only industry-approved, durable plumbing materials and fixtures</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Emergency Service</h4>
              <p>Fast response when plumbing emergencies strike</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
