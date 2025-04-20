import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

// SVG Icons for benefits
const BenefitIcons = {
  Comfort: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  ),
  Efficiency: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  ),
  Savings: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  ),
  HealthySafe: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  ),
  ExpertService: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
    </svg>
  ),
  AllBrands: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
    </svg>
  )
};

// SVG Icons for services
const ServiceIcons = {
  Installation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
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
  AirQuality: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  )
};

// Metadata
export const metadata: Metadata = {
  title: 'HVAC Services | Air Conditioning, Heating & Ventilation | Saddlewood',
  description: 'Expert HVAC services in Phoenix - AC repair, installation, maintenance & heating solutions. Emergency service available. Licensed & insured (ROC #350714).',
};

export default function HVACPage() {
  // Benefits data
  const benefits = [
    {
      title: "Improved Comfort",
      description: "Enjoy perfect temperatures and balanced humidity levels throughout your home, all year round.",
      icon: BenefitIcons.Comfort
    },
    {
      title: "Enhanced Efficiency",
      description: "Modern HVAC systems can reduce energy consumption by up to 50% compared to older models.",
      icon: BenefitIcons.Efficiency
    },
    {
      title: "Cost Savings",
      description: "Lower utility bills and reduce maintenance costs with properly installed and maintained systems.",
      icon: BenefitIcons.Savings
    },
    {
      title: "Healthier Air",
      description: "Improved indoor air quality with advanced filtration to remove allergens, dust, and pollutants.",
      icon: BenefitIcons.HealthySafe
    },
    {
      title: "Expert Service",
      description: "Our licensed technicians have an average of 10+ years of HVAC experience.",
      icon: BenefitIcons.ExpertService
    },
    {
      title: "All Major Brands",
      description: "We service and install all major HVAC brands, including Carrier, Trane, Lennox, and more.",
      icon: BenefitIcons.AllBrands
    }
  ];

  // Services data
  const services = [
    {
      title: "HVAC Installation & Replacement",
      description: "Professional installation of new heating and cooling systems, from central air conditioners and heat pumps to mini-split systems and furnaces. We'll help you select the right size and type of system for your home's specific needs and budget.",
      icon: ServiceIcons.Installation
    },
    {
      title: "HVAC Repair & Troubleshooting",
      description: "Fast, reliable repair service for all makes and models. Our technicians are extensively trained to diagnose and fix issues with your air conditioner, heat pump, or furnace quickly. We provide upfront pricing and stand behind our work with robust guarantees.",
      icon: ServiceIcons.Repair
    },
    {
      title: "Preventative Maintenance",
      description: "Regular maintenance keeps your system running efficiently, extends its lifespan, and prevents costly breakdowns. Our maintenance plans include thorough inspections, cleaning, and tune-ups to ensure optimal performance year-round.",
      icon: ServiceIcons.Maintenance
    },
    {
      title: "Indoor Air Quality Solutions",
      description: "Improve the air you breathe with whole-house air purifiers, humidifiers, dehumidifiers, and advanced filtration systems. We offer comprehensive solutions to address air quality issues like allergens, mold, bacteria, and dry air.",
      icon: ServiceIcons.AirQuality
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: "How often should I replace my HVAC air filters?",
      answer: "Standard fiberglass filters should typically be replaced every 30 days. Higher-quality pleated filters can last 3-6 months. However, if you have pets, allergies, or live in a dusty environment, more frequent changes may be necessary. We recommend checking your filter monthly to determine when replacement is needed."
    },
    {
      question: "What size HVAC system do I need for my home?",
      answer: "The correct size depends on several factors including your home's square footage, insulation levels, window efficiency, ceiling height, and local climate. An improperly sized system can lead to comfort issues and wasted energy. Our technicians perform a detailed load calculation to determine the perfect size for your specific home."
    },
    {
      question: "How long should my HVAC system last?",
      answer: "With proper maintenance, you can expect a typical HVAC system to last 15-20 years. Air conditioners and heat pumps may last 10-15 years, while furnaces can last 15-20 years or more. Regular maintenance is crucial for maximizing lifespan and maintaining efficiency."
    },
    {
      question: "What maintenance does my HVAC system need?",
      answer: "Regular maintenance includes changing air filters, cleaning coils, checking refrigerant levels, inspecting electrical components, lubricating moving parts, and ensuring proper airflow. We recommend professional maintenance twice yearly—once before cooling season and once before heating season."
    },
    {
      question: "How can I lower my heating and cooling costs?",
      answer: "Maintain your system regularly, use a programmable thermostat, ensure proper insulation, seal air leaks, keep vents unobstructed, use ceiling fans, and consider upgrading to a high-efficiency system if yours is over 10 years old. Our energy audit can identify specific ways to improve efficiency in your home."
    }
  ];

  return (
    <ServicePageTemplate
      serviceName="HVAC"
      serviceTitle="Professional HVAC Services in Phoenix, AZ"
      metaDescription="Expert HVAC services in Phoenix - AC repair, installation, maintenance & heating solutions. Emergency service available. Licensed & insured (ROC #350714)."
      heroImage="/images/hvac-hero.jpg"
      heroAlt="HVAC technician installing an air conditioning unit"
      introduction="Saddlewood Contracting provides complete heating, ventilation, and air conditioning services for homes throughout the Phoenix valley. Our licensed technicians deliver expert installation, repair, and maintenance services that keep your home comfortable year-round."
      primaryCTA="Schedule Service"
      benefits={benefits}
      services={services}
      faqs={faqs}
      certificationNumber="350714"
      certificationType="CR-39 Air Conditioning and Refrigeration"
      certificationDescription="This classification allows us to install, alter, and repair refrigeration and evaporative cooling systems, including warm-air heating systems and all integrated parts of a heating, cooling, and ventilation system."
    />
  );
}