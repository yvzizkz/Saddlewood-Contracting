import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Custom Remodeling',
      description: 'Transform your space with our custom renovation services. Kitchens, bathrooms, and whole-home transformations.',
      link: '/services/remodeling',
      icon: 'home',
    },
    {
      title: 'Custom HVAC',
      description: 'Custom climate solutions designed for comfort and efficiency. From high-end system installations to precision maintenance.',
      link: '/services/hvac',
      icon: 'ac_unit',
    },
    {
      title: 'Custom Electrical',
      description: 'Custom electrical work for discerning homeowners. Smart home integration, lighting design, and complete system upgrades.',
      link: '/services/electrical',
      icon: 'bolt',
    },
    {
      title: 'Custom Plumbing',
      description: 'Custom plumbing installations and expert repairs. Fixture upgrades, water treatment systems, and whole-home solutions.',
      link: '/services/plumbing',
      icon: 'water_drop',
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 container-custom">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">What We Offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-3">Our Signature Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Each custom project receives our full attention and commitment to excellence. We specialize in premium home services for clients who expect the best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
      
      <section className="py-12 sm:py-16 bg-charcoal text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Follow Our Work</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-2">See Our Custom Projects</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/saddlewood_contracting/" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center px-5 py-2.5 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/SaddlewoodAZ/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a href="https://tiktok.com/@saddlewoodcontracting" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-white/10 pt-6">
            <Link href="/gallery" className="inline-flex items-center text-gold font-medium hover:text-gold-light transition-colors">
              <span>View Our Complete Portfolio</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Featured Work</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-3">Custom Kitchen Transformation</h2>
            <p className="text-gray-600 mt-4">Paradise Valley | Complete Kitchen Remodel</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Before</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-medium">
                Before
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-light to-charcoal rounded-2xl overflow-hidden relative shadow-premium">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-300">After</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gold text-charcoal px-4 py-2 rounded-lg text-sm font-medium">
                After
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <blockquote className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 italic mb-4">
                "Saddlewood transformed our outdated kitchen into a stunning custom space that exceeded our expectations. The attention to detail was remarkable."
              </p>
              <cite className="not-italic">
                <span className="text-charcoal font-semibold">The Morrison Family</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gold">Paradise Valley</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">The Saddlewood Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-3">Why Clients Choose Our Custom Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-charcoal flex items-center justify-center">
                <span className="text-gold text-2xl font-serif font-bold">18+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Years of Mastery</h3>
              <p className="text-gray-600">Nearly two decades of refining our craft, serving Arizona's most discerning homeowners since 2007.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-charcoal flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Credentialed</h3>
              <p className="text-gray-600">Four Arizona ROC licenses ensure expertise across all disciplines. Bonded, insured, and committed to excellence.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-charcoal flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">White-Glove Service</h3>
              <p className="text-gray-600">Dedicated project managers, 24-hour response guarantee, and meticulous attention to every detail.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Where We Serve</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-3">Select Service Areas</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We proudly serve the most prestigious communities in the Phoenix Valley. Contact us to discuss your custom project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {['Paradise Valley', 'Scottsdale', 'Phoenix', 'Fountain Hills', 'Arcadia', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale'].map((area) => (
              <a 
                key={area}
                href={`/contact?area=${encodeURIComponent(area)}`} 
                className="bg-white p-4 shadow-sm rounded-lg text-center hover:shadow-lg hover:border-gold/30 border border-transparent transition-all duration-300"
              >
                <h3 className="font-medium text-charcoal">{area}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container-custom text-center">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-3 text-white">Let's Discuss Your Vision</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto mb-8">
            Every custom project starts with a conversation. Schedule a private consultation to explore how we can elevate your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 
                        bg-gradient-to-r from-gold to-gold-dark text-primary font-semibold 
                        rounded-lg shadow-gold-glow hover:shadow-xl
                        transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Schedule Your Consultation
            </Link>
            <a 
              href="tel:4809996100" 
              className="inline-flex items-center justify-center px-8 py-4 
                        border border-gold/50 text-gold font-medium 
                        rounded-lg hover:bg-gold/10 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
