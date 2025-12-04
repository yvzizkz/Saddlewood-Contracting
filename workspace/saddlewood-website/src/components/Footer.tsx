import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-100">
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Saddlewood Contracting"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-serif font-semibold text-white">Saddlewood</h3>
                <p className="text-gold text-sm tracking-wider">CONTRACTING LLC</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              For nearly two decades, we've been crafting exceptional living spaces for Arizona's most discerning homeowners. 
              Premium HVAC, electrical, plumbing, and remodeling services.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/saddlewood_contracting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/SaddlewoodAZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Like us on Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-gold font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/remodeling" className="text-gray-400 hover:text-gold transition-colors">
                  Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/hvac" className="text-gray-400 hover:text-gold transition-colors">
                  HVAC Systems
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-gray-400 hover:text-gold transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-gray-400 hover:text-gold transition-colors">
                  Plumbing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-gold font-semibold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-gold transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/license-info" className="text-gray-400 hover:text-gold transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-gold font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Concierge Line</p>
                <a href="tel:4809996100" className="text-2xl font-serif text-gold hover:text-gold-light transition-colors">
                  (480) 999-6100
                </a>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a href="mailto:info@saddlewoodcontracting.com" className="text-gray-400 hover:text-gold transition-colors">
                  info@saddlewoodcontracting.com
                </a>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Business Hours</p>
                <p className="text-gray-400 text-sm">Monday - Friday: 7am - 5pm</p>
                <p className="text-gray-400 text-sm">Saturday: 8am - 3pm</p>
                <p className="text-gray-400 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs mb-2 tracking-wide">
                AZ ROC 350714 • 350715 • 350716 • 305762
              </p>
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} Saddlewood Contracting LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
