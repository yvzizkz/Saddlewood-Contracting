import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling Scottsdale AZ | McCormick Ranch Kitchen Renovations | Saddlewood',
  description: 'Custom kitchen remodeling in Scottsdale. Saddlewood Contracting serves McCormick Ranch & Gainey Ranch with luxury kitchen renovations. Free consultation: (480) 999-6100.',
  alternates: { canonical: '/kitchen-remodeling-scottsdale' },
};

export default function KitchenRemodelingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a kitchen remodel cost in Scottsdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen remodel costs in Scottsdale vary widely depending on scope, materials, and finishes. A mid-range kitchen renovation typically runs $40,000 to $75,000, while a luxury full-gut remodel with custom cabinetry and premium appliances can range from $80,000 to $150,000 or more. Saddlewood provides detailed estimates during a free in-home consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a kitchen remodel take in Scottsdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical kitchen remodel takes 8 to 12 weeks from demolition to completion. Custom cabinetry orders may add 4 to 6 weeks of lead time. Saddlewood provides a detailed project timeline during your complimentary design consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for a kitchen remodel in Scottsdale AZ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most kitchen remodels in Scottsdale require permits from the City of Scottsdale Development Services, especially if structural, electrical, plumbing, or HVAC work is involved. Saddlewood handles all permitting on your behalf as part of our full-service approach."
        }
      },
      {
        "@type": "Question",
        "name": "Does Saddlewood Contracting serve McCormick Ranch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Saddlewood Contracting has been serving McCormick Ranch homeowners since 2007. We understand the community's HOA requirements, architectural standards, and the unique character of McCormick Ranch homes."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="kitchen-faq-schema"
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
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Kitchen Remodeling</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
              Kitchen Remodeling in <span className="text-gold">Scottsdale, AZ</span>
            </h1>
            <p className="text-lg text-silver-light max-w-2xl mb-8">
              Custom kitchen remodeling for McCormick Ranch, Gainey Ranch, and Scottsdale homeowners. From initial concept through final installation, we manage every detail.
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
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Luxury Kitchen Renovations for McCormick Ranch &amp; Gainey Ranch Homeowners</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your kitchen is the center of your home. It&apos;s where you start your mornings, gather with family, and entertain friends. When it no longer reflects how you live — or when the 1980s layout and finishes remind you daily that it&apos;s time for a change — Saddlewood Contracting is ready to help.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              We specialize in luxury kitchen remodeling for Scottsdale homeowners, with deep experience in <Link href="/mccormick-ranch" className="text-gold hover:text-gold-light">McCormick Ranch</Link>, <Link href="/gainey-ranch" className="text-gold hover:text-gold-light">Gainey Ranch</Link>, and Paradise Valley. From initial concept through final installation, we manage every detail: custom cabinetry, premium stone countertops, professional-grade appliances, lighting design, and layouts built around how you actually use your kitchen.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">What&apos;s Included in a Saddlewood Kitchen Remodel</h2>
            <div className="space-y-8 mb-16">
              {[
                { title: 'Design consultation and space planning', desc: 'We start by understanding how you cook, entertain, and live. Every layout decision flows from your daily life, not from a template.' },
                { title: 'Custom cabinetry', desc: 'Semi-custom and fully custom cabinet options in any wood species, finish, and configuration. Soft-close hardware standard.' },
                { title: 'Countertops and backsplash', desc: 'Quartz, granite, marble, quartzite — we source premium stone and install to exacting standards.' },
                { title: 'Appliance integration', desc: 'Sub-Zero, Wolf, Thermador, Miele, and other professional-grade brands. We coordinate with suppliers and handle all electrical, gas, and plumbing connections in-house.' },
                { title: 'Lighting and electrical', desc: 'Under-cabinet lighting, pendant fixtures, recessed lighting, and dedicated circuits for appliances. All performed under our own electrical license (ROC #350715).' },
                { title: 'Plumbing fixtures', desc: 'Sink installation, pot-filler faucets, garbage disposals, and water line reconfiguration. All under our plumbing license (ROC #350716).' },
                { title: 'Flooring, paint, and finishes', desc: 'Tile, hardwood, luxury vinyl — selected to complement your cabinetry and countertop choices.' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-light rounded-xl border border-border-default">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">How Long Does a Kitchen Remodel Take in Scottsdale?</h2>
            <p className="text-text-secondary leading-relaxed mb-12">
              A typical Saddlewood kitchen remodel takes 8 to 12 weeks from demolition to completion, depending on scope. Custom cabinetry orders may add 4 to 6 weeks of lead time before construction begins. We provide a detailed timeline during your complimentary design consultation so you know exactly what to expect.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Do I Need a Permit for a Kitchen Remodel in Scottsdale?</h2>
            <p className="text-text-secondary leading-relaxed mb-12">
              If your kitchen remodel involves any structural changes, electrical work, plumbing modifications, or HVAC adjustments, yes — the City of Scottsdale requires permits. Saddlewood handles all permitting on your behalf. We submit plans, schedule inspections, and ensure your project is fully permitted and code-compliant.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-16 bg-obsidian">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">Explore Our Other Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/bathroom-remodeling-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Bathroom Remodeling →</h3>
                <p className="text-text-secondary text-sm mt-1">Spa-inspired bathroom renovations</p>
              </Link>
              <Link href="/whole-home-remodel-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Whole-Home Remodeling →</h3>
                <p className="text-text-secondary text-sm mt-1">Complete home transformations</p>
              </Link>
              <Link href="/custom-home-builder-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Custom New Construction →</h3>
                <p className="text-text-secondary text-sm mt-1">Ground-up luxury homes</p>
              </Link>
              <Link href="/mccormick-ranch" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
                <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">McCormick Ranch →</h3>
                <p className="text-text-secondary text-sm mt-1">Serving McCormick Ranch since 2007</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Schedule Your Free Kitchen Remodel Consultation</h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              We&apos;ll visit your home in McCormick Ranch, Gainey Ranch, or anywhere in Scottsdale. We&apos;ll discuss your vision, assess your current kitchen, and provide a preliminary scope and estimate — all at no cost or obligation.
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
