import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You\'re One Step Closer - Saddlewood Contracting',
  description: 'Your consultation request has been received. Get ready to transform your home with Phoenix\'s premier contracting team.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold-glow animate-pulse">
              <svg className="w-12 h-12 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-gold/30 animate-ping" style={{ animationDuration: '2s' }}></div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50"></div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">It's Happening</span>
            <div className="h-px w-12 bg-gold/50"></div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            You're <span className="text-gold">One Step Closer</span><br />
            to Your Dream Home
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We've received your request and our team is already reviewing your project details. 
            <span className="text-white font-medium"> This is going to be exciting.</span>
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-12 transform -mt-8 relative z-20">
          <div className="bg-gradient-to-r from-gold via-gold-dark to-gold p-1">
            <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 text-center">
              <h2 className="text-white font-serif text-2xl md:text-3xl mb-2">Here's What Happens Next</h2>
              <p className="text-gray-400">Your transformation journey has officially begun</p>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg group-hover:shadow-gold-glow transition-shadow duration-300">
                      <span className="text-charcoal font-serif text-2xl font-bold">1</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">We're On It</h3>
                  <p className="text-gray-600 leading-relaxed">Right now, our team is reviewing your project details and preparing to give you our full attention.</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-charcoal to-charcoal-light border-4 border-gold flex items-center justify-center shadow-lg group-hover:shadow-gold-glow transition-shadow duration-300">
                      <span className="text-gold font-serif text-2xl font-bold">2</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">Personal Call</h3>
                  <p className="text-gray-600 leading-relaxed">Within 24 hours, you'll hear from us directly. We want to understand your vision and answer any questions.</p>
                  <div className="mt-4 inline-flex items-center text-gold text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Usually same day
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center shadow-lg group-hover:border-gold transition-colors duration-300">
                      <span className="text-gray-400 group-hover:text-gold font-serif text-2xl font-bold transition-colors duration-300">3</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">In-Home Visit</h3>
                  <p className="text-gray-600 leading-relaxed">We'll schedule a convenient time to see your space, discuss possibilities, and start planning your transformation.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-2xl p-6 text-center">
                <p className="text-charcoal font-medium mb-2">Can't wait to talk?</p>
                <a 
                  href="tel:4809996100" 
                  className="inline-flex items-center text-3xl md:text-4xl font-serif text-gold hover:text-gold-dark transition-colors group"
                >
                  <svg className="w-8 h-8 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  (480) 999-6100
                </a>
                <p className="text-gray-500 text-sm mt-2">We love hearing from excited homeowners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-charcoal to-charcoal-light rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Image
              src="/images/logo.png"
              alt=""
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                While You Wait...
              </h3>
              <p className="text-gray-400 max-w-lg">
                Get inspired by our latest projects. See how we've helped homeowners just like you transform their spaces.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-charcoal font-semibold rounded-xl hover:shadow-gold-glow transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                View Our Work
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-gold/50 text-gold font-medium rounded-xl hover:bg-gold/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal">You're in Good Hands</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Fully licensed and insured in Arizona</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Family-owned with roots in the Valley</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Hundreds of happy homeowners</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Clear communication every step of the way</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal">Follow the Journey</h3>
            </div>
            <p className="text-gray-600 mb-6">See our latest projects, behind-the-scenes work, and get inspired for your own transformation.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/saddlewood_contracting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/SaddlewoodAZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-500 hover:text-gold transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
