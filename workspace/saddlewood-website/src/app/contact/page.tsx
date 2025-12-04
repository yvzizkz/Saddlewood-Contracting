import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Consultation - Saddlewood Contracting | Phoenix AZ',
  description: 'Schedule a private consultation for premium HVAC, electrical, plumbing, and remodeling services. Serving Paradise Valley, Scottsdale, Phoenix, and select communities.',
  keywords: 'consultation, contact, estimate, HVAC, electrical, plumbing, remodeling, Phoenix, Paradise Valley, Scottsdale',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-4">Schedule a Consultation</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your vision and explore how we can elevate your home
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Why Choose Saddlewood</span>
              <h2 className="font-serif text-3xl font-semibold mt-2 text-charcoal">
                The Concierge Experience
              </h2>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe every exceptional project begins with a thoughtful conversation. Our consultations are designed 
              to understand your unique vision, lifestyle needs, and objectives—ensuring we deliver solutions that 
              exceed expectations.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Service Areas</h3>
                  <p className="text-gray-600 text-sm">Paradise Valley, Scottsdale, Phoenix, Arcadia, Fountain Hills, and select Valley communities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Concierge Line</h3>
                  <a href="tel:4809996100" className="text-gold text-lg font-semibold hover:text-gold-dark transition-colors">
                    (480) 999-6100
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                  <a href="mailto:info@saddlewoodcontracting.com" className="text-gray-600 hover:text-gold transition-colors">
                    info@saddlewoodcontracting.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-sm">Monday - Friday: 7am - 5pm</p>
                  <p className="text-gray-600 text-sm">Saturday: 8am - 3pm</p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-charcoal to-charcoal-light rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-gold mb-4 uppercase tracking-wider text-sm">Fully Licensed & Insured</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">HVAC</span>
                  <span className="text-gold font-medium">ROC 350714</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Electrical</span>
                  <span className="text-gold font-medium">ROC 350715</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Plumbing</span>
                  <span className="text-gold font-medium">ROC 350716</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">General</span>
                  <span className="text-gold font-medium">ROC 305762</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://instagram.com/saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-6">
                <h3 className="text-white font-semibold text-lg">Request a Consultation</h3>
                <p className="text-gray-400 text-sm mt-1">We typically respond within one business day</p>
              </div>
              
              <div style={{ height: '850px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/m9HFqfuvfyCpP01F8Ip1"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  id="inline-m9HFqfuvfyCpP01F8Ip1"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Us"
                  data-height="850"
                  data-layout-iframe-id="inline-m9HFqfuvfyCpP01F8Ip1"
                  data-form-id="m9HFqfuvfyCpP01F8Ip1"
                  title="Contact Us"
                />
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t text-center text-sm text-gray-500">
                <p>
                  By submitting this form, you agree to our{' '}
                  <Link 
                    href="/privacy-policy" 
                    className="text-gold hover:text-gold-dark underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
