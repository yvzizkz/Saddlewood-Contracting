import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-primary text-secondary relative py-20 md:py-32 overflow-hidden">
      {/* Circular ring background - positioned behind content */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image 
            src="/images/circle-bg.svg" 
            alt="Background circles" 
            width={900}
            height={900}
            className="opacity-70"
            priority
          />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              18 Years of Trusted AZ Contracting
            </h1>
            <p className="text-xl mb-4 max-w-2xl">
              Your complete solution for HVAC, electrical, plumbing, and remodeling services. 
              Licensed, insured, and committed to quality workmanship.
            </p>
            <p className="text-lg mb-8 max-w-2xl opacity-90">
              Proudly serving Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, 
              North Phoenix, Biltmore, Madison, and surrounding areas.
            </p>
            
            <Link 
              href="/contact" 
              className="btn-primary inline-block relative overflow-hidden group transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get a Free Estimate</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-in-out"></span>
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
    </section>
  );
}
