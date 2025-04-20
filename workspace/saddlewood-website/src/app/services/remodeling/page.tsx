import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import ServicePageTemplate from '@/components/ServicePageTemplate';

// SVG Icons for benefits
const BenefitIcons = {
  Quality: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  ),
  Comfort: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  ),
  Value: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  ),
  Energy: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  ),
  Design: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
    </svg>
  ),
  Experience: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  )
};

// SVG Icons for services
const ServiceIcons = {
  KitchenBath: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
    </svg>
  ),
  WholeHouse: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  ),
  Addition: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
    </svg>
  ),
  Outdoor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
    </svg>
  )
};

// Metadata
export const metadata: Metadata = {
  title: 'Remodeling Services in Phoenix | Kitchen, Bath & Whole Home Renovations',
  description: 'Premium home remodeling in Phoenix metro area. Kitchen & bath renovations, home additions, whole house remodels & outdoor living spaces. ROC #305762.',
};

export default function RemodelingPage() {
  // Schema.org structured data for Remodeling services
  const remodelingSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Remodeling Services",
    "serviceType": "Kitchen Remodeling, Bathroom Renovation, Home Additions, and Whole House Remodeling",
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
    "description": "Professional home remodeling services including kitchen and bathroom renovations, room additions, whole-house remodels, and outdoor living spaces for homes in Phoenix and surrounding areas.",
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
      "name": "Remodeling Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen & Bathroom Remodeling",
            "description": "Complete transformations of kitchens and bathrooms, including design, demolition, construction, plumbing, electrical, cabinetry, countertops, flooring, and lighting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Whole House Renovations",
            "description": "Comprehensive remodeling solutions for entire homes, including floor plans, wall removal, flooring, electrical, plumbing, fixtures, and wall finishes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Room Additions & Expansions",
            "description": "Adding new rooms, expanding living spaces, and building mother-in-law suites that blend seamlessly with existing homes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Living Spaces",
            "description": "Design and construction of patios, covered spaces, outdoor kitchens, and entertainment areas that extend living spaces outdoors."
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
        "name": "Satisfied Homeowner"
      },
      "reviewBody": "Saddlewood transformed our outdated kitchen into a stunning, modern space that's now the heart of our home. Their attention to detail and quality craftsmanship exceeded our expectations. The project was completed on time and on budget."
    }
  };
  // Benefits data
  const benefits = [
    {
      title: "Quality Craftsmanship",
      description: "We use premium materials and proven construction techniques to ensure your remodel will stand the test of time.",
      icon: BenefitIcons.Quality
    },
    {
      title: "Enhanced Comfort",
      description: "Improve your home's functionality, traffic flow, and livability with thoughtfully designed renovations.",
      icon: BenefitIcons.Comfort
    },
    {
      title: "Increased Property Value",
      description: "Strategic remodeling can increase your home's value by 60-80% of the project cost, making it a sound investment.",
      icon: BenefitIcons.Value
    },
    {
      title: "Energy Efficiency",
      description: "Modern materials and fixtures can significantly reduce your home's energy consumption and utility bills.",
      icon: BenefitIcons.Energy
    },
    {
      title: "Custom Design Solutions",
      description: "Our design team works with you to create personalized spaces that reflect your lifestyle, taste, and needs.",
      icon: BenefitIcons.Design
    },
    {
      title: "18+ Years Experience",
      description: "Our remodeling specialists bring decades of combined experience to every residential project.",
      icon: BenefitIcons.Experience
    }
  ];

  // Services data
  const services = [
    {
      title: "Kitchen & Bathroom Remodeling",
      description: "Complete transformations of your most important spaces. From modern open-concept kitchens to spa-like bathroom retreats, we handle every aspect including design, demolition, construction, plumbing, electrical, cabinetry, countertops, flooring, lighting, and final finishes.",
      icon: ServiceIcons.KitchenBath
    },
    {
      title: "Whole House Renovations",
      description: "Comprehensive remodeling solutions for your entire home. We can update floor plans, remove walls, replace flooring, update electrical and plumbing systems, install new fixtures, refresh wall finishes, and completely transform outdated spaces into the home you've always wanted.",
      icon: ServiceIcons.WholeHouse
    },
    {
      title: "Room Additions & Expansions",
      description: "Expand your living space with beautifully integrated additions. Whether you need an extra bedroom, home office, expanded living area, or mother-in-law suite, we handle the entire process from foundation to roof, ensuring the new space blends seamlessly with your existing home.",
      icon: ServiceIcons.Addition
    },
    {
      title: "Outdoor Living Spaces",
      description: "Extend your living area to the outdoors with custom patios, covered spaces, outdoor kitchens, and entertainment areas. We design and build functional outdoor environments that take advantage of Arizona's climate and complement your home's architecture.",
      icon: ServiceIcons.Outdoor
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: "How long will my remodeling project take?",
      answer: "Project timelines vary based on scope and complexity. As a general guideline, bathroom remodels typically take 3-5 weeks, kitchen remodels 4-8 weeks, and whole-house renovations 3-6 months. During your consultation, we'll provide a detailed timeline specific to your project. We pride ourselves on meeting deadlines and maintaining transparent communication throughout the process."
    },
    {
      question: "Do I need permits for my remodeling project?",
      answer: "Most remodeling projects do require permits, especially those involving structural changes, electrical, plumbing, or mechanical systems. As a licensed contractor, we handle all necessary permits and inspections as part of our service. This ensures your project is completed legally, safely, and according to current building codes, protecting both your investment and your family's safety."
    },
    {
      question: "How much does remodeling cost in Phoenix?",
      answer: "Remodeling costs vary widely depending on the scope, materials, and complexity. In the Phoenix metro area, kitchen remodels typically range from $30,000 to $90,000+, bathroom remodels from $15,000 to $50,000+, and whole house renovations from $100 to $250+ per square foot. During your consultation, we'll discuss your specific needs and budget to provide a detailed estimate tailored to your project."
    },
    {
      question: "Can I stay in my home during a remodel?",
      answer: "In most cases, yes. For kitchen and bathroom remodels, you can usually remain in your home with some adjustments to your routine. For whole-house renovations, it may be more comfortable to arrange alternative accommodations during certain phases. We take steps to minimize disruption by containing dust, maintaining clear pathways, and working within agreed-upon hours. We'll discuss logistics and recommendations based on your specific project."
    },
    {
      question: "How do you handle unexpected issues discovered during demolition?",
      answer: "It's not uncommon to discover hidden issues like water damage, outdated wiring, or structural problems when opening up walls. If we encounter unexpected issues, we immediately document them, discuss the findings with you, and present options for addressing them. We maintain a contingency budget (typically 10-15% of the project cost) to account for these possibilities, ensuring the project can continue without extensive delays."
    }
  ];

  return (
    <>
      <Script id="remodeling-schema" type="application/ld+json">
        {JSON.stringify(remodelingSchemaData)}
      </Script>
      <ServicePageTemplate
        serviceName="Remodeling"
        serviceTitle="Professional Home Remodeling in Phoenix, AZ"
        metaDescription="Premium home remodeling in Phoenix metro area. Kitchen & bath renovations, home additions, whole house remodels & outdoor living spaces. ROC #305762."
        heroImage="/images/remodeling-hero.jpg"
        heroAlt="Modern kitchen remodel in Phoenix home"
        introduction="Saddlewood Contracting transforms homes throughout the Phoenix valley with expert remodeling services. Our team of designers and craftsmen create beautiful, functional spaces that enhance your lifestyle and increase your property's value."
        primaryCTA="Schedule Consultation"
        benefits={benefits}
        services={services}
        faqs={faqs}
        certificationNumber="305762"
        certificationType="KB-2 Residential & Small Commercial"
        certificationDescription="This dual classification allows us to construct, remodel and repair homes, and construct, alter and repair commercial buildings not exceeding three stories in height and not exceeding 20,000 square feet per structure."
      />
    </>
  );
}