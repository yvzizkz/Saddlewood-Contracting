import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'McCormick Ranch Contractor | Home Remodeling & Renovation | Saddlewood Contracting',
  description: 'McCormick Ranch home remodeling contractor since 2007. Kitchen & bath renovations, whole-home remodels, custom builds. Licensed, bonded, insured. Call (480) 999-6100.',
  alternates: { canonical: '/mccormick-ranch' },
};

export default function McCormickRanchPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Saddlewood Contracting LLC",
    "url": "https://saddlewoodcontracting.com/mccormick-ranch",
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
      "name": "McCormick Ranch, Scottsdale, AZ"
    },
    "description": "Saddlewood Contracting is a licensed general contractor serving McCormick Ranch homeowners since 2007. Kitchen and bathroom renovations, whole-home remodels, and custom construction."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Saddlewood Contracting serve McCormick Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Saddlewood Contracting has been serving McCormick Ranch homeowners since 2007. We understand the community's HOA requirements, architectural standards, and the unique character of McCormick Ranch homes built from the 1970s through the 1990s."
        }
      },
      {
        "@type": "Question",
        "name": "What types of remodeling does Saddlewood do in McCormick Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in kitchen remodeling, bathroom renovations, whole-home remodels, and custom new construction in McCormick Ranch. We also handle all HVAC, electrical, and plumbing work in-house under our own ROC licenses."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need HOA approval for a remodel in McCormick Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many McCormick Ranch subdivisions have HOA architectural review requirements for exterior modifications. Saddlewood is familiar with these processes and can assist with submitting plans for approval. Interior renovations typically do not require HOA approval but may require City of Scottsdale permits."
        }
      },
      {
        "@type": "Question",
        "name": "Is Saddlewood Contracting licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Saddlewood Contracting holds four active Arizona ROC licenses: General Contracting (#305762), HVAC (#350714), Electrical (#350715), and Plumbing (#350716). We are fully bonded and insured."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="mccormick-local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mccormick-faq-schema"
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
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">McCormick Ranch</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
              McCormick Ranch Home Remodeling &amp; <span className="text-gold">Renovation Contractor</span>
            </h1>
            <p className="text-lg text-silver-light max-w-2xl mb-8">
              Saddlewood Contracting has been transforming McCormick Ranch homes since 2007. We understand your community, your homes, and your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-text-inverse font-semibold rounded-xl shadow-gold hover:shadow-gold-lg hover:bg-gold-dark transition-all duration-300">
                Schedule Consultation
              </Link>
              <a href="tel:4809996100" className="inline-flex items-center justify-center px-8 py-4 bg-surface text-text-primary font-medium border border-border-default rounded-xl shadow-soft hover:shadow-lift hover:border-gold/50 transition-all duration-300">
                (480) 999-6100
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Your Trusted McCormick Ranch Contractor</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              McCormick Ranch is one of Scottsdale&apos;s most beloved communities — known for its tree-lined streets, lakeside living, golf courses, and central location. Many of the homes here were built between the 1970s and 1990s, offering solid construction, generous lot sizes, and timeless neighborhood character.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              But even the best-built homes need updating after 30 to 50 years. Kitchens that were state-of-the-art in 1985 no longer serve how families cook and entertain today. Bathrooms with brass fixtures and cultured marble countertops are ready for a transformation. And many homeowners are looking to open up floor plans, improve indoor-outdoor flow, and bring their homes into the present.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              That&apos;s where Saddlewood Contracting comes in. We&apos;ve been working in McCormick Ranch for nearly two decades. We understand the HOA requirements, the architectural standards, and the permitting process. More importantly, we understand what McCormick Ranch homeowners expect: meticulous craftsmanship, transparent communication, and a contractor who treats your home with the respect it deserves.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">Services We Provide in McCormick Ranch</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              <Link href="/kitchen-remodeling-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Kitchen Remodeling</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Custom cabinetry, premium countertops, professional-grade appliances, and layouts designed for modern living.</p>
              </Link>
              <Link href="/bathroom-remodeling-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Bathroom Renovations</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Spa-inspired primary baths, guest bath updates, walk-in showers, and luxury fixtures.</p>
              </Link>
              <Link href="/whole-home-remodel-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Whole-Home Remodels</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Complete transformations that reimagine your McCormick Ranch home from top to bottom.</p>
              </Link>
              <Link href="/custom-home-builder-scottsdale" className="p-6 bg-surface-light rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors mb-2">Custom New Construction</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Ground-up luxury homes on McCormick Ranch lots, including tear-down rebuilds.</p>
              </Link>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Why McCormick Ranch Homeowners Choose Saddlewood</h2>
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
                <p className="text-text-secondary"><strong className="text-text-primary">Top 10% of Arizona contractors</strong> — as rated by BuildZoom</p>
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
              <Link href="/gainey-ranch" className="px-4 py-2 bg-surface rounded-lg text-text-primary text-sm hover:text-gold transition-colors border border-border-default hover:border-gold/30">Gainey Ranch</Link>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">Paradise Valley</span>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">North Scottsdale</span>
              <span className="px-4 py-2 bg-surface rounded-lg text-text-secondary text-sm border border-border-default">Phoenix</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Schedule Your Free McCormick Ranch Consultation</h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              We&apos;ll visit your McCormick Ranch home, discuss your vision, and provide a preliminary scope and estimate — all at no cost or obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-text-inverse font-semibold rounded-xl shadow-gold hover:shadow-gold-lg hover:bg-gold-dark transition-all duration-300">
                Schedule Consultation
              </Link>
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
