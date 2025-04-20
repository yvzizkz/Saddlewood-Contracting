import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'License Information | Saddlewood Contracting',
  description: 'Detailed information about Saddlewood Contracting licenses, ROC certifications, and contractor classifications for our HVAC, electrical, plumbing, and remodeling services in Phoenix and surrounding areas.',
};

export default function LicenseInfoPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Arizona ROC License Information</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <p className="text-gray-700 mb-6">
              Saddlewood Contracting is fully licensed, bonded, and insured to perform contracting work in the state of Arizona.
              Our Arizona Registrar of Contractors (ROC) licenses allow us to legally provide the following services.
            </p>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">HVAC Services</h2>
                <div className="flex items-start">
                  <div className="bg-primary text-white text-center px-3 py-2 rounded mr-4">
                    <span className="font-bold block">ROC</span>
                    <span className="text-sm">350714</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">CR-39 Air Conditioning and Refrigeration</h3>
                    <p className="text-gray-600 mt-1">
                      This classification allows us to install, alter, and repair refrigeration and evaporative cooling 
                      systems, including warm-air heating systems and all integrated parts of a heating, cooling, 
                      and ventilation system.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Electrical Services</h2>
                <div className="flex items-start">
                  <div className="bg-primary text-white text-center px-3 py-2 rounded mr-4">
                    <span className="font-bold block">ROC</span>
                    <span className="text-sm">350715</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">CR-11 Electrical</h3>
                    <p className="text-gray-600 mt-1">
                      This classification allows us to install, alter, and repair any wiring, related electrical 
                      material and equipment used in the generating, transmitting, or utilization of electrical 
                      energy less than 600 volts, including all overhead electrical wiring on public right-of-ways 
                      for signs and street decorations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Plumbing Services</h2>
                <div className="flex items-start">
                  <div className="bg-primary text-white text-center px-3 py-2 rounded mr-4">
                    <span className="font-bold block">ROC</span>
                    <span className="text-sm">350716</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">CR-37 Plumbing</h3>
                    <p className="text-gray-600 mt-1">
                      This classification allows us to install, alter, and repair all plumbing when performed solely 
                      within property lines and not on public easements or right-of-ways, including the required 
                      venting for waste or drainage, hot and cold water piping, and gas piping systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Remodeling & Construction</h2>
                <div className="flex items-start">
                  <div className="bg-primary text-white text-center px-3 py-2 rounded mr-4">
                    <span className="font-bold block">ROC</span>
                    <span className="text-sm">305762</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">KB-2 Residential & Small Commercial</h3>
                    <p className="text-gray-600 mt-1">
                      This dual classification allows us to construct, remodel and repair homes, and construct, 
                      alter and repair commercial buildings not exceeding three stories in height and not exceeding 
                      20,000 square feet per structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Verify Our Licenses</h2>
            <p className="text-gray-700 mb-4">
              You can verify all of our licenses through the Arizona Registrar of Contractors website:
            </p>
            <a 
              href="https://roc.az.gov/contractor-search" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-accent hover:bg-accent-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Arizona ROC Contractor Search
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Have Questions?</h2>
              <p className="text-gray-600">
                Our team is ready to help with any questions about our qualifications or services.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}