import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise-texture pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <path d="M0 0 L200 0 L200 4 L4 4 L4 200 L0 200 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <path d="M0 0 L200 0 L200 4 L4 4 L4 200 L0 200 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/0"></div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
                Paradise Valley&apos;s Premier Contractor
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.05] text-text-primary">
              Crafting Exceptional
              <span className="block mt-2 text-gold relative">
                Living Spaces
                <svg className="absolute -bottom-2 left-0 w-48 h-2 text-gold/20" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-4 max-w-xl text-silver-light leading-relaxed">
              For discerning homeowners who demand excellence. We deliver remodeling, HVAC, electrical, and plumbing solutions with uncompromising attention to detail.
            </p>

            <p className="text-base mb-8 max-w-xl text-silver-dark">
              Serving Paradise Valley, Scottsdale, Phoenix, and select communities throughout the Valley.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10 p-5 bg-surface/80 backdrop-blur-sm rounded-2xl border border-border-default shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Family-Owned</p>
                  <p className="text-xs text-silver-dark">Since 2007</p>
                </div>
              </div>
              <div className="h-10 w-px bg-border-default hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">4 ROC Licenses</p>
                  <p className="text-xs text-silver-dark">Fully Insured</p>
                </div>
              </div>
              <div className="h-10 w-px bg-border-default hidden sm:block"></div>
              <div className="pl-4 border-l-2 border-gold/40">
                <p className="text-sm italic text-silver">&ldquo;Your vision, built right.&rdquo;</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4
                          bg-gold text-text-inverse font-semibold
                          rounded-xl shadow-gold hover:shadow-gold-lg hover:bg-gold-dark
                          transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule a Consultation
              </Link>

              <a
                href="tel:4809996100"
                className="inline-flex items-center justify-center px-8 py-4
                          bg-surface text-text-primary font-medium border border-border-default
                          rounded-xl shadow-soft hover:shadow-lift
                          hover:border-gold/50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (480) 999-6100
              </a>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-border-default shadow-soft-lg backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 w-20 h-20">
                  <div className="w-full h-full rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Saddlewood"
                      width={48}
                      height={48}
                      className="opacity-80"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-3 shadow-inner-soft">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gold font-semibold text-sm uppercase tracking-wide">Fully Licensed & Insured</p>
                    <p className="text-silver-dark text-xs">Arizona Registrar of Contractors</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-sm">
                  {[
                    { service: 'HVAC Systems', roc: 'ROC 350714' },
                    { service: 'Electrical', roc: 'ROC 350715' },
                    { service: 'Plumbing', roc: 'ROC 350716' },
                    { service: 'General Contracting', roc: 'ROC 305762' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                      <span className="text-text-primary font-medium">{item.service}</span>
                      <span className="text-gold font-semibold group-hover:text-gold-light transition-colors">{item.roc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center">
                        <span className="text-gold text-xl font-serif font-bold">18+</span>
                      </div>
                      <div>
                        <p className="text-text-primary font-medium text-sm">Years of Excellence</p>
                        <p className="text-silver-dark text-xs">Serving Arizona Since 2007</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <a href="tel:4809996100" className="text-gold font-bold text-lg hover:text-gold-light transition-colors">(480) 999-6100</a>
                      <p className="text-silver-dark text-xs">Concierge Line</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-obsidian to-transparent pointer-events-none"></div>
    </section>
  );
}
