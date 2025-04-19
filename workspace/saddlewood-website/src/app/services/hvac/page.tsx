import React from 'react';
import Link from 'next/link';

export default function HVACPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">HVAC Services</h1>
          <p className="text-xl">Professional heating, ventilation, and air conditioning solutions</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive HVAC Solutions</h2>
            <p className="mb-4">
              At Saddlewood Contracting, we provide expert HVAC services for residential and commercial properties throughout Arizona.
              Our licensed technicians are trained to handle all aspects of heating, cooling, and ventilation systems.
            </p>
            <p className="mb-6">
              Whether you need a new installation, emergency repair, or regular maintenance, our team delivers reliable service with attention to detail.
            </p>
            
            <Link href="/contact" className="btn-primary inline-block">
              Schedule Service
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Our HVAC Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>AC Installation & Replacement</strong> - Expert installation of new systems and replacement of outdated units</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Heating System Services</strong> - Installation, repair, and maintenance of furnaces and heat pumps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Emergency Repairs</strong> - Fast response for unexpected breakdowns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Preventative Maintenance</strong> - Regular service to extend system life and prevent costly repairs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Ductwork</strong> - Design, installation, and repair of efficient duct systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Air Quality Solutions</strong> - Filtration systems and air purifiers</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl ring-2 ring-gray-300 p-8 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">Why Choose Saddlewood for HVAC?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Licensed Experts</h4>
              <p>ROC 350714 – CR-39 Air Conditioning and Refrigeration</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Energy Efficiency</h4>
              <p>Systems designed to maximize performance while reducing utility costs</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Guaranteed Work</h4>
              <p>Satisfaction guaranteed on all installations and repairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
