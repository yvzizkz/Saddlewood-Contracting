"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCTA from './ServiceCTA';
import dynamic from 'next/dynamic';

const AnimatedBackgroundPattern = dynamic(() => import('@/components/AnimatedBackgroundPattern'), {
  ssr: false
});

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  serviceName: string;
  serviceTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  introduction: string;
  primaryCTA: string;
  benefits: Benefit[];
  services: Service[];
  faqs: FAQ[];
  certificationNumber: string;
  certificationType: string;
  certificationDescription: string;
}

export default function ServicePageTemplate({
  serviceName,
  serviceTitle,
  heroImage,
  heroAlt,
  introduction,
  primaryCTA,
  benefits,
  services,
  faqs,
  certificationNumber,
  certificationType,
  certificationDescription
}: ServicePageProps) {
  return (
    <main className="text-silver-light">
      {/* Hero Section */}
      <section className="relative bg-obsidian text-text-primary">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {serviceTitle}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-light">
              {introduction}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gold hover:bg-gold-dark text-text-inverse font-medium rounded-xl
                          transition-all duration-300 shadow-gold hover:shadow-gold-lg text-center
                          inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {primaryCTA}
              </a>
              <a
                href="tel:480-999-6100"
                className="px-8 py-4 bg-surface text-text-primary hover:bg-surface-light font-medium rounded-xl
                          border border-border-default hover:border-gold/50
                          transition-all duration-300 shadow-soft text-center
                          inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Our {serviceName} Services</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              See why homeowners throughout the Valley trust Saddlewood Contracting for their {serviceName.toLowerCase()} needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-surface-light rounded-xl shadow-soft p-6 transition-all duration-300 hover:shadow-lift hover:-translate-y-1 border border-border-default">
                <div className="text-gold mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-obsidian">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our {serviceName} Services</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive {serviceName.toLowerCase()} solutions from licensed professionals you can trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="mb-8 border-b border-border-default pb-8 last:border-b-0">
                <div className="flex items-start">
                  {service.icon && (
                    <div className="text-gold mr-4 mt-1">
                      {service.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-light rounded-xl shadow-soft p-8 flex flex-col md:flex-row border border-border-default">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                <div className="bg-gold text-text-inverse text-center px-4 py-3 rounded">
                  <span className="font-bold block">ROC</span>
                  <span className="text-sm">{certificationNumber}</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Licensed {serviceName} Contractor</h2>
                <h3 className="font-medium text-text-secondary mb-2">{certificationType}</h3>
                <p className="text-text-secondary">{certificationDescription}</p>
                <Link
                  href="/license-info"
                  className="inline-block mt-4 text-gold hover:text-gold-light font-medium"
                >
                  View All Our Licenses &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-obsidian">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Common questions about our {serviceName.toLowerCase()} services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 border-b border-border-default pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-surface text-text-primary relative overflow-hidden">
        <AnimatedBackgroundPattern
          patternType="blueprint"
          speed="slow"
          opacity={0.06}
          className="z-0"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-silver-light">
              Contact us today for a free estimate on your {serviceName.toLowerCase()} project.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gold hover:bg-gold-dark text-text-inverse font-medium rounded-xl
                        transition-all duration-300 shadow-gold hover:shadow-gold-lg text-center
                        inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Contact Us
              </Link>
              <a
                href="tel:480-999-6100"
                className="px-8 py-4 bg-surface-light text-text-primary hover:bg-surface-raised font-medium rounded-xl
                          border border-border-default hover:border-gold/50
                          transition-all duration-300 shadow-soft text-center
                          inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                480-999-6100
              </a>
            </div>

            <div className="mt-8">
              <p className="text-silver-dark text-sm font-medium tracking-wide">Available in Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Fountain Hills and the surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <section className="py-12 bg-surface-light">
        <div className="container-custom">
          <ServiceCTA service={serviceName} />
        </div>
      </section>
    </main>
  );
}
