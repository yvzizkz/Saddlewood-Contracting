import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-desert">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-7/12">
            <div className="inline-block mb-6">
              <span className="text-accent uppercase tracking-[0.25em] text-xs sm:text-sm font-medium bg-accent/10 px-5 py-2.5 rounded-full border border-accent/20">
                Paradise Valley's Premier Contractor
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1] text-primary">
              Crafting Exceptional
              <span className="block text-accent">Living Spaces</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-4 max-w-2xl text-charcoal-light leading-relaxed">
              For discerning homeowners who demand excellence. We deliver remodeling, HVAC, electrical, and plumbing solutions with uncompromising attention to detail.
            </p>
            
            <p className="text-base mb-8 max-w-2xl text-sandstone-dark">
              Serving Paradise Valley, Scottsdale, Phoenix, and select communities throughout the Valley.
            </p>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="pl-4 border-l-2 border-accent/50">
                <p className="text-sm italic text-charcoal-light">
                  "Your vision, built right."
                </p>
              </div>
              <div className="h-6 w-px bg-sandstone-dark/30"></div>
              <p className="text-sm text-accent font-medium">
                Family-Owned Since 2007
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 
                          bg-accent text-white font-medium 
                          rounded-xl shadow-warm hover:shadow-warm-lg
                          hover:bg-accent-dark transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule a Consultation
              </Link>
              
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-8 py-4 
                          bg-white text-primary font-medium border-2 border-sandstone
                          rounded-xl shadow-soft hover:shadow-soft-lg
                          hover:border-accent transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                View Our Portfolio
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-sandstone-light shadow-soft-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider">Fully Licensed & Insured</p>
                  <p className="text-charcoal-light text-xs">Arizona Registrar of Contractors</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3.5 bg-desert rounded-xl">
                  <span className="text-charcoal">HVAC Systems</span>
                  <span className="text-accent font-medium">ROC 350714</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-desert rounded-xl">
                  <span className="text-charcoal">Electrical</span>
                  <span className="text-accent font-medium">ROC 350715</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-desert rounded-xl">
                  <span className="text-charcoal">Plumbing</span>
                  <span className="text-accent font-medium">ROC 350716</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-desert rounded-xl">
                  <span className="text-charcoal">General Contracting</span>
                  <span className="text-accent font-medium">ROC 305762</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-sandstone-light">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary font-medium">18+ Years of Excellence</p>
                    <p className="text-charcoal-light text-xs">Serving Arizona Since 2007</p>
                  </div>
                  <div className="text-right">
                    <a href="tel:4809996100" className="text-accent font-semibold text-lg hover:text-accent-dark transition-colors">(480) 999-6100</a>
                    <p className="text-charcoal-light text-xs">Concierge Line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
