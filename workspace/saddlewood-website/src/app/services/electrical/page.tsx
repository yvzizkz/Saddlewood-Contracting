import React from 'react';
import Link from 'next/link';

export default function ElectricalPage() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Electrical Services</h1>
          <p className="text-xl">Professional electrical contracting for all your needs</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expert Electrical Solutions</h2>
            <p className="mb-4">
              Saddlewood Contracting provides comprehensive electrical services for residential and commercial properties.
              Our licensed electricians are equipped to handle everything from minor repairs to complete electrical system installations.
            </p>
            <p className="mb-6">
              Safety is our top priority. We adhere to the strictest industry standards and building codes to ensure all electrical work is done properly and safely.
            </p>
            
            <Link href="/contact" className="btn-primary inline-block">
              Request Service
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Our Electrical Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Electrical Panel Upgrades</strong> - Modernizing outdated electrical panels for improved safety and capacity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Lighting Installation</strong> - Interior and exterior lighting solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Outlet & Switch Installation</strong> - Adding or replacing electrical outlets and switches</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Wiring & Rewiring</strong> - Complete wiring for new construction or updating older systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Ceiling Fan Installation</strong> - Professional mounting and wiring of ceiling fans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Troubleshooting & Repairs</strong> - Identifying and fixing electrical problems</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl ring-2 ring-gray-300 p-8 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">The Saddlewood Electrical Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Licensed Professionals</h4>
              <p>ROC 350715 – CR-11 Electrical license ensures qualified expertise</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Code Compliance</h4>
              <p>All work completed to current National Electrical Code standards</p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-3">
                <span>✓</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Transparent Pricing</h4>
              <p>Clear, upfront quotes with no hidden costs or surprises</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
