import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-primary text-secondary relative py-16 sm:py-20 md:py-32 overflow-hidden">
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
              className="inline-block relative overflow-hidden group transition-all duration-300 
                        transform hover:scale-105 text-base sm:text-lg px-7 py-4 sm:px-9 sm:py-5 
                        bg-accent hover:bg-accent-dark text-white font-bold rounded-xl
                        shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Get a Free Estimate
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500 ease-in-out"></span>
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
