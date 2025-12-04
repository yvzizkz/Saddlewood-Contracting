"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Professional company logo with larger size
const CompanyLogo = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/images/logo.png"
      alt="Saddlewood Contracting Logo"
      width={80}
      height={80}
      className="transition-opacity duration-300 hover:opacity-80"
      style={{ width: '80px', height: 'auto' }}
      priority
    />
  </div>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-primary text-secondary sticky top-0 z-50 shadow-md flex flex-col">
      {/* License info bar */}
      <div className="bg-black bg-opacity-80 py-1 text-center text-xs">
        <p className="text-white font-medium">AZ ROC #350714, #350715, #350716, #305762 | <Link href="/license-info" className="underline hover:text-accent transition-colors text-white">License Details</Link></p>
      </div>
      
      <nav className="py-3 sm:py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name with flush styling */}
            <Link 
              href="/" 
              className="group flex items-center"
              aria-label="Saddlewood Contracting Homepage"
            >
              {/* Logo with hover opacity effect */}
              <CompanyLogo />
              
              {/* Company name with premium styling - sits flush against logo */}
              <div className="flex flex-col ml-2">
                <span className="text-lg sm:text-xl uppercase tracking-wider font-bold truncate max-w-[180px] sm:max-w-none relative">
                  Saddlewood
                  {/* Decorative underline that appears on hover */}
                  <span className="absolute left-0 -bottom-px h-px w-0 bg-white opacity-60 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </span>
                <span className="text-xs sm:text-sm tracking-widest uppercase text-gray-300">Contracting</span>
                <span className="hidden sm:block text-[10px] uppercase tracking-wider text-gray-400">Est. 2007</span>
              </div>
            </Link>
            
            {/* Desktop Navigation with aligned tabs */}
            <div className="hidden md:flex items-center h-16">
              {/* Navigation links in a row with consistent height */}
              <div className="flex items-center h-full">
                <Link href="/" className="px-4 h-full flex items-center uppercase tracking-wider text-sm font-medium hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent">
                  HOME
                </Link>
                <div className="relative group h-full">
                  <div className="px-4 h-full flex items-center uppercase tracking-wider text-sm font-medium cursor-pointer hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent">
                    SERVICES
                  </div>
                  <div className="absolute left-0 mt-0 w-48 bg-primary shadow-lg rounded-md overflow-hidden z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    <Link href="/services/hvac" className="block px-4 py-3 text-secondary hover:bg-accent transition-colors duration-200">
                      HVAC
                    </Link>
                    <Link href="/services/electrical" className="block px-4 py-3 text-secondary hover:bg-accent transition-colors duration-200">
                      Electrical
                    </Link>
                    <Link href="/services/plumbing" className="block px-4 py-3 text-secondary hover:bg-accent transition-colors duration-200">
                      Plumbing
                    </Link>
                    <Link href="/services/remodeling" className="block px-4 py-3 text-secondary hover:bg-accent transition-colors duration-200">
                      Remodeling
                    </Link>
                  </div>
                </div>
                <Link href="/contact" className="px-4 h-full flex items-center uppercase tracking-wider text-sm font-medium hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent">
                  CONTACT
                </Link>
              </div>
              
              <div className="flex items-center space-x-3 ml-4">
                <a 
                  href="https://www.instagram.com/saddlewood_contracting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://tiktok.com/@saddlewoodcontracting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/SaddlewoodAZ/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              <Link 
                href="/contact" 
                className="ml-4 px-6 py-3 text-charcoal bg-gold hover:bg-gold-light 
                          rounded-lg transition-all duration-300 font-semibold shadow-lg
                          transform hover:scale-105 hover:shadow-gold-glow"
              >
                Schedule Consultation
              </Link>
            </div>
            
            {/* Enhanced Mobile Menu Button with circular motif to match logo */}
            <button 
              className="md:hidden text-secondary relative p-3 group"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {/* Decorative rings that echo the logo design */}
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'bg-white bg-opacity-10 ring-2 ring-white ring-opacity-20' : 'bg-transparent'}`}></div>
              
              <svg 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className={`w-6 h-6 relative z-10 transition-transform duration-300 ${mobileMenuOpen ? 'scale-90' : 'scale-100'}`}
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  />
                )}
              </svg>
              
              {/* Subtle pulse effect on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full ring-2 ring-white ring-opacity-10 animate-pulse"></div>
              </div>
            </button>
          </div>
          
          {/* Premium Mobile Menu with circular motifs and refined styling */}
          <div 
            className={`md:hidden fixed inset-0 z-40 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          <div 
            className={`md:hidden fixed right-0 top-0 bottom-0 w-[270px] z-50 bg-primary shadow-xl transition-transform duration-500 transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Mobile menu header with logo */}
            <div className="p-5 flex justify-between items-center border-b border-white border-opacity-10">
              <div className="flex items-center">
                {/* Logo in mobile menu (larger size) */}
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Saddlewood Contracting Logo"
                    width={48}
                    height={48}
                    className="transition-opacity duration-300"
                    style={{ width: '48px', height: 'auto' }}
                    priority
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm uppercase tracking-wider font-bold text-white">Saddlewood</p>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Est. 2007</p>
                </div>
              </div>
              
              {/* Close button */}
              <button 
                className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu links */}
            <div className="px-5 py-6 space-y-6">
              {/* Menu items with circular accents matching the logo */}
              <Link 
                href="/" 
                className="flex items-center py-2 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative w-8 h-8 mr-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white border-opacity-20 group-hover:border-opacity-50 transition-all duration-300"></div>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <span className="uppercase tracking-wider text-sm text-white group-hover:text-accent transition-colors duration-300">Home</span>
              </Link>
              
              {/* Services dropdown with expandable menu */}
              <div>
                <div className="flex items-center py-2 cursor-pointer group">
                  <div className="relative w-8 h-8 mr-3 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white border-opacity-20 group-hover:border-opacity-50 transition-all duration-300"></div>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span className="uppercase tracking-wider text-sm text-white group-hover:text-accent transition-colors duration-300">Services</span>
                </div>
                
                <div className="ml-11 mt-2 space-y-3 border-l border-white border-opacity-10 pl-4">
                  {/* Service submenu items with subtle styling */}
                  {['HVAC', 'Electrical', 'Plumbing', 'Remodeling'].map((service) => (
                    <Link 
                      key={service}
                      href={`/services/${service.toLowerCase()}`} 
                      className="block py-1 text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="flex items-center py-2 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative w-8 h-8 mr-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white border-opacity-20 group-hover:border-opacity-50 transition-all duration-300"></div>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="uppercase tracking-wider text-sm text-white group-hover:text-accent transition-colors duration-300">Contact</span>
              </Link>
            </div>
            
            {/* Fixed CTA button at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white border-opacity-10">
              <Link 
                href="/contact" 
                className="flex items-center justify-center py-3 px-6 bg-accent text-white rounded-xl 
                          hover:bg-accent-dark transition-all duration-300 text-center shadow-lg
                          transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative w-5 h-5 mr-2 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="font-bold">Book an Estimate</span>
              </Link>
              
              {/* Bottom text with company info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Licensed & Insured | AZ ROC 350714
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
