import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Saddlewood Contracting',
  description: 'Thank you for contacting Saddlewood Contracting. We have received your consultation request and will respond within one business day.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Request Received</span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold mt-4 mb-4">
            Thank You for Reaching Out
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're honored by your interest in Saddlewood Contracting
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-6 text-center">
            <h2 className="text-white font-serif text-2xl">What Happens Next</h2>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-serif text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Review</h3>
                <p className="text-gray-600 text-sm">Our team reviews your project details and requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-serif text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Response</h3>
                <p className="text-gray-600 text-sm">We'll contact you within one business day to discuss your vision</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-serif text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Schedule an in-home visit to explore possibilities together</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-2">Need to speak with someone sooner?</p>
              <a 
                href="tel:480-999-6100" 
                className="text-2xl font-serif text-gold hover:text-gold-dark transition-colors"
              >
                (480) 999-6100
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 mb-10">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-semibold text-charcoal">What Our Clients Say</h3>
          </div>
          <blockquote className="relative">
            <div className="absolute -top-2 -left-2 text-gold/20 text-6xl font-serif">"</div>
            <p className="text-gray-700 italic text-lg leading-relaxed pl-8 pr-4">
              Saddlewood transformed our home beyond our expectations. From the initial consultation to final walkthrough, 
              the entire experience was exceptional. Their attention to detail and commitment to quality is unmatched.
            </p>
            <footer className="mt-4 pl-8">
              <cite className="not-italic">
                <span className="font-semibold text-charcoal">Sarah & Michael T.</span>
                <span className="text-gold mx-2">|</span>
                <span className="text-gray-500">Paradise Valley</span>
              </cite>
            </footer>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="font-semibold text-charcoal mb-4 flex items-center">
              <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-gray-500 w-20">Phone:</span>
                <a href="tel:480-999-6100" className="text-gold hover:text-gold-dark font-medium">
                  (480) 999-6100
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-20">Email:</span>
                <a href="mailto:info@saddlewoodcontracting.com" className="text-gold hover:text-gold-dark">
                  info@saddlewoodcontracting.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 w-20">Service:</span>
                <span className="text-gray-700">Phoenix Metro Area</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="font-semibold text-charcoal mb-4 flex items-center">
              <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Business Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Monday - Friday</span>
                <span className="text-charcoal font-medium">7:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Saturday</span>
                <span className="text-charcoal font-medium">8:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Sunday</span>
                <span className="text-gray-400">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">In the meantime, explore our work:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-charcoal font-semibold rounded-lg hover:shadow-gold-glow transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              View Our Portfolio
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gold/50 text-gold font-medium rounded-lg hover:bg-gold/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center space-x-4">
          <a 
            href="https://www.instagram.com/saddlewood_contracting/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://tiktok.com/@saddlewoodcontracting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/SaddlewoodAZ/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center hover:bg-gold/20 transition-colors group"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
