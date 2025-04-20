import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import ServicePageTemplate from '@/components/ServicePageTemplate';

// SVG Icons for benefits
const BenefitIcons = {
  Safety: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  ),
  Reliability: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
    </svg>
  ),
  Efficiency: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  ),
  PeaceOfMind: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>
  ),
  PropertyValue: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  ),
  ExpertService: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
    </svg>
  )
};

// SVG Icons for services
const ServiceIcons = {
  Installation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
    </svg>
  ),
  Repair: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  ),
  Maintenance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
    </svg>
  ),
  ElectricVehicle: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  )
};

// Metadata
export const metadata: Metadata = {
  title: 'Electrical Services | Licensed Electricians | Saddlewood Contracting',
  description: 'Licensed electrical contractors in Phoenix and surrounding areas. Installations, repairs, panel upgrades, lighting, EV charging stations & more. ROC #350715.',
};

export default function ElectricalPage() {
  // Schema.org structured data for Electrical services
  const electricalSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electrical Services",
    "serviceType": "Electrical Installation, Repair, and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://saddlewoodcontracting.com/#localbusiness",
      "name": "Saddlewood Contracting",
      "telephone": "(480) 999-6100",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Phoenix",
        "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
      },
      {
        "@type": "City",
        "name": "Paradise Valley"
      },
      {
        "@type": "City",
        "name": "Scottsdale"
      },
      {
        "@type": "City",
        "name": "Tempe"
      },
      {
        "@type": "City",
        "name": "Mesa"
      },
      {
        "@type": "City",
        "name": "Chandler"
      },
      {
        "@type": "City",
        "name": "Gilbert"
      },
      {
        "@type": "City",
        "name": "Glendale"
      },
      {
        "@type": "City",
        "name": "Fountain Hills"
      }
    ],
    "description": "Professional electrical services including installation, wiring, repairs, panel upgrades, and EV charging station installation for homes and businesses in Phoenix and surrounding areas.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "termsOfService": "https://saddlewoodcontracting.com/terms-and-conditions",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Installation & Wiring",
            "description": "Complete electrical wiring for new construction, renovations, and additions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Repairs & Troubleshooting",
            "description": "Diagnosing and repairing electrical problems in homes and businesses quickly and safely."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Panel Upgrades & Electrical Service",
            "description": "Upgrading electrical panels to safely handle modern power demands and circuit additions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electric Vehicle Charging Stations",
            "description": "Professional installation of EV charging stations for residential and commercial properties."
          }
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arizona Homeowner"
      },
      "reviewBody": "The electricians from Saddlewood did an outstanding job on our panel upgrade. They were knowledgeable, efficient, and explained everything. Our home is now safer and can handle all our modern electrical needs."
    }
  };
  // Benefits data
  const benefits = [
    {
      title: "Safety First",
      description: "Our work meets or exceeds all electrical codes, ensuring your family's safety and peace of mind.",
      icon: BenefitIcons.Safety
    },
    {
      title: "Reliable Power",
      description: "Prevent outages and ensure consistent power with professional electrical installations and upgrades.",
      icon: BenefitIcons.Reliability
    },
    {
      title: "Energy Efficiency",
      description: "Modern electrical systems can significantly reduce your energy consumption and utility bills.",
      icon: BenefitIcons.Efficiency
    },
    {
      title: "Peace of Mind",
      description: "All work is performed by licensed, insured professionals with extensive electrical experience.",
      icon: BenefitIcons.PeaceOfMind
    },
    {
      title: "Increased Property Value",
      description: "Updated electrical systems and modern features add significant value to your home.",
      icon: BenefitIcons.PropertyValue
    },
    {
      title: "Expert Service",
      description: "Our electricians have an average of 10+ years of experience in residential and commercial electrical work.",
      icon: BenefitIcons.ExpertService
    }
  ];

  // Services data
  const services = [
    {
      title: "Electrical Installation & Wiring",
      description: "Complete electrical wiring for new construction, renovations, and additions. We install outlets, switches, lighting fixtures, ceiling fans, and all electrical components to the highest standards of safety and quality.",
      icon: ServiceIcons.Installation
    },
    {
      title: "Electrical Repairs & Troubleshooting",
      description: "From circuit breaker problems and electrical surges to outlet failures and wiring issues, our expert electricians can diagnose and repair any electrical problem in your home or business quickly and safely.",
      icon: ServiceIcons.Repair
    },
    {
      title: "Panel Upgrades & Electrical Service",
      description: "Upgrade your electrical panel to safely handle modern power demands. We provide full-service electrical panel replacements, service upgrades (100A to 200A or higher), and circuit additions for growing homes.",
      icon: ServiceIcons.Maintenance
    },
    {
      title: "Electric Vehicle Charging Stations",
      description: "Professional installation of Level 1, Level 2, and DC fast charging stations for residential and commercial properties. We'll help you select the right charging solution for your EV and ensure proper installation and connection to your electrical system.",
      icon: ServiceIcons.ElectricVehicle
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: "How do I know if my home needs an electrical panel upgrade?",
      answer: "Signs that you may need an upgrade include: frequent circuit breaker trips, flickering lights when appliances run, using many power strips and extension cords, having a panel older than 25 years, or planning to add major electrical appliances. Homes with less than 100-amp service or with fuse boxes instead of circuit breakers should definitely be upgraded."
    },
    {
      question: "What electrical issues should I never attempt to fix myself?",
      answer: "Never attempt to replace electrical panels, repair or replace service entrance cables, fix major circuit issues, or work with aluminum wiring. These jobs require professional expertise due to significant safety risks. Even seemingly simple tasks like replacing outlets can be dangerous if you're not familiar with proper electrical safety procedures."
    },
    {
      question: "How often should electrical systems be inspected?",
      answer: "We recommend a comprehensive electrical inspection every 5-10 years for homes under 25 years old, and every 3-5 years for older homes. More frequent inspections are advisable if you notice any warning signs such as flickering lights, warm outlets, or frequently tripping breakers. We also recommend inspections before purchasing a home and after any major renovations."
    },
    {
      question: "What's involved in installing an EV charging station at home?",
      answer: "Installation typically involves mounting the charging unit, running dedicated electrical wiring from your panel to the charging location, installing a dedicated circuit breaker, and configuring the charger. The process usually takes 3-6 hours. We'll also assess your electrical panel's capacity to ensure it can handle the additional load and recommend upgrades if necessary."
    },
    {
      question: "Are smart home electrical upgrades worth the investment?",
      answer: "Smart electrical upgrades typically offer excellent return on investment through energy savings, increased convenience, and enhanced home value. Smart thermostats can save 10-15% on heating and cooling costs, while smart lighting systems can reduce lighting energy usage by up to 40%. Additionally, these features are increasingly expected by home buyers, potentially increasing your property value."
    }
  ];

  return (
    <>
      <Script
        id="electrical-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(electricalSchemaData) }}
      />
      <ServicePageTemplate
        serviceName="Electrical"
        serviceTitle="Professional Electrical Services in Phoenix, AZ"
        metaDescription="Licensed electrical contractors in Phoenix and surrounding areas. Installations, repairs, panel upgrades, lighting, EV charging stations & more. ROC #350715."
        heroImage="/images/electrical-hero.jpg"
        heroAlt="Electrician working on electrical panel in Phoenix home"
        introduction="Saddlewood Contracting provides complete electrical services for homes and businesses throughout the Valley. Our licensed electricians deliver expert installation, repair, and upgrade services that ensure your electrical systems are safe, efficient, and reliable."
        primaryCTA="Schedule Service"
        benefits={benefits}
        services={services}
        faqs={faqs}
        certificationNumber="350715"
        certificationType="CR-11 Electrical"
        certificationDescription="This classification allows us to install, alter, and repair any wiring, related electrical material and equipment used in the generating, transmitting, or utilization of electrical energy less than 600 volts, including all overhead electrical wiring on public right-of-ways for signs and street decorations."
      />
    </>
  );
}