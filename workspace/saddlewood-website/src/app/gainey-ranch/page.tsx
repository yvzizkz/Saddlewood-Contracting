import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Gainey Ranch Contractor | Luxury Home Remodeling & Renovation | Saddlewood Contracting',
  description: 'Gainey Ranch luxury home remodeling contractor since 2007. Kitchen & bath renovations, whole-home remodels, custom builds. Licensed, bonded, insured. Call (480) 999-6100.',
  alternates: { canonical: '/gainey-ranch' },
};

export default function GaineyRanchPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Saddlewood Contracting LLC",
    "url": "https://saddlewoodcontracting.com/gainey-ranch",
    "telephone": "+14809996100",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "postalCode": "85258",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Gainey Ranch, Scottsdale, AZ"
    },
    "description": "Saddlewood Contracting is a licensed general contractor serving Gainey Ranch homeowners since 2007. Luxury kitchen and bathroom renovations, whole-home remodels, and custom construction."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Saddlewood Contracting serve Gainey Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Saddlewood Contracting has been serving Gainey Ranch homeowners since 2007. We understand the community's architectural standards, HOA requirements, and the expectations of Gainey Ranch residents."
        }
      },
      {
        "@type": "Question",
        "name": "What types of remodeling does Saddlewood do in Gainey Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in luxury kitchen remodeling, spa-inspired bathroom renovations, whole-home remodels, and custom new construction in Gainey Ranch. All HVAC, electrical, and plumbing work is handled in-house under our own ROC licenses."
        }
      },
      {
        "@type": "Question",
        "name": "Does Gainey Ranch require HOA approval for remodeling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gainey Ranch has an active HOA with architectural review requirements for exterior modifications and some interior projects. Saddlewood is experienced with the Gainey Ranch HOA process and can assist with submitting plans for approval."
        }
      },
      {
        "@type": "Question",
        "name": "How long has Saddlewood been working in Gainey Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saddlewood Contracting has been serving Gainey Ranch and Scottsdale homeowners since 2007 — nearly two decades of experience in the community."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="gainey-local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="gainey-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen pb-20 md:pb-0">
        {/* Hero */}
        <div className="bg-gradient-hero py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise-texture pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/0"></div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Gainey Ranch</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
              Gainey Ranch Home Remodeling &amp; <span className="text-gold">Luxury Renovation</span>
            </h1>
            <p className="text-lg text-silver-light max-w-2xl mb-8">
              Saddlewood Contracting has been transforming Gainey Ranch estates since 2007. Luxury remodeling for one of Scottsdale&apos;s most prestigious communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-text-inverse font-semibold rounded-xl shadow-gold hover:shadow-gold-lg hover:bg-gold-dark transition-all duration-300">
                Schedule Consultation
              </a>
              <a href="tel:4809996100" className="inline-flex items-center justify-center px-8 py-4 bg-surface text-text-primary font-medium border border-border-default rounded-xl shadow-soft hover:shadow-lift hover:border-gold/50 transition-all duration-300">
                (480) 999-6100
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Your Trusted Gainey Ranch Contractor</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Gainey Ranch is among Scottsdale&apos;s most prestigious residential communities — known for its guard-gated neighborhoods, championship golf, resort-style amenities, and architectural distinction. The homes here reflect a standard of quality that demands an equally exceptional contractor.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Saddlewood Contracting has been serving Gainey Ranch homeowners for nearly two decades. We understand the community&apos;s architectural review process, the HOA standards, and the level of finish that Gainey Ranch residents expect. Whether you&apos;re updating a kitchen, transforming a primary bathroom, or reimagining your entire home, we bring the craftsmanship and communication that this community demands.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              Many Gainey Ranch homes were built in the 1980s and 1990s with exceptional quality and generous proportions. Today, they&apos;re ready for modern updates — open floor plans, contemporary kitchens, spa-inspired bathrooms, and improved indoor-outdoor living. Saddlewood specializes in exactly this kind of transformation.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">Services We Provide in Gainey Ranch</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              <Link href="/kitchen-remodeling-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Kitchen Remodeling</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Chef&apos;s kitchens with custom cabinetry, premium stone, and professional-grade appliances for Gainey Ranch estates.</p>
              </Link>
              <Link href="/bathroom-remodeling-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Bathroom Renovations</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Spa-inspired primary baths and guest bath updates with luxury fixtures and custom tile work.</p>
              </Link>
              <Link href="/whole-home-remodel-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Whole-Home Remodels</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Complete transformations that bring your Gainey Ranch home into the present while preserving its character.</p>
              </Link>
              <Link href="/custom-home-builder-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Custom New Construction</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Ground-up luxury homes built to the highest standards on Gainey Ranch lots.</p>
              </Link>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Why Gainey Ranch Homeowners Choose Saddlewood</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                </div>
                <p className="text-text-secondary"><strong className="text-text-primary">18+ years serving Scottsdale</strong> — established, experienced, trusted</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                </div>
                <p className="text-text-secondary"><strong className="text-text-primary">Multiple active ROC licenses</strong> — General #305762, HVAC #350714, Electrical #350715, Plumbing #350716</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                </div>
                <p className="text-text-secondary"><strong className="text-text-primary">Gainey Ranch HOA experience</strong> — familiar with architectural review and community standards</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                </div>
                <p className="text-text-secondary"><strong className="text-text-primary">Fully licensed, bonded, and insured</strong> — your investment is protected</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Also Serving */}
        <section className="py-16 bg-obsidian">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-silver-dark text-sm mb-4">Also serving</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/mccormick-ranch" className="px-4 py-2 bg-surface rounded-lg text-text-primary text-sm hover:text-gold transition-colors border border-border-default hover:border-gold/30">McCormick Ranch</Link>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">Paradise Valley</span>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">North Scottsdale</span>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">Phoenix</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 sm:py-24 bg-surface" id="contact">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Schedule Your Free Gainey Ranch Consultation</h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                We&apos;ll visit your Gainey Ranch home, discuss your vision, and provide a preliminary scope and estimate — all at no cost or obligation.
              </p>
            </div>
            <div className="bg-surface rounded-2xl shadow-soft-lg border border-border-default overflow-hidden max-w-2xl mx-auto">
              <div className="bg-obsidian p-8">
                <h3 className="text-text-primary font-semibold text-lg">Request a Consultation</h3>
                <p className="text-silver-dark text-sm mt-1">We typically respond within one business day</p>
              </div>
              <div style={{ height: '1563px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/qjPFOpSfY46uUC4smKZe"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-qjPFOpSfY46uUC4smKZe-gainey"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 4"
                  data-height="1563"
                  data-layout-iframe-id="inline-qjPFOpSfY46uUC4smKZe-gainey"
                  data-form-id="qjPFOpSfY46uUC4smKZe"
                  title="Request a Consultation - Gainey Ranch"
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-text-secondary text-sm mb-2">Prefer to call?</p>
              <a href="tel:4809996100" className="inline-flex items-center justify-center px-8 py-4 bg-surface-light text-text-primary font-medium border border-border-default rounded-xl shadow-soft hover:shadow-lift hover:border-gold/50 transition-all duration-300">
                (480) 999-6100
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
