"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Using actual logo image
const CompanyLogo = () => (
  <div className="flex items-center">
    <Image
      src="/images/logo.png"
      alt="Saddlewood Contracting Logo"
      width={60}
      height={60}
      className="rounded-full"
      style={{ width: '60px', height: '60px' }}
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
    <nav className="bg-primary text-secondary py-3 sm:py-4 sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CompanyLogo />
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold truncate max-w-[180px] sm:max-w-none">Saddlewood Contracting</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="nav-link hover:text-accent transition-colors duration-200">
              Home
            </Link>
            <div className="relative group">
              <span className="nav-link cursor-pointer hover:text-accent transition-colors duration-200">Services</span>
              <div className="absolute left-0 mt-2 w-48 bg-primary shadow-lg rounded-md overflow-hidden z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
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
            <Link href="/contact" className="nav-link hover:text-accent transition-colors duration-200">
              Contact
            </Link>
            <Link href="/contact" className="ml-3 sm:ml-4 px-4 sm:px-6 py-2 text-secondary bg-accent bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all duration-300 font-medium">
              Book Estimate
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-6 h-6"
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
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 px-1 py-2 space-y-3 bg-gray-800 bg-opacity-30 rounded-lg">
            <Link 
              href="/" 
              className="flex items-center py-3 px-2 nav-link hover:bg-primary-darker rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Home
            </Link>
            <div className="py-2 px-2">
              <p className="nav-link mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Services
              </p>
              <div className="pl-7 space-y-2">
                <Link 
                  href="/services/hvac" 
                  className="block py-2 px-3 text-secondary rounded-md hover:bg-primary-darker transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HVAC
                </Link>
                <Link 
                  href="/services/electrical" 
                  className="block py-2 px-3 text-secondary rounded-md hover:bg-primary-darker transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Electrical
                </Link>
                <Link 
                  href="/services/plumbing" 
                  className="block py-2 px-3 text-secondary rounded-md hover:bg-primary-darker transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plumbing
                </Link>
                <Link 
                  href="/services/remodeling" 
                  className="block py-2 px-3 text-secondary rounded-md hover:bg-primary-darker transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Remodeling
                </Link>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="flex items-center py-3 px-2 nav-link hover:bg-primary-darker rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center justify-center py-3 px-6 text-secondary bg-accent rounded-md hover:bg-opacity-90 transition-all duration-300 text-center mt-2 mx-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Book Estimate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
