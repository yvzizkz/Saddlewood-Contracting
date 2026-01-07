import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Consultation - Saddlewood Contracting | Phoenix AZ',
  description: 'Schedule a private consultation for premium HVAC, electrical, plumbing, and remodeling services. Serving Paradise Valley, Scottsdale, Phoenix, and select communities.',
  keywords: 'consultation, contact, estimate, HVAC, electrical, plumbing, remodeling, Phoenix, Paradise Valley, Scottsdale',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="bg-gradient-desert py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-sandstone flex items-center justify-center bg-white shadow-soft">
                <Image
                  src="/images/logo.png"
                  alt="Saddlewood Contracting"
                  width={120}
                  height={120}
                  className="opacity-60"
                  style={{ width: '100px', height: 'auto' }}
                />
              </div>
            </div>
            
            <span className="inline-block text-accent uppercase tracking-[0.25em] text-sm font-medium bg-accent/10 px-5 py-2.5 rounded-full border border-accent/20 mb-6">
              Begin Your Project
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-primary">
              Schedule a <span className="text-accent">Consultation</span>
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Let's discuss your vision and explore how we can transform your home
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-charcoal text-sm">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-charcoal text-sm">Response Within 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-charcoal text-sm">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Why Choose Saddlewood</span>
              <h2 className="font-serif text-3xl font-semibold mt-2 text-primary">
                The Concierge Experience
              </h2>
            </div>
            
            <p className="text-charcoal-light mb-8 leading-relaxed">
              We believe every exceptional project begins with a thoughtful conversation. Our consultations are designed 
              to understand your unique vision, lifestyle needs, and objectives—ensuring we deliver solutions that 
              exceed expectations.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-desert flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Service Areas</h3>
                  <p className="text-charcoal-light text-sm">Paradise Valley, Scottsdale, Phoenix, Arcadia, Fountain Hills, and select Valley communities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-desert flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Concierge Line</h3>
                  <a href="tel:4809996100" className="text-accent text-lg font-semibold hover:text-accent-dark transition-colors">
                    (480) 999-6100
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-desert flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a href="mailto:info@saddlewoodcontracting.com" className="text-charcoal-light hover:text-accent transition-colors">
                    info@saddlewoodcontracting.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-desert flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                  <p className="text-charcoal-light text-sm">Monday - Friday: 7am - 5pm</p>
                  <p className="text-charcoal-light text-sm">Saturday: 8am - 3pm</p>
                  <p className="text-charcoal-light text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl p-6 text-white shadow-soft">
              <h3 className="font-semibold text-accent mb-4 uppercase tracking-wider text-sm">Fully Licensed & Insured</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-sandstone-dark">HVAC</span>
                  <span className="text-accent font-medium">ROC 350714</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone-dark">Electrical</span>
                  <span className="text-accent font-medium">ROC 350715</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone-dark">Plumbing</span>
                  <span className="text-accent font-medium">ROC 350716</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone-dark">General</span>
                  <span className="text-accent font-medium">ROC 305762</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-3">
              <a 
                href="https://www.instagram.com/saddlewood_contracting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-desert flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-charcoal-light group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-desert flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-charcoal-light group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/SaddlewoodAZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-desert flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-charcoal-light group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-soft-lg border border-sandstone-light overflow-hidden">
              <div className="bg-primary p-6">
                <h3 className="text-white font-semibold text-lg">Request a Consultation</h3>
                <p className="text-sandstone-dark text-sm mt-1">We typically respond within one business day</p>
              </div>
              
              <div style={{ height: '1563px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/qjPFOpSfY46uUC4smKZe"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-qjPFOpSfY46uUC4smKZe"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 4"
                  data-height="1563"
                  data-layout-iframe-id="inline-qjPFOpSfY46uUC4smKZe"
                  data-form-id="qjPFOpSfY46uUC4smKZe"
                  title="Form 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
