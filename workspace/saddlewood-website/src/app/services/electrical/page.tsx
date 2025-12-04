import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Electrical Services | Smart Home & Lighting | Saddlewood Contracting',
  description: 'Premium electrical services in Phoenix - smart home integration, architectural lighting, EV charging, and complete system upgrades. Licensed & insured (ROC #350715).',
};

export default function ElectricalPage() {
  const electricalSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Electrical Services",
    "serviceType": "Electrical Installation, Repair, and Smart Home Integration",
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
        id="electrical-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(electricalSchemaData) }}
      />
      
      <div className="min-h-screen">
        <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Saddlewood Contracting"
                width={100}
                height={100}
                className="opacity-90"
                style={{ width: '100px', height: 'auto' }}
              />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Electrical Excellence</span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mt-4 mb-6">
              Power Meets Elegance
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Sophisticated electrical solutions that blend seamlessly with your lifestyle. 
              Smart, safe, and beautifully integrated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                { title: "Smart Home Integration", desc: "Lutron, Control4, and custom automation systems that give you complete control of your home environment." },
                { title: "Architectural Lighting", desc: "Curated lighting designs that showcase your home's architecture, art, and landscaping with precision." },
                { title: "EV & Power Upgrades", desc: "Future-ready electrical infrastructure including EV charging, solar prep, and panel upgrades." }
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
                "The lighting design transformed our home. Every piece of art is perfectly illuminated, 
                and the outdoor spaces are magical at night."
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="text-gold font-medium">Dr. & Mrs. Patterson</span>
                  <span className="text-gray-400 mx-3">|</span>
                  <span className="text-gray-400">Scottsdale</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-charcoal text-white px-4 py-2 rounded text-center">
                  <span className="block text-xs text-gray-400">ROC</span>
                  <span className="font-bold text-gold">350715</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">CR-11 Licensed</p>
                  <p className="text-sm text-gray-500">Electrical Contractor</p>
                </div>
              </div>
              <Link 
                href="/license-info" 
                className="text-gold hover:text-gold-dark font-medium text-sm"
              >
                View All Licenses →
              </Link>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-br from-charcoal to-charcoal-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
            <h2 className="font-serif text-3xl font-semibold mt-3 mb-6 text-white">
              Let's Illuminate Your Vision
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
