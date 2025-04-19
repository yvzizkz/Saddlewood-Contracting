"use client";

import React from 'react';
import Link from 'next/link';

interface ServiceCTAProps {
  service: string;
  phone?: string;
}

export default function ServiceCTA({ service, phone = "480-999-6100" }: ServiceCTAProps) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
      <Link 
        href="/contact" 
        className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-center"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>Schedule {service} Service</span>
      </Link>
      
      <a 
        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
        className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-center group"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-pulse">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>Call Now: {phone}</span>
      </a>
    </div>
  );
}