import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const AnimatedBackgroundPattern = dynamic(() => import('@/components/AnimatedBackgroundPattern'), {
  ssr: false
});

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-primary">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: 'url(/images/logo-full.png)', backgroundSize: '35%' }}
        aria-hidden="true"
      />
      
      <AnimatedBackgroundPattern 
        patternType="construction" 
        speed="medium" 
        opacity={0.05} 
        className="z-10"
      />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0 text-white">
            <div className="inline-block mb-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-medium border border-gold/30 px-4 py-2 rounded-full">
                Exclusive Home Services
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
              Crafting Exceptional
              <span className="block text-gold">Living Spaces</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-4 max-w-2xl text-gray-200 leading-relaxed">
              For discerning homeowners who demand excellence. We deliver custom remodeling, HVAC, electrical, and plumbing solutions with uncompromising attention to detail.
            </p>
            
            <p className="text-base sm:text-lg mb-6 max-w-2xl text-gray-400">
              Serving Paradise Valley, Scottsdale, Phoenix, and select communities throughout the Valley.
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="pl-4 border-l-2 border-gold/50">
                <p className="text-sm italic text-gray-300">
                  "Every detail custom. Every home unforgettable."
                </p>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <p className="text-sm text-gold font-medium">
                Family-Owned Since 2007
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 
                          bg-gradient-to-r from-gold to-gold-dark text-primary font-semibold 
                          rounded-lg shadow-gold-glow hover:shadow-xl
                          transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule a Design Consultation
              </Link>
              
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-8 py-4 
                          border border-white/30 text-white font-medium 
                          rounded-lg hover:bg-white/10 hover:border-gold/50
                          transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                View Our Portfolio
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-5/12">
            <div className="bg-primary/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gold/20 shadow-premium">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gold font-semibold text-sm uppercase tracking-wider">Fully Licensed & Insured</p>
                  <p className="text-gray-400 text-xs">Arizona Registrar of Contractors</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg">
                  <span className="text-gray-300">HVAC Systems</span>
                  <span className="text-gold font-medium">ROC 350714</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg">
                  <span className="text-gray-300">Electrical</span>
                  <span className="text-gold font-medium">ROC 350715</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg">
                  <span className="text-gray-300">Plumbing</span>
                  <span className="text-gold font-medium">ROC 350716</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg">
                  <span className="text-gray-300">General Contracting</span>
                  <span className="text-gold font-medium">ROC 305762</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">18+ Years of Excellence</p>
                    <p className="text-gray-400 text-xs">Serving Arizona Since 2007</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-semibold text-lg">(480) 999-6100</p>
                    <p className="text-gray-400 text-xs">Concierge Line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
    </section>
  );
}
