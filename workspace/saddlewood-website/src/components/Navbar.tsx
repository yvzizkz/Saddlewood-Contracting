"use client";

import React, { useState, useEffect } from 'react';
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

// Theme toggle button component
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // Initialize theme on client-side
  useEffect(() => {
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  
  // Effect to handle theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-4 w-4 text-white"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-4 w-4 text-white"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )}
    </button>
  );
}

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
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="text-secondary"
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
