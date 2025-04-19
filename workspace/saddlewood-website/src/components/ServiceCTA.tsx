"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

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
        <Calendar size={20} />
        <span>Schedule {service} Service</span>
      </Link>
      
      <a 
        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
        className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-center group"
      >
        <Phone size={20} className="group-hover:animate-pulse" />
        <span>Call Now: {phone}</span>
      </a>
    </div>
  );
}