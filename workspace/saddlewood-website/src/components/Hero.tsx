import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-linen-texture pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-7/12">
            <div className="inline-block mb-8">
              <span className="text-taupe uppercase tracking-[0.25em] text-xs sm:text-sm font-medium">
                Paradise Valley's Premier Contractor
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1] text-primary">
              Crafting Exceptional
              <span className="block text-gold">Living Spaces</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-5 max-w-2xl text-primary/70 leading-relaxed">
              For discerning homeowners who demand excellence. We deliver remodeling, HVAC, electrical, and plumbing solutions with uncompromising attention to detail.
            </p>
            
            <p className="text-base mb-10 max-w-2xl text-taupe">
              Serving Paradise Valley, Scottsdale, Phoenix, and select communities throughout the Valley.
            </p>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="pl-4 border-l-2 border-gold/40">
                <p className="text-sm italic text-primary/60">
                  "Your vision, built right."
                </p>
              </div>
              <div className="h-6 w-px bg-taupe/30"></div>
              <p className="text-sm text-gold-dark font-medium">
                Family-Owned Since 2007
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 
                          bg-gold text-white font-medium 
                          rounded-xl shadow-gold hover:shadow-gold-lg
                          hover:bg-gold-dark transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule a Consultation
              </Link>
              
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-10 py-5 
                          bg-white text-primary font-medium border border-taupe/30
                          rounded-xl shadow-soft hover:shadow-lift
                          hover:border-gold/50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                View Our Portfolio
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-sandstone shadow-soft-lg">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-sage/20 flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sage-dark font-semibold text-sm uppercase tracking-wider">Fully Licensed & Insured</p>
                  <p className="text-taupe text-xs">Arizona Registrar of Contractors</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-4 bg-ivory rounded-xl">
                  <span className="text-primary">HVAC Systems</span>
                  <span className="text-gold-dark font-medium">ROC 350714</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ivory rounded-xl">
                  <span className="text-primary">Electrical</span>
                  <span className="text-gold-dark font-medium">ROC 350715</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ivory rounded-xl">
                  <span className="text-primary">Plumbing</span>
                  <span className="text-gold-dark font-medium">ROC 350716</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ivory rounded-xl">
                  <span className="text-primary">General Contracting</span>
                  <span className="text-gold-dark font-medium">ROC 305762</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-sandstone">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary font-medium">18+ Years of Excellence</p>
                    <p className="text-taupe text-xs">Serving Arizona Since 2007</p>
                  </div>
                  <div className="text-right">
                    <a href="tel:4809996100" className="text-gold font-semibold text-lg hover:text-gold-dark transition-colors">(480) 999-6100</a>
                    <p className="text-taupe text-xs">Concierge Line</p>
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
