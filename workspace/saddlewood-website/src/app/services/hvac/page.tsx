import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'HVAC Services | Climate Systems | Saddlewood Contracting',
  description: 'Premium HVAC services in Phoenix - precision climate control, smart home integration, and whole-house comfort solutions for discerning homeowners. Licensed & insured (ROC #350714).',
};

export default function HVACPage() {
  const hvacSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium HVAC Services",
    "serviceType": "Heating, Ventilation, and Air Conditioning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Saddlewood Contracting"
    },
    "areaServed": {
      "@type": "City",
      "name": "Phoenix"
    }
  };

  return (
    <>
      <Script
        id="hvac-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacSchemaData) }}
      />
      
      <div className="min-h-screen pb-20 md:pb-0">
        <div className="bg-gradient-subtle py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-linen-texture pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-sandstone flex items-center justify-center bg-white shadow-soft">
                    <Image
                      src="/images/logo.png"
                      alt="Saddlewood Contracting"
                      width={160}
                      height={160}
                      className="opacity-60"
                      style={{ width: '140px', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left flex-1">
                <span className="inline-block text-taupe uppercase tracking-[0.25em] text-sm font-medium mb-8">
                  Climate Systems
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-primary">
                  Precision <span className="text-gold">Climate Control</span>
                </h1>
                <p className="text-lg text-primary/70 max-w-2xl mb-10">
                  Tailored comfort solutions for Arizona's most discerning homeowners. Where technology meets tranquility.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-gold text-white font-medium rounded-xl shadow-gold hover:shadow-gold-lg hover:bg-gold-dark transition-all duration-300"
                  >
                    Schedule Consultation
                  </Link>
                  <a 
                    href="tel:4809996100" 
                    className="inline-flex items-center justify-center px-10 py-5 border border-taupe/30 text-primary font-medium rounded-xl hover:border-gold/50 bg-white shadow-soft transition-all duration-300"
                  >
                    (480) 999-6100
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-10 border-t border-taupe/20">
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 text-center">
                <div>
                  <p className="text-3xl font-serif text-gold">18+</p>
                  <p className="text-sm text-taupe mt-1">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-taupe/20 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-gold">ROC</p>
                  <p className="text-sm text-taupe mt-1">#350714</p>
                </div>
                <div className="h-12 w-px bg-taupe/20 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-primary">Family</p>
                  <p className="text-sm text-taupe mt-1">Owned & Operated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent"></div>

        <div className="py-20 sm:py-26 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-taupe uppercase tracking-[0.2em] text-sm font-medium">Our Expertise</span>
              <h2 className="font-serif text-3xl font-semibold mt-4 text-primary">What We Offer</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "System Installation", desc: "Premium HVAC systems designed for Arizona's demanding climate. Tailored solutions for optimal efficiency and comfort." },
                { title: "Smart Integration", desc: "Connect your climate system to your smart home ecosystem. Control comfort from anywhere with precision." },
                { title: "Preventive Maintenance", desc: "Proactive care that extends system life and maintains peak performance. Never be caught off guard." }
              ].map((service, i) => (
                <div key={i} className="text-center p-10 bg-white rounded-2xl hover:shadow-lift hover:-translate-y-1 transition-all duration-300 border border-sandstone/50">
                  <h3 className="font-semibold text-lg text-primary mb-4">{service.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent"></div>

        <div className="py-20 sm:py-26 bg-sandstone-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Client Experience</span>
            </div>
            
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-serif text-primary leading-relaxed mb-8">
                "The attention to detail in our whole-house climate system installation was remarkable. 
                Every zone is perfectly calibrated."
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="text-gold font-medium">Dr. Jennifer L.</span>
                  <span className="text-taupe mx-3">|</span>
                  <span className="text-taupe">Scottsdale</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent"></div>

        <div className="py-16 sm:py-20 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white rounded-2xl shadow-soft mb-10 border border-sandstone">
              <div className="flex items-center gap-5">
                <div className="bg-sage/20 text-sage-dark px-5 py-4 rounded-xl text-center">
                  <span className="block text-xs text-sage">ROC</span>
                  <span className="font-bold text-sage-dark">350714</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">CR-39 Licensed</p>
                  <p className="text-sm text-taupe">HVAC & Refrigeration</p>
                </div>
              </div>
              <Link 
                href="/license-info" 
                className="text-gold hover:text-gold-dark font-medium text-sm"
              >
                View All Licenses →
              </Link>
            </div>
            
            <div className="text-center p-10 border border-sandstone rounded-2xl bg-white shadow-soft">
              <span className="text-taupe uppercase tracking-[0.2em] text-sm font-medium">See Our Work</span>
              <h3 className="font-serif text-2xl font-semibold mt-3 mb-5 text-primary">Explore Our Project Gallery</h3>
              <p className="text-primary/60 mb-8 max-w-lg mx-auto">View our completed HVAC installations and see how we deliver comfort to Arizona homes.</p>
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-10 py-5 
                          bg-primary text-white font-medium 
                          rounded-xl shadow-soft hover:shadow-lift hover:bg-charcoal
                          transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent"></div>

        <div className="py-20 sm:py-26 bg-sandstone-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-taupe uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
            <h2 className="font-serif text-3xl font-semibold mt-4 mb-8 text-primary">
              Experience Perfect Comfort
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="/contact" 
                className="bg-gold text-white px-10 py-5 rounded-xl font-medium shadow-gold hover:shadow-gold-lg hover:bg-gold-dark transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:4809996100" 
                className="border border-taupe/30 text-primary hover:border-gold/50 px-10 py-5 rounded-xl font-medium transition-all duration-300"
              >
                (480) 999-6100
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
