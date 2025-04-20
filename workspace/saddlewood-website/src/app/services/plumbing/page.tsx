import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import ServicePageTemplate from '@/components/ServicePageTemplate';

// SVG Icons for benefits
const BenefitIcons = {
  Reliability: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  ),
  Efficiency: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  ),
  QualityMaterials: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
    </svg>
  ),
  HealthSafety: (
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  )
};

// SVG Icons for services
const ServiceIcons = {
  RepairReplacement: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
    </svg>
  ),
  DrainCleaning: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
    </svg>
  ),
  LeakDetection: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  ),
  WaterHeater: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
    </svg>
  )
};

// Metadata
export const metadata: Metadata = {
  title: 'Plumbing Services in Phoenix | Leak Detection, Repairs & Installations',
  description: 'Expert plumbing services for Phoenix area homes - leak detection, drain cleaning, water heater services, fixture installations & repairs. ROC #350716.',
};

export default function PlumbingPage() {
  // Schema.org structured data for Plumbing services
  const plumbingSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Services",
    "serviceType": "Plumbing Repair, Installation, and Maintenance",
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
    "description": "Professional plumbing services including leak detection, drain cleaning, water heater installation and repair, pipe maintenance, and fixture installations for homes in Phoenix and surrounding areas.",
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
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
            "description": "Using advanced technology to locate hidden leaks behind walls, under floors, or in your foundation without extensive demolition."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning & Sewer Services",
            "description": "Professional drain cleaning using the latest techniques and equipment to clear stubborn clogs and maintain free-flowing drains."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Services",
            "description": "Installation, repair, maintenance, and replacement for traditional tank and tankless water heaters."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing Repair & Replacement",
            "description": "Fixing leaky faucets, running toilets, replacing pipes and fixtures with upfront pricing and comprehensive warranties."
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
        "name": "Phoenix Customer"
      },
      "reviewBody": "The plumber from Saddlewood was professional, quick, and fixed our leak perfectly. Their expertise saved us from what could have been major water damage."
    }
  };
  // Benefits data
  const benefits = [
    {
      title: "Reliable Service",
      description: "24/7 emergency service and on-time arrivals with professional plumbers who respect your home.",
      icon: BenefitIcons.Reliability
    },
    {
      title: "Water Efficiency",
      description: "Modern plumbing solutions can reduce water consumption by up to 30%, lowering your utility bills.",
      icon: BenefitIcons.Efficiency
    },
    {
      title: "Quality Materials",
      description: "We use only premium materials and fixtures that are built to last and backed by solid warranties.",
      icon: BenefitIcons.QualityMaterials
    },
    {
      title: "Health & Safety",
      description: "Proper plumbing is essential for your family's health, preventing contamination and water damage.",
      icon: BenefitIcons.HealthSafety
    },
    {
      title: "Increased Home Value",
      description: "Updated plumbing systems and fixtures significantly enhance your property's market value.",
      icon: BenefitIcons.PropertyValue
    },
    {
      title: "Expert Plumbers",
      description: "Our licensed plumbers have extensive training and experience in all aspects of residential plumbing.",
      icon: BenefitIcons.ExpertService
    }
  ];

  // Services data
  const services = [
    {
      title: "Plumbing Repair & Replacement",
      description: "From fixing leaky faucets and running toilets to replacing pipes and fixtures, our skilled plumbers can handle any repair or replacement need in your home. We provide upfront pricing and stand behind our work with comprehensive warranties.",
      icon: ServiceIcons.RepairReplacement
    },
    {
      title: "Drain Cleaning & Sewer Services",
      description: "We use the latest techniques and equipment to clear stubborn clogs and maintain free-flowing drains. Our services include hydro jetting, video camera inspections, and trenchless sewer repairs to minimize disruption to your property.",
      icon: ServiceIcons.DrainCleaning
    },
    {
      title: "Leak Detection & Repair",
      description: "Using advanced technology, we can locate hidden leaks behind walls, under floors, or in your foundation without extensive demolition. Our non-invasive methods save you time, money, and unnecessary damage to your home.",
      icon: ServiceIcons.LeakDetection
    },
    {
      title: "Water Heater Services",
      description: "Complete services for traditional tank and tankless water heaters, including installation, repair, maintenance, and replacement. We'll help you select the right water heating solution for your household's specific needs and budget.",
      icon: ServiceIcons.WaterHeater
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: "How do I know if I have a water leak?",
      answer: "Signs of water leaks include unexplained increases in water bills, the sound of running water when no fixtures are in use, damp spots on walls or ceilings, mold or mildew growth, reduced water pressure, and warm spots on your floor (potentially indicating a hot water line leak). Our leak detection specialists can accurately locate leaks using non-invasive methods."
    },
    {
      question: "Why is my water bill suddenly higher?",
      answer: "Unexpected increases in your water bill can be caused by hidden leaks, running toilets (which can waste up to 200 gallons per day), seasonal water usage changes, water-inefficient fixtures, or problems with your water meter. We can inspect your plumbing system to identify the cause and recommend appropriate solutions."
    },
    {
      question: "How often should I have my drains cleaned?",
      answer: "For preventive maintenance, we recommend having main sewer lines cleaned every 18-22 months. Kitchen drains benefit from cleaning every 6-12 months, especially if you use your garbage disposal frequently. Bathroom drains should be cleaned every 6-12 months to prevent build-up of hair and soap scum. Signs that you need drain cleaning include slow drainage, gurgling sounds, or foul odors."
    },
    {
      question: "Tank vs. tankless water heater: Which is better?",
      answer: "The best choice depends on your specific needs. Tank water heaters have lower upfront costs and are easier to install but use more energy to maintain water temperature. Tankless water heaters offer unlimited hot water, take up less space, last longer (20+ years vs. 10-15 for tanks), and are 24-34% more energy-efficient, but have higher initial costs. We can assess your household's hot water demands and help you make the right choice."
    },
    {
      question: "What should I do if a pipe bursts in my home?",
      answer: "First, shut off your home's main water valve to stop water flow. Next, turn on faucets to drain remaining water from pipes. Then, call us for emergency service. While waiting, remove valuable items from the affected area, use towels to soak up water, and document the damage for insurance purposes. Our emergency plumbers are available 24/7 and will respond quickly to minimize damage."
    }
  ];

  return (
    <>
      <Script id="plumbing-schema" type="application/ld+json">
        {JSON.stringify(plumbingSchemaData)}
      </Script>
      <ServicePageTemplate
        serviceName="Plumbing"
        serviceTitle="Professional Plumbing Services in Phoenix, AZ"
        metaDescription="Expert plumbing services for Phoenix area homes - leak detection, drain cleaning, water heater services, fixture installations & repairs. ROC #350716."
        heroImage="/images/plumbing-hero.jpg"
        heroAlt="Plumber working on pipes in Phoenix home"
        introduction="Saddlewood Contracting provides comprehensive plumbing services for residential properties throughout the Phoenix valley. Our licensed plumbers deliver expert installation, repair, and maintenance services that ensure your plumbing systems function reliably and efficiently."
        primaryCTA="Schedule Service"
        benefits={benefits}
        services={services}
        faqs={faqs}
        certificationNumber="350716"
        certificationType="CR-37 Plumbing"
        certificationDescription="This classification allows us to install, alter, and repair all plumbing when performed solely within property lines and not on public easements or right-of-ways, including the required venting for waste or drainage, hot and cold water piping, and gas piping systems."
      />
    </>
  );
}