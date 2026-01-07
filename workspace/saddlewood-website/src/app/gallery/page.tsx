'use client';

import Link from 'next/link';
import { useState } from 'react';
import MountainBackdrop from '@/components/MountainBackdrop';

const categories = ['All', 'Climate', 'Electrical', 'Plumbing', 'Renovations'];

const projects = [
  { id: 1, category: 'Renovations', title: 'Complete Home Transformation', location: 'Paradise Valley', featured: true },
  { id: 2, category: 'Climate', title: 'Estate Climate Control', location: 'Paradise Valley', featured: true },
  { id: 3, category: 'Electrical', title: 'Complete Smart Home', location: 'Fountain Hills', featured: true },
  { id: 4, category: 'Plumbing', title: 'Spa Master Suite', location: 'Paradise Valley', featured: false },
  { id: 5, category: 'Renovations', title: 'Gourmet Kitchen', location: 'Arcadia', featured: false },
  { id: 6, category: 'Climate', title: 'Smart Home Integration', location: 'Scottsdale', featured: false },
  { id: 7, category: 'Electrical', title: 'Architectural Lighting', location: 'Paradise Valley', featured: false },
  { id: 8, category: 'Plumbing', title: "Chef's Kitchen", location: 'Scottsdale', featured: false },
  { id: 9, category: 'Renovations', title: 'Wine Cellar & Bar', location: 'Scottsdale', featured: false },
];

const testimonials = [
  { quote: "Saddlewood transformed our home into a modern sanctuary while respecting its architectural heritage.", author: "Michael & Sarah T.", location: "Paradise Valley" },
  { quote: "From consultation to walkthrough, the experience was exceptional. They understand luxury.", author: "Dr. Jennifer L.", location: "Scottsdale" },
  { quote: "Our outdoor living space is now the envy of the neighborhood.", author: "Robert & Maria K.", location: "Fountain Hills" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="bg-gradient-sunrise py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <MountainBackdrop opacity={0.15} variant="hero" className="z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block text-accent uppercase tracking-[0.25em] text-sm font-medium bg-accent/10 px-5 py-2.5 rounded-full border border-accent/20 mb-6">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-primary mb-6">
              Our Work in Action
            </h1>
            <p className="text-lg text-charcoal-light max-w-3xl mx-auto mb-8">
              Follow our journey as we transform Phoenix's finest homes
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://www.instagram.com/saddlewood_contracting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-accent text-white rounded-xl hover:bg-accent-dark transition-colors shadow-warm"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/SaddlewoodAZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-charcoal transition-colors shadow-soft"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://tiktok.com/@saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-charcoal transition-colors shadow-soft"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Behind the Scenes</span>
            <h2 className="font-serif text-3xl font-semibold mt-2 text-primary">Latest From Our Feed</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <a 
                key={i}
                href="https://www.instagram.com/saddlewood_contracting/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-desert rounded-2xl overflow-hidden group relative border border-sandstone-light"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <p className="text-charcoal-light text-xs">View on Instagram</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.instagram.com/saddlewood_contracting/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors"
            >
              <span>See All Posts</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-desert py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Our Portfolio</span>
            <h2 className="font-serif text-3xl font-semibold mt-2 text-primary">Featured Projects</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-warm'
                    : 'bg-white text-primary border border-sandstone hover:border-accent/50 shadow-soft'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-2xl shadow-soft overflow-hidden border border-sandstone-light hover:shadow-soft-lg hover:border-accent/20 transition-all duration-500 group ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                <div className="h-52 bg-gradient-to-br from-sandstone to-sandstone-dark flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-primary z-10">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-charcoal-light">Project Photo</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full shadow-warm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <span className="text-accent text-sm font-medium">{project.location}</span>
                  <h3 className="font-serif text-xl font-semibold text-primary mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Client Stories</span>
            <h2 className="font-serif text-3xl font-semibold mt-3 text-white">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-charcoal rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sandstone-light italic mb-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="not-italic">
                  <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                  <p className="text-accent text-xs">{testimonial.location}</p>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Ready to Start?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-primary">
            Your Project Could Be Next
          </h2>
          <p className="text-charcoal-light text-lg mb-10 max-w-2xl mx-auto">
            Join our portfolio of exceptional projects. Schedule a consultation to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-accent text-white px-8 py-4 rounded-xl font-medium shadow-warm hover:shadow-warm-lg hover:bg-clay transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:4809996100" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
            >
              (480) 999-6100
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
