import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Service Offerings - Saddlewood Contracting | Phoenix AZ',
  description: 'Comprehensive HVAC, electrical, plumbing, and remodeling services throughout Phoenix and the Valley. Licensed, bonded, and insured with 18+ years of experience.',
  keywords: 'HVAC services, electrical services, plumbing services, remodeling, home services, Phoenix, Arizona, contractor',
};

export default function ServicesPage() {
  const services = [
    {
      category: "HVAC Services",
      icon: "🌡️",
      description: "Complete heating, ventilation, and air conditioning solutions",
      services: [
        "Air Conditioning Installation & Repair",
        "Heating System Installation & Maintenance", 
        "Ductwork Design & Installation",
        "Indoor Air Quality Solutions",
        "Energy Efficiency Upgrades",
        "24/7 HVAC Emergency Service",
        "Preventive Maintenance Programs",
        "Smart Thermostat Installation"
      ]
    },
    {
      category: "Electrical Services", 
      icon: "⚡",
      description: "Professional electrical work for residential and commercial properties",
      services: [
        "Electrical Panel Upgrades",
        "Wiring & Rewiring Services",
        "Outlet & Switch Installation",
        "Ceiling Fan Installation",
        "Lighting Design & Installation",
        "Electrical Safety Inspections",
        "Generator Installation & Service",
        "Electric Vehicle Charging Stations"
      ]
    },
    {
      category: "Plumbing Services",
      icon: "🔧", 
      description: "Complete plumbing solutions from repairs to full installations",
      services: [
        "Pipe Repair & Replacement",
        "Water Heater Installation & Service",
        "Drain Cleaning & Repair",
        "Fixture Installation & Replacement",
        "Leak Detection & Repair",
        "Sewer Line Services",
        "Water Filtration Systems",
        "Bathroom & Kitchen Plumbing"
      ]
    },
    {
      category: "Remodeling Services",
      icon: "🏠",
      description: "Transform your space with professional remodeling services",
      services: [
        "Kitchen Remodeling",
        "Bathroom Renovations",
        "Basement Finishing",
        "Room Additions",
        "Flooring Installation",
        "Tile & Countertop Installation",
        "Custom Cabinetry",
        "Whole Home Renovations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Service Offerings
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Comprehensive home services throughout Phoenix and the Valley
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Estimate
              </Link>
              <Link 
                href="tel:480-999-6100" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (480) 999-6100
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((serviceCategory, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{serviceCategory.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {serviceCategory.category}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {serviceCategory.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {serviceCategory.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  href={`/services/${serviceCategory.category.toLowerCase().split(' ')[0]}`}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Learn more about {serviceCategory.category} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Saddlewood Contracting?
            </h2>
            <p className="text-lg text-gray-600">
              18+ years of trusted service throughout the Phoenix Valley
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                ROC 305762 – KB-2 Dual Residential and Small Commercial certification with full insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by our customers for quality workmanship and professional service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmen</h3>
              <p className="text-gray-600">
                Skilled professionals with decades of combined experience in all home service trades
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Proudly serving the greater Phoenix metropolitan area
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              'Phoenix', 'Scottsdale', 'Tempe', 'Mesa',
              'Chandler', 'Gilbert', 'Glendale', 'Paradise Valley',
              'Fountain Hills', 'Cave Creek', 'Carefree', 'Ahwatukee'
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow">
                <span className="font-medium text-gray-800">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free estimate on any of our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Free Estimate
            </Link>
            <Link 
              href="/gallery" 
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}