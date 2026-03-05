import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Scottsdale AZ | Luxury Bath Renovations | Saddlewood Contracting',
  description: 'Luxury bathroom remodeling in Scottsdale. Spa-inspired primary baths, guest bath updates, custom tile and fixtures. Serving McCormick Ranch & Gainey Ranch. Call (480) 999-6100.',
  alternates: { canonical: '/bathroom-remodeling-scottsdale' },
};

export default function BathroomRemodelingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a bathroom remodel cost in Scottsdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bathroom remodel costs in Scottsdale depend on scope and finishes. A guest bathroom update typically runs $15,000 to $35,000, while a luxury primary bathroom renovation can range from $40,000 to $100,000 or more. Saddlewood provides detailed estimates during a free in-home consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a bathroom remodel take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A guest bathroom remodel typically takes 4 to 6 weeks. A primary bathroom renovation runs 6 to 10 weeks depending on scope, custom tile complexity, and whether structural changes are involved. Saddlewood provides a detailed timeline during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for a bathroom remodel in Scottsdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most bathroom remodels in Scottsdale require permits if plumbing, electrical, or structural work is involved. Saddlewood handles all permitting on your behalf as part of our full-service approach."
        }
      },
      {
        "@type": "Question",
        "name": "Does Saddlewood serve Gainey Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Saddlewood Contracting has been serving Gainey Ranch homeowners since 2007. We understand the community's architectural standards, HOA requirements, and the expectations of Gainey Ranch residents."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="bathroom-faq-schema"
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
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Bathroom Remodeling</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
              Bathroom Remodeling in <span className="text-gold">Scottsdale, AZ</span>
            </h1>
            <p className="text-lg text-silver-light max-w-2xl mb-8">
              Spa-inspired bathroom renovations for McCormick Ranch, Gainey Ranch, and Scottsdale homeowners. From expansive primary bathroom overhauls to efficient guest bath updates.
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
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Spa-Inspired Bathroom Renovations for Scottsdale Homeowners</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your bathroom should feel like a retreat. If yours still has the brass fixtures, cultured marble, and builder-grade tile from the 1990s, it&apos;s time for a transformation. Saddlewood Contracting specializes in luxury bathroom remodeling for homeowners in <Link href="/mccormick-ranch" className="text-gold hover:text-gold-light">McCormick Ranch</Link>, <Link href="/gainey-ranch" className="text-gold hover:text-gold-light">Gainey Ranch</Link>, Paradise Valley, and across Scottsdale.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              From expansive primary bathroom overhauls to efficient guest bath updates, we bring the same level of craftsmanship and attention to detail to every project — no matter the size.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">What We Build</h2>
            <div className="space-y-8 mb-16">
              {[
                { title: 'Walk-in showers', desc: 'Frameless glass enclosures, custom tile work (including large-format porcelain, natural stone, and mosaic accents), rain shower heads, body jets, and built-in niches.' },
                { title: 'Freestanding soaking tubs', desc: 'Statement pieces that anchor the room and create a spa-like atmosphere.' },
                { title: 'Custom vanities', desc: 'Single and double vanity configurations with premium countertops, undermount sinks, and storage solutions tailored to your routine.' },
                { title: 'Heated floors', desc: 'Electric radiant floor heating beneath tile — a luxury that becomes essential once you\'ve experienced it.' },
                { title: 'Lighting design', desc: 'Task lighting at the vanity, ambient lighting for the shower, and accent lighting to set the mood. All electrical work performed under our own license.' },
                { title: 'Plumbing', desc: 'Complete plumbing reconfiguration when needed, including fixture installation, drain relocation, and water supply upgrades. All under our plumbing license (ROC #350716).' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-light rounded-xl border border-border-default">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">How Long Does a Bathroom Remodel Take?</h2>
            <p className="text-text-secondary leading-relaxed mb-12">
              A guest bathroom remodel typically takes 4 to 6 weeks. A primary bathroom renovation runs 6 to 10 weeks depending on scope, custom tile complexity, and whether structural changes are involved. We provide a detailed timeline during your free consultation.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-16 bg-obsidian">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">Explore Our Other Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/kitchen-remodeling-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Kitchen Remodeling →</h3>
                <p className="text-text-secondary text-sm mt-1">Custom kitchen renovations</p>
              </Link>
              <Link href="/whole-home-remodel-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Whole-Home Remodeling →</h3>
                <p className="text-text-secondary text-sm mt-1">Complete home transformations</p>
              </Link>
              <Link href="/custom-home-builder-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Custom New Construction →</h3>
                <p className="text-text-secondary text-sm mt-1">Ground-up luxury homes</p>
              </Link>
              <Link href="/gainey-ranch" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Gainey Ranch →</h3>
                <p className="text-text-secondary text-sm mt-1">Serving Gainey Ranch since 2007</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Book Your Free Bathroom Remodel Consultation</h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              We&apos;ll visit your home, walk through your current bathroom, discuss what you love (and what you don&apos;t), and provide a preliminary scope and timeline. No cost, no obligation.
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
