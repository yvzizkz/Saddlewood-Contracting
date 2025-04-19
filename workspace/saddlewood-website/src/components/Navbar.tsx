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
    <nav className="bg-primary text-secondary py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CompanyLogo />
            <span className="ml-3 text-xl font-bold">Saddlewood Contracting</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <div className="relative group">
              <span className="nav-link cursor-pointer">Services</span>
              <div className="absolute left-0 mt-2 w-48 bg-primary shadow-lg rounded-md overflow-hidden z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <Link href="/services/hvac" className="block px-4 py-2 text-secondary hover:bg-accent">
                  HVAC
                </Link>
                <Link href="/services/electrical" className="block px-4 py-2 text-secondary hover:bg-accent">
                  Electrical
                </Link>
                <Link href="/services/plumbing" className="block px-4 py-2 text-secondary hover:bg-accent">
                  Plumbing
                </Link>
                <Link href="/services/remodeling" className="block px-4 py-2 text-secondary hover:bg-accent">
                  Remodeling
                </Link>
              </div>
            </div>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/contact" className="ml-4 px-6 py-2 text-secondary rounded-full hover:ring-2 hover:ring-white transition-all duration-300">
              Book Estimate
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
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
          <div className="md:hidden mt-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="nav-link mb-1">Services</p>
              <div className="pl-4 space-y-2">
                <Link 
                  href="/services/hvac" 
                  className="block py-1 text-secondary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HVAC
                </Link>
                <Link 
                  href="/services/electrical" 
                  className="block py-1 text-secondary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Electrical
                </Link>
                <Link 
                  href="/services/plumbing" 
                  className="block py-1 text-secondary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plumbing
                </Link>
                <Link 
                  href="/services/remodeling" 
                  className="block py-1 text-secondary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Remodeling
                </Link>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 px-6 text-secondary rounded-full hover:ring-2 hover:ring-white transition-all duration-300 text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Estimate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
