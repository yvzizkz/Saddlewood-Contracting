import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License Information - Saddlewood Contracting | Phoenix AZ',
  description: 'Detailed information about Saddlewood Contracting licenses, ROC certifications, and contractor classifications for our HVAC, electrical, plumbing, and remodeling services.',
};

export default function LicenseInfoPage() {
  const licenses = [
    {
      category: "Climate Systems",
      roc: "350714",
      classification: "CR-39 Air Conditioning and Refrigeration",
      description: "Installation, alteration, and repair of refrigeration and evaporative cooling systems, including warm-air heating systems and all integrated parts of heating, cooling, and ventilation systems."
    },
    {
      category: "Electrical Systems",
      roc: "350715",
      classification: "CR-11 Electrical",
      description: "Installation, alteration, and repair of any wiring, related electrical material and equipment used in generating, transmitting, or utilization of electrical energy less than 600 volts."
    },
    {
      category: "Plumbing Systems",
      roc: "350716",
      classification: "CR-37 Plumbing",
      description: "Installation, alteration, and repair of all plumbing within property lines, including required venting for waste or drainage, hot and cold water piping, and gas piping systems."
    },
    {
      category: "General Contracting",
      roc: "305762",
      classification: "KB-2 Residential & Small Commercial",
      description: "Construction, remodeling, and repair of homes, as well as construction, alteration, and repair of commercial buildings not exceeding three stories or 20,000 square feet."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Credentials</span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold mt-4 mb-4">
            Arizona ROC Licenses
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fully licensed, bonded, and insured for your protection
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <p className="text-gray-600 text-lg leading-relaxed">
            Saddlewood Contracting holds four Arizona Registrar of Contractors (ROC) licenses, 
            allowing us to legally and professionally perform a comprehensive range of home services 
            throughout the Phoenix metropolitan area.
          </p>
        </div>

        <div className="space-y-6">
          {licenses.map((license, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-premium transition-all duration-300"
            >
              <div className="flex items-stretch">
                <div className="w-28 bg-charcoal flex flex-col items-center justify-center p-4">
                  <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">ROC</span>
                  <span className="text-gold font-serif text-2xl font-bold">{license.roc}</span>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-charcoal">{license.category}</h2>
                      <p className="text-gold text-sm font-medium">{license.classification}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{license.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-charcoal to-charcoal-light rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-white mb-4">Have Questions?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our team is ready to help with any questions about our qualifications, services, or how we can assist with your project.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-charcoal font-semibold rounded-lg hover:shadow-gold-glow transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
