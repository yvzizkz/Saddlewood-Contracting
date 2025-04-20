import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Saddlewood Contracting</h3>
            <p className="mb-4">18 years of trusted service in Arizona. We provide professional HVAC, electrical, plumbing, and remodeling services throughout the Phoenix Valley.</p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/hvac" className="hover:text-accent transition-colors duration-300">
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="hover:text-accent transition-colors duration-300">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="hover:text-accent transition-colors duration-300">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/remodeling" className="hover:text-accent transition-colors duration-300">
                  Remodeling
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <p className="mb-1">Phoenix</p>
            <p className="mb-1">Paradise Valley</p>
            <p className="mb-1">Scottsdale</p>
            <p className="mb-1">Tempe</p>
            <p className="mb-1">Mesa</p>
            <p className="mb-1">Chandler</p>
            <p>Gilbert</p>
          </div>
          
          <div className="md:col-span-3">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Phoenix, Arizona</p>
              <p className="mb-2">480-999-6100</p>
              <p>info@saddlewoodcontracting.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Friday: 7am - 5pm</p>
              <p className="mb-2">Saturday: 8am - 3pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/privacy-policy" className="text-secondary hover:text-accent transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <span className="text-secondary">|</span>
            <Link href="/terms-and-conditions" className="text-secondary hover:text-accent transition-colors duration-300 text-sm">
              Terms & Conditions
            </Link>
          </div>
          
          <p className="uppercase text-sm mb-4 tracking-wider">
            Licensed & Insured | AZ ROC 350714 CR‑39 • ROC 350715 CR‑11 • ROC 350716 CR‑37 • 305762 KB‑2
          </p>
          
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Saddlewood Contracting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
