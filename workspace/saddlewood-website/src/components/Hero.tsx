import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-primary text-secondary relative py-16 sm:py-20 md:py-32 overflow-hidden">
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
      
      {/* Full-circle logo watermark - centered behind all content */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image 
            src="/images/logo-full.png" 
            alt=""
            width={900}
            height={900}
            className="opacity-[0.15]"
            style={{ width: '900px', height: '900px' }}
            priority
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              18 Years of Trusted AZ Contracting
            </h1>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4 max-w-2xl">
              Your complete solution for HVAC, electrical, plumbing, and remodeling services. 
              Licensed, insured, and committed to quality workmanship.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl opacity-90">
              Proudly serving Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, 
              Gilbert, Glendale, Fountain Hills, and surrounding areas.
            </p>
            
            <Link 
              href="/contact" 
              className="btn-primary inline-block relative overflow-hidden group transition-all duration-300 transform hover:scale-105 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 shadow-lg"
            >
              <span className="relative z-10">Get a Free Estimate</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </Link>
          </div>
          
          <div className="w-full md:w-5/12">
            <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-2xl border border-white border-opacity-20 shadow-lg">
              <div className="text-xs sm:text-sm text-white">
                <p className="font-bold mb-2">Licensed Contractor:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                  <p className="mb-1">ROC 350714 – CR-39 Air Conditioning</p>
                  <p className="mb-1">ROC 350715 – CR-11 Electrical</p>
                  <p className="mb-1">ROC 350716 – CR-37 Plumbing</p>
                  <p className="mb-1">ROC 305762 – KB-2 Residential/Commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
