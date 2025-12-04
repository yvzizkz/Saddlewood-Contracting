import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signature Services - Saddlewood Contracting | Phoenix AZ',
  description: 'Premium HVAC, electrical, plumbing, and remodeling services for discerning homeowners throughout Phoenix and the Valley. Licensed, bonded, and insured.',
  keywords: 'premium HVAC, luxury electrical, high-end plumbing, custom remodeling, Phoenix, Paradise Valley, Scottsdale, Arizona',
};

export default function ServicesPage() {
  const services = [
    {
      category: "Climate Systems",
      subtitle: "HVAC Excellence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v8m0 4v8M2 12h8m4 0h8M4.93 4.93l5.66 5.66m2.83 2.83l5.66 5.66M19.07 4.93l-5.66 5.66m-2.83 2.83-5.66 5.66"></path>
        </svg>
      ),
      description: "Bespoke climate solutions engineered for optimal comfort and efficiency",
      services: [
        "High-Efficiency System Design & Installation",
        "Precision System Maintenance",
        "Custom Ductwork Engineering",
        "Advanced Air Purification",
        "Smart Climate Control Integration",
        "Zoned Comfort Systems",
        "Energy Optimization Consulting",
        "Premium Brand Partnerships"
      ],
      investment: "Starting at $8,500"
    },
    {
      category: "Electrical Systems",
      subtitle: "Power & Illumination",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      description: "Sophisticated electrical solutions for modern luxury living",
      services: [
        "Complete Electrical System Upgrades",
        "Smart Home Integration",
        "Architectural Lighting Design",
        "EV Charging Installation",
        "Whole-Home Generator Systems",
        "Home Theater & Audio",
        "Pool & Landscape Electrical",
        "Security System Wiring"
      ],
      investment: "Starting at $2,500"
    },
    {
      category: "Plumbing Systems",
      subtitle: "Refined Water Solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      ),
      description: "Premium plumbing installations with attention to every detail",
      services: [
        "Luxury Fixture Installation",
        "Whole-Home Water Treatment",
        "Tankless Water Systems",
        "Spa & Steam Shower Systems",
        "Kitchen Plumbing Design",
        "Outdoor Kitchen & Pool Plumbing",
        "Radiant Floor Heating",
        "Preventive Maintenance Programs"
      ],
      investment: "Starting at $1,500"
    },
    {
      category: "Custom Renovations",
      subtitle: "Transformative Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
        </svg>
      ),
      description: "Bespoke renovations that elevate your living experience",
      services: [
        "Chef's Kitchen Transformations",
        "Spa-Inspired Bathrooms",
        "Whole-Home Renovations",
        "Custom Room Additions",
        "Outdoor Living Spaces",
        "Wine Cellars & Bars",
        "Home Office Design",
        "Aging-in-Place Modifications"
      ],
      investment: "Starting at $25,000"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Our Expertise</span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mt-4 mb-6">
              Signature Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Premium home services tailored for discerning homeowners who expect excellence in every detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-lg font-semibold 
                         hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:480-999-6100" 
                className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                (480) 999-6100
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((serviceCategory, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                                       hover:shadow-premium hover:border-gold/20 transition-all duration-500 group">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-charcoal text-gold flex items-center justify-center mr-4
                                group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                    {serviceCategory.icon}
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">{serviceCategory.subtitle}</span>
                    <h2 className="font-serif text-2xl font-semibold text-charcoal">
                      {serviceCategory.category}
                    </h2>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {serviceCategory.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {serviceCategory.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <span className="text-gold mr-3 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">Investment</span>
                    <p className="text-charcoal font-semibold">{serviceCategory.investment}</p>
                  </div>
                  <Link 
                    href={`/services/${serviceCategory.category.toLowerCase().split(' ')[0]}`}
                    className="text-gold hover:text-gold-dark font-medium flex items-center group/link"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">The Saddlewood Standard</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-charcoal">
              Why Our Clients Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-5">
                <span className="text-gold text-2xl font-serif font-bold">18+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-charcoal">Years of Excellence</h3>
              <p className="text-gray-600 text-sm">Trusted by Arizona homeowners since 2007</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-charcoal">Fully Licensed</h3>
              <p className="text-gray-600 text-sm">Four AZ ROC licenses for complete coverage</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-charcoal">24hr Response</h3>
              <p className="text-gray-600 text-sm">Guaranteed response within one business day</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-charcoal">White-Glove Service</h3>
              <p className="text-gray-600 text-sm">Dedicated project management on every job</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Where We Serve</span>
            <h2 className="font-serif text-3xl font-semibold mt-3 text-charcoal">
              Select Service Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Paradise Valley', 'Scottsdale', 'Phoenix', 'Arcadia', 'Fountain Hills', 'Cave Creek', 
              'Carefree', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Ahwatukee'].map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-gold/30 border border-transparent transition-all duration-300">
                <span className="font-medium text-charcoal">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Ready to Begin?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-white">
            Let's Discuss Your Vision
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Every exceptional home improvement starts with a conversation. Schedule a private consultation to explore possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-lg font-semibold 
                       hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/gallery" 
              className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
