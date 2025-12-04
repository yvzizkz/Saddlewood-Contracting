import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Remodeling Services | Kitchen, Bath & Home Renovation | Saddlewood Contracting',
  description: 'Premium home remodeling in Phoenix - luxury kitchen and bath renovations, whole-home transformations, and custom design. Licensed & insured (ROC #305762).',
};

export default function RemodelingPage() {
  const remodelingSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Home Remodeling",
    "serviceType": "Kitchen, Bathroom, and Whole Home Renovation",
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
        id="remodeling-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(remodelingSchemaData) }}
      />
      
      <div className="min-h-screen">
        <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-gold/15 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Saddlewood Contracting"
                      width={200}
                      height={200}
                      className="opacity-30"
                      style={{ width: '180px', height: 'auto' }}
                    />
                  </div>
                  <div className="absolute -inset-3 rounded-full border border-gold/10"></div>
                </div>
              </div>
              
              <div className="text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="h-px w-8 bg-gold/50"></div>
                  <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Signature Remodeling</span>
                  <div className="h-px w-8 bg-gold/50"></div>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                  Transform Your <span className="text-gold">Living Space</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mb-8">
                  Reimagine your home with craftsmanship that honors your vision. From kitchens to whole-home renovations, every detail matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-charcoal font-semibold rounded-lg hover:shadow-gold-glow transition-all duration-300"
                  >
                    Schedule Consultation
                  </Link>
                  <a 
                    href="tel:4809996100" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-gold/50 text-gold font-medium rounded-lg hover:bg-gold/10 transition-all duration-300"
                  >
                    (480) 999-6100
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-center">
                <div>
                  <p className="text-3xl font-serif text-gold">18+</p>
                  <p className="text-sm text-gray-400 mt-1">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-gold/20 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-gold">ROC</p>
                  <p className="text-sm text-gray-400 mt-1">#305762</p>
                </div>
                <div className="h-12 w-px bg-gold/20 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-serif text-white">Family</p>
                  <p className="text-sm text-gray-400 mt-1">Owned & Operated</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Our Expertise</span>
              <h2 className="font-serif text-3xl font-semibold mt-2 text-charcoal">What We Offer</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Kitchen Transformations", desc: "Custom cabinetry, premium finishes, and layouts designed for how you live and entertain." },
                { title: "Bathroom Sanctuaries", desc: "Spa-inspired retreats featuring designer fixtures, natural materials, and meticulous craftsmanship." },
                { title: "Whole-Home Renovation", desc: "Comprehensive transformations that reimagine your entire living space with cohesive design." }
              ].map((service, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 bg-charcoal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Client Experience</span>
            </div>
            
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
                "They transformed our 1960s home into a modern masterpiece while preserving its 
                architectural character. The result exceeded every expectation."
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="text-gold font-medium">Michael & Sarah T.</span>
                  <span className="text-gray-400 mx-3">|</span>
                  <span className="text-gray-400">Arcadia</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-charcoal text-white px-4 py-2 rounded text-center">
                  <span className="block text-xs text-gray-400">ROC</span>
                  <span className="font-bold text-gold">305762</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">KB-2 Licensed</p>
                  <p className="text-sm text-gray-500">Residential & Small Commercial</p>
                </div>
              </div>
              <Link 
                href="/license-info" 
                className="text-gold hover:text-gold-dark font-medium text-sm"
              >
                View All Licenses →
              </Link>
            </div>
            
            <div className="text-center p-8 border border-gold/20 rounded-2xl bg-gradient-to-br from-charcoal/5 to-transparent">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">See Our Work</span>
              <h3 className="font-serif text-2xl font-semibold mt-2 mb-4 text-charcoal">Explore Our Project Gallery</h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">View our completed remodeling projects and get inspired for your own home transformation.</p>
              <Link 
                href="/gallery" 
                className="group relative inline-flex items-center justify-center px-8 py-4 
                          bg-charcoal text-white font-medium 
                          rounded-lg overflow-hidden
                          hover:bg-charcoal-light
                          transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></span>
                <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="relative z-10">View Our Portfolio</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-br from-charcoal to-charcoal-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
            <h2 className="font-serif text-3xl font-semibold mt-3 mb-6 text-white">
              Let's Craft Your Vision
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-lg font-semibold hover:shadow-gold-glow transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:4809996100" 
                className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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
