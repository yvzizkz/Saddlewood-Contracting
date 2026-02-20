"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CompanyLogo = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/images/logo.png"
      alt="Saddlewood Contracting Logo"
      width={64}
      height={64}
      className="transition-opacity duration-300 hover:opacity-80"
      style={{ width: '64px', height: 'auto' }}
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
    <header className="bg-obsidian sticky top-0 z-50 border-b border-border-default">
      <div className="bg-surface py-1.5 text-center text-xs">
        <p className="text-silver-dark font-medium tracking-wide">
          AZ ROC #350714, #350715, #350716, #305762 |
          <Link href="/license-info" className="underline hover:text-gold transition-colors ml-1">License Details</Link>
        </p>
      </div>

      <nav className="py-3 sm:py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="group flex items-center"
              aria-label="Saddlewood Contracting Homepage"
            >
              <CompanyLogo />

              <div className="flex flex-col ml-3">
                <span className="text-xl sm:text-2xl font-serif font-semibold text-text-primary tracking-tight">
                  Saddlewood
                </span>
                <span className="text-xs tracking-widest uppercase text-gold font-medium">Contracting LLC</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center h-14">
              <div className="flex items-center h-full gap-1">
                <Link href="/" className="px-4 py-2 text-sm font-medium text-silver hover:text-gold transition-colors duration-200 rounded-lg hover:bg-surface-light">
                  Home
                </Link>
                <Link href="/about" className="px-4 py-2 text-sm font-medium text-silver hover:text-gold transition-colors duration-200 rounded-lg hover:bg-surface-light">
                  About
                </Link>
                <div className="relative group">
                  <div className="px-4 py-2 text-sm font-medium text-silver cursor-pointer hover:text-gold transition-colors duration-200 rounded-lg hover:bg-surface-light flex items-center gap-1">
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  <div className="absolute left-0 mt-1 w-48 bg-surface shadow-soft-lg rounded-xl overflow-hidden z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 border border-border-default">
                    <Link href="/services/remodeling" className="block px-4 py-3 text-silver hover:bg-surface-light hover:text-gold transition-colors duration-200">
                      Remodeling
                    </Link>
                    <Link href="/services/hvac" className="block px-4 py-3 text-silver hover:bg-surface-light hover:text-gold transition-colors duration-200">
                      HVAC
                    </Link>
                    <Link href="/services/electrical" className="block px-4 py-3 text-silver hover:bg-surface-light hover:text-gold transition-colors duration-200">
                      Electrical
                    </Link>
                    <Link href="/services/plumbing" className="block px-4 py-3 text-silver hover:bg-surface-light hover:text-gold transition-colors duration-200">
                      Plumbing
                    </Link>
                  </div>
                </div>
                <Link href="/gallery" className="px-4 py-2 text-sm font-medium text-silver hover:text-gold transition-colors duration-200 rounded-lg hover:bg-surface-light">
                  Gallery
                </Link>
                <Link href="/contact" className="px-4 py-2 text-sm font-medium text-silver hover:text-gold transition-colors duration-200 rounded-lg hover:bg-surface-light">
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-3 ml-6">
                <a
                  href="https://www.instagram.com/saddlewood_contracting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-silver-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/SaddlewoodAZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-silver-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@saddlewoodcontracting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 text-silver-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>

              <Link
                href="/contact"
                className="ml-6 px-6 py-3 bg-gold text-text-inverse rounded-xl
                          hover:bg-gold-dark transition-all duration-300 font-medium shadow-gold
                          hover:shadow-gold-lg"
              >
                Schedule Consultation
              </Link>
            </div>

            <button
              className="md:hidden text-text-primary p-2 rounded-lg hover:bg-surface-light transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:hidden fixed inset-0 z-40 bg-obsidian/80 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div
            className={`md:hidden fixed right-0 top-0 bottom-0 w-[280px] z-50 bg-surface shadow-soft-xl transition-transform duration-300 transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-5 flex justify-between items-center border-b border-border-default">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Saddlewood Contracting Logo"
                  width={40}
                  height={40}
                  className="transition-opacity duration-300"
                  style={{ width: '40px', height: 'auto' }}
                  priority
                />
                <div className="ml-2">
                  <p className="text-sm font-serif font-semibold text-text-primary">Saddlewood</p>
                  <p className="text-xs tracking-wider text-gold">CONTRACTING</p>
                </div>
              </div>

              <button
                className="text-text-primary p-2 rounded-lg hover:bg-surface-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-5 py-6 space-y-1">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-text-primary hover:text-gold hover:bg-surface-light rounded-xl transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2">
                <p className="px-4 text-xs uppercase tracking-wider text-silver-dark font-medium mb-2">Services</p>
                {['Remodeling', 'HVAC', 'Electrical', 'Plumbing'].map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service.toLowerCase()}`}
                    className="block py-2.5 px-4 pl-6 text-silver hover:text-gold hover:bg-surface-light rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border-default bg-surface-light">
              <Link
                href="/contact"
                className="flex items-center justify-center py-3.5 px-6 bg-gold text-text-inverse rounded-xl
                          hover:bg-gold-dark transition-all duration-300 text-center font-medium shadow-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
              <p className="mt-4 text-center text-xs text-silver-dark">
                Licensed & Insured | AZ ROC 350714
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
