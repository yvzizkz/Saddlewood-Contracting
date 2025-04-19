import React from 'react';
import Link from 'next/link';

// This SVG creates a subtle circular ring background element
const CircularRing = () => (
  <svg 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
    width="600"
    height="600"
    viewBox="0 0 600 600"
  >
    <circle 
      cx="300" 
      cy="300" 
      r="280" 
      fill="none" 
      stroke="white" 
      strokeWidth="8" 
    />
    <circle 
      cx="300" 
      cy="300" 
      r="230" 
      fill="none" 
      stroke="white" 
      strokeWidth="4" 
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="bg-primary text-secondary relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              18 Years of Trusted AZ Contracting
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Your complete solution for HVAC, electrical, plumbing, and remodeling services. 
              Licensed, insured, and committed to quality workmanship.
            </p>
            
            <Link href="/contact" className="btn-primary inline-block">
              Get a Free Estimate
            </Link>
          </div>
          
          <div className="md:w-5/12">
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl border border-white border-opacity-20">
              <div className="text-sm text-white">
                <p className="font-bold mb-2">Licensed Contractor:</p>
                <p>ROC 350714 – CR-39 Air Conditioning and Refrigeration</p>
                <p>ROC 350715 – CR-11 Electrical</p>
                <p>ROC 350716 – CR-37 Plumbing</p>
                <p>ROC 305762 – KB-2 Dual Residential and Small Commercial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circular ring background */}
      <CircularRing />
    </section>
  );
}
