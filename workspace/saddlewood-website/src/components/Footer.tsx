import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-100 py-10 sm:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 mb-8">
          <div className="md:col-span-3">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Saddlewood Contracting</h3>
            <p className="mb-4 text-sm sm:text-base">18 years of trusted service in Arizona. We provide professional HVAC, electrical, plumbing, and remodeling services throughout the Phoenix Valley.</p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-3 sm:mb-4">Our Services</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:gap-2">
              <li>
                <Link href="/services/hvac" className="text-sm sm:text-base hover:text-accent transition-colors duration-300">
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-sm sm:text-base hover:text-accent transition-colors duration-300">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-sm sm:text-base hover:text-accent transition-colors duration-300">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/remodeling" className="text-sm sm:text-base hover:text-accent transition-colors duration-300">
                  Remodeling
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-3 sm:mb-4">Service Areas</h3>
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-1 text-sm sm:text-base">
              <p className="mb-0 sm:mb-1">Phoenix</p>
              <p className="mb-0 sm:mb-1">Paradise Valley</p>
              <p className="mb-0 sm:mb-1">Scottsdale</p>
              <p className="mb-0 sm:mb-1">Tempe</p>
              <p className="mb-0 sm:mb-1">Mesa</p>
              <p className="mb-0 sm:mb-1">Chandler</p>
              <p className="mb-0 sm:mb-1">Gilbert</p>
              <p className="mb-0 sm:mb-1">Glendale</p>
              <p>Fountain Hills</p>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 sm:mb-4">Contact Us</h3>
              <div className="text-sm sm:text-base">
                <p className="mb-1 sm:mb-2">Phoenix, Arizona</p>
                <p className="mb-1 sm:mb-2">
                  <a href="tel:4809996100" className="hover:text-accent transition-colors">480-999-6100</a>
                </p>
                <p>
                  <a href="mailto:info@saddlewoodcontracting.com" className="hover:text-accent transition-colors">info@saddlewoodcontracting.com</a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">Business Hours</h3>
              <div className="text-sm sm:text-base">
                <p className="mb-1 sm:mb-2">Monday - Friday: 7am - 5pm</p>
                <p className="mb-1 sm:mb-2">Saturday: 8am - 3pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/privacy-policy" className="text-gray-100 hover:text-accent transition-colors duration-300 text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-100">|</span>
            <Link href="/terms-and-conditions" className="text-gray-100 hover:text-accent transition-colors duration-300 text-xs sm:text-sm">
              Terms & Conditions
            </Link>
          </div>
          
          <p className="uppercase text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider px-2">
            Licensed & Insured | AZ ROC 350714 CR‑39 • ROC 350715 CR‑11 • ROC 350716 CR‑37 • 305762 KB‑2
          </p>
          
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Saddlewood Contracting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
