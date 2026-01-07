import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';
import MountainBackdrop from '@/components/MountainBackdrop';

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
        <div className="bg-gradient-sunrise py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none"></div>
          <MountainBackdrop opacity={0.15} variant="hero" className="z-0" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-sandstone flex items-center justify-center bg-white shadow-soft">
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
                <span className="inline-block text-accent uppercase tracking-[0.25em] text-sm font-medium bg-accent/10 px-5 py-2.5 rounded-full border border-accent/20 mb-6">
                  Climate Systems
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-primary">
                  Precision <span className="text-accent">Climate Control</span>
                </h1>
                <p className="text-lg text-charcoal-light max-w-2xl mb-8">
                  Tailored comfort solutions for Arizona's most discerning homeowners. Where technology meets tranquility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cta text-white font-medium rounded-xl shadow-warm hover:shadow-warm-lg hover:bg-terracotta-dark transition-all duration-300"
                  >
                    Schedule Consultation
                  </Link>
                  <a 
                    href="tel:4809996100" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sandstone text-primary font-medium rounded-xl hover:border-accent hover:text-accent bg-white shadow-soft transition-all duration-300"
                  >
                    (480) 999-6100
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-14 pt-8 border-t border-sandstone">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-center">
                <div>
                  <p className="text-3xl font-serif text-accent">18+</p>
                  <p className="text-sm text-charcoal-light mt-1">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-sandstone hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-accent">ROC</p>
                  <p className="text-sm text-charcoal-light mt-1">#350714</p>
                </div>
                <div className="h-12 w-px bg-sandstone hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-primary">Family</p>
                  <p className="text-sm text-charcoal-light mt-1">Owned & Operated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Our Expertise</span>
              <h2 className="font-serif text-3xl font-semibold mt-2 text-primary">What We Offer</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "System Design & Installation", desc: "Climate solutions engineered for your home's unique architecture and your family's comfort preferences." },
                { title: "Smart Integration", desc: "Seamless integration with home automation systems for zone control, scheduling, and remote monitoring." },
                { title: "Precision Maintenance", desc: "Proactive care programs that maximize system longevity, efficiency, and performance." }
              ].map((service, i) => (
                <div key={i} className="text-center p-6 sm:p-8 bg-desert rounded-2xl hover:shadow-soft-lg transition-all duration-300 border border-sandstone-light/50">
                  <h3 className="font-semibold text-lg text-primary mb-3">{service.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Client Experience</span>
            </div>
            
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
                "The team designed a climate system that's invisible yet transformative. 
                Every room is perfectly comfortable, and the energy savings exceeded our expectations."
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="text-accent font-medium">The Henderson Family</span>
                  <span className="text-sandstone-dark mx-3">|</span>
                  <span className="text-sandstone-dark">Paradise Valley</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="py-12 sm:py-16 bg-desert">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-2xl shadow-soft mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-white px-4 py-3 rounded-xl text-center">
                  <span className="block text-xs text-sandstone-light">ROC</span>
                  <span className="font-bold text-accent">350714</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">CR-39 Licensed</p>
                  <p className="text-sm text-charcoal-light">Air Conditioning & Refrigeration</p>
                </div>
              </div>
              <Link 
                href="/license-info" 
                className="text-accent hover:text-accent-dark font-medium text-sm"
              >
                View All Licenses →
              </Link>
            </div>
            
            <div className="text-center p-8 border border-sandstone rounded-2xl bg-white shadow-soft">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">See Our Work</span>
              <h3 className="font-serif text-2xl font-semibold mt-2 mb-4 text-primary">Explore Our Project Gallery</h3>
              <p className="text-charcoal-light mb-6 max-w-lg mx-auto">View our completed HVAC installations and see the quality we bring to every project.</p>
              <Link 
                href="/gallery" 
                className="inline-flex items-center justify-center px-8 py-4 
                          bg-primary text-white font-medium 
                          rounded-xl shadow-soft hover:shadow-soft-lg hover:bg-charcoal
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

        <div className="py-16 sm:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
            <h2 className="font-serif text-3xl font-semibold mt-3 mb-6 text-white">
              Let's Design Your Perfect Climate
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-accent text-white px-8 py-4 rounded-xl font-medium shadow-warm hover:shadow-warm-lg hover:bg-clay transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:4809996100" 
                className="border border-accent/50 text-accent hover:bg-accent/10 px-8 py-4 rounded-xl font-medium transition-all duration-300"
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
