import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: 'Signature Remodeling',
      description: 'Transform your space with renovation services tailored to your vision. Kitchens, bathrooms, and whole-home transformations.',
      link: '/services/remodeling',
      icon: 'home',
      featured: true,
    },
    {
      title: 'Precision Climate',
      description: 'Climate solutions engineered for comfort and efficiency. High-end system installations and expert maintenance.',
      link: '/services/hvac',
      icon: 'ac_unit',
    },
    {
      title: 'Expert Electrical',
      description: 'Electrical work for discerning homeowners. Smart home integration, architectural lighting, and complete system upgrades.',
      link: '/services/electrical',
      icon: 'bolt',
    },
    {
      title: 'Premium Plumbing',
      description: 'Thoughtful plumbing installations and expert repairs. Fixture upgrades, water treatment, and whole-home solutions.',
      link: '/services/plumbing',
      icon: 'water_drop',
    },
  ];

  return (
    <div className="pb-20 md:pb-0">
      <Hero />
      
      <section className="py-24 sm:py-28 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-sandstone to-transparent"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">What We Offer</span>
              <div className="w-8 h-px bg-gold"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">Our Signature Services</h2>
            <p className="text-primary/60 mt-5 max-w-2xl mx-auto leading-relaxed">
              Each project receives our full attention and commitment to excellence. We specialize in premium home services for clients who expect the best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
                featured={service.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-sandstone-light via-sandstone to-sandstone-light overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-linen-texture"></div>
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/20 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/20 rounded-br-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-gold uppercase tracking-[0.15em] text-xs font-semibold">Follow Our Work</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary">See Our Latest Projects</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/saddlewood_contracting/" target="_blank" rel="noopener noreferrer" 
                 className="group inline-flex items-center px-5 py-3 bg-white text-primary rounded-xl border border-transparent shadow-soft hover:shadow-lift hover:border-gold/30 transition-all">
                <svg className="w-5 h-5 mr-2 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
              <a href="https://www.facebook.com/SaddlewoodAZ/" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center px-5 py-3 bg-white text-primary rounded-xl border border-transparent shadow-soft hover:shadow-lift hover:border-gold/30 transition-all">
                <svg className="w-5 h-5 mr-2 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium">Facebook</span>
              </a>
              <a href="https://tiktok.com/@saddlewoodcontracting" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center px-5 py-3 bg-white text-primary rounded-xl border border-transparent shadow-soft hover:shadow-lift hover:border-gold/30 transition-all">
                <svg className="w-5 h-5 mr-2 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                <span className="font-medium">TikTok</span>
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-taupe/20 pt-8">
            <Link href="/gallery" className="group inline-flex items-center text-primary font-medium hover:text-gold transition-colors">
              <span>View Our Complete Portfolio</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 sm:py-28 bg-ivory relative overflow-hidden">
        <div className="absolute top-12 right-12 w-40 h-40 border border-gold/10 rounded-full"></div>
        <div className="absolute bottom-12 left-12 w-24 h-24 border border-gold/10 rounded-full"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-taupe/30"></div>
              <span className="text-taupe uppercase tracking-[0.2em] text-xs font-semibold">Featured Work</span>
              <div className="w-8 h-px bg-taupe/30"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">Kitchen Transformation</h2>
            <p className="text-gold mt-2 font-medium">Paradise Valley | Complete Kitchen Remodel</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-2 bg-sandstone rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sandstone to-sandstone-dark rounded-2xl overflow-hidden shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-taupe">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-soft">
                      <svg className="w-8 h-8 text-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Before Image</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-soft border border-sandstone">
                Before
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary to-charcoal rounded-2xl overflow-hidden shadow-soft-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/20 backdrop-blur flex items-center justify-center">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-sandstone-light">After Image</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-gold to-gold-dark text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-gold">
                After
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-soft border border-sandstone/50 max-w-2xl">
              <svg className="w-8 h-8 text-gold/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote>
                <p className="text-lg text-primary/80 italic leading-relaxed">
                  "Saddlewood transformed our outdated kitchen into a stunning space that exceeded our expectations. The attention to detail was remarkable."
                </p>
              </blockquote>
              <cite className="block mt-5 not-italic">
                <span className="text-primary font-semibold">The Morrison Family</span>
                <span className="text-taupe mx-3">|</span>
                <span className="text-gold font-medium">Paradise Valley</span>
              </cite>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 sm:py-28 bg-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sandstone to-transparent"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">The Saddlewood Difference</span>
              <div className="w-8 h-px bg-gold"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">Why Clients Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-gradient-to-b from-white to-ivory rounded-2xl shadow-soft border border-sandstone/30 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center shadow-soft group-hover:shadow-glow-gold transition-shadow">
                <span className="text-gold text-3xl font-serif font-bold">18+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Years of Mastery</h3>
              <p className="text-primary/60 leading-relaxed text-sm">Nearly two decades of refining our craft, serving Arizona's most discerning homeowners since 2007.</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-b from-white to-ivory rounded-2xl shadow-soft border border-sandstone/30 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sage/20 to-sage/5 flex items-center justify-center shadow-soft group-hover:shadow-glow-gold transition-shadow">
                <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Fully Credentialed</h3>
              <p className="text-primary/60 leading-relaxed text-sm">Four Arizona ROC licenses ensure expertise across all disciplines. Bonded, insured, and committed to excellence.</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-b from-white to-ivory rounded-2xl shadow-soft border border-sandstone/30 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center shadow-soft group-hover:shadow-glow-gold transition-shadow">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">White-Glove Service</h3>
              <p className="text-primary/60 leading-relaxed text-sm">Dedicated project managers, 24-hour response guarantee, and meticulous attention to every detail.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-24 bg-gradient-to-b from-sandstone-light to-sandstone relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-linen-texture"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">Where We Serve</span>
              <div className="w-8 h-px bg-gold"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">Select Service Areas</h2>
            <p className="text-primary/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              We proudly serve the most prestigious communities in the Phoenix Valley.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {['Paradise Valley', 'Scottsdale', 'Phoenix', 'Fountain Hills', 'Arcadia', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale'].map((area) => (
              <a 
                key={area}
                href={`/contact?area=${encodeURIComponent(area)}`} 
                className="group bg-white p-4 shadow-soft rounded-xl text-center hover:shadow-lift hover:-translate-y-0.5 border border-transparent hover:border-gold/20 transition-all duration-300"
              >
                <h3 className="font-medium text-primary group-hover:text-gold transition-colors">{area}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 sm:py-28 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-sandstone to-transparent"></div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-20 h-20 border border-gold/10 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 border border-gold/10 rounded-full hidden lg:block"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-taupe/30"></div>
            <span className="text-taupe uppercase tracking-[0.2em] text-xs font-semibold">Ready to Begin?</span>
            <div className="w-8 h-px bg-taupe/30"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">Let's Discuss Your Vision</h2>
          <p className="text-primary/60 mt-5 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every project starts with a conversation. Schedule a private consultation to explore how we can elevate your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 
                        bg-primary text-white font-semibold 
                        rounded-xl shadow-soft-lg hover:shadow-lift hover:bg-charcoal
                        transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Schedule Your Consultation
            </Link>
            <a 
              href="tel:4809996100" 
              className="inline-flex items-center justify-center px-8 py-4 
                        bg-white border border-taupe/30 text-primary font-medium 
                        rounded-xl shadow-soft hover:shadow-lift hover:border-gold/50 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              (480) 999-6100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
