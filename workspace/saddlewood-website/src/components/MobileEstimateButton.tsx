"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileEstimateButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`md:hidden fixed bottom-20 left-4 right-4 z-30 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
    }`}>
      <Link 
        href="/contact" 
        className="flex items-center justify-center w-full px-6 py-4 bg-accent hover:bg-accent-dark 
                  text-white font-medium rounded-xl shadow-warm-lg
                  transition-all duration-300"
        aria-label="Schedule a consultation"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Schedule Your Consultation
      </Link>
    </div>
  );
}
