import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Home Builder Scottsdale AZ | Luxury New Construction | Saddlewood Contracting',
  description: 'Custom luxury home construction in Scottsdale. Ground-up builds for McCormick Ranch, Gainey Ranch & Paradise Valley. Licensed general contractor since 2007. Call (480) 999-6100.',
  alternates: { canonical: '/custom-home-builder-scottsdale' },
};

export default function CustomHomeBuilderPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero */}
      <div className="bg-gradient-hero py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise-texture pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/0"></div>
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Custom New Construction</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
            Custom Home Builder in <span className="text-gold">Scottsdale, AZ</span>
          </h1>
          <p className="text-lg text-silver-light max-w-2xl mb-8">
            Ground-up luxury homes built to your vision, your specifications, your standards. Serving McCormick Ranch, Gainey Ranch, Paradise Valley, and North Scottsdale.
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
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Ground-Up Luxury Homes Built to Your Vision</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Building a custom home is the most personal construction project you&apos;ll ever undertake. Every wall, every window, every finish reflects your taste, your lifestyle, and your standards. Saddlewood Contracting brings nearly two decades of Scottsdale building experience to custom new construction — managing every phase from site preparation through final walkthrough.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12">
            We build in <Link href="/mccormick-ranch" className="text-gold hover:text-gold-light">McCormick Ranch</Link>, <Link href="/gainey-ranch" className="text-gold hover:text-gold-light">Gainey Ranch</Link>, Paradise Valley, and across North Scottsdale. We understand the architectural review requirements, the HOA standards, and the City of Scottsdale permitting process that define building in these communities.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">Our Custom Build Process</h2>
          <div className="space-y-8 mb-16">
            {[
              { title: 'Architecture coordination', desc: 'We work closely with your architect (or connect you with one) to ensure the design is buildable, cost-effective, and aligned with your budget.' },
              { title: 'Permitting and approvals', desc: 'We handle all submissions to the City of Scottsdale, HOA architectural review committees, and any other governing bodies.' },
              { title: 'Site work and foundation', desc: 'Grading, utilities, foundation engineering, and concrete work.' },
              { title: 'Structural framing through finish', desc: 'Every phase of construction from framing and roofing through drywall, paint, flooring, cabinetry, fixtures, and landscaping.' },
              { title: 'All mechanical systems', desc: 'HVAC, electrical, and plumbing designed and installed by our own licensed teams. No subcontractor coordination delays.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-surface-light rounded-xl border border-border-default">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
            <Link href="/bathroom-remodeling-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
              <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Bathroom Remodeling →</h3>
              <p className="text-text-secondary text-sm mt-1">Spa-inspired bath renovations</p>
            </Link>
            <Link href="/whole-home-remodel-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
              <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Whole-Home Remodeling →</h3>
              <p className="text-text-secondary text-sm mt-1">Complete home transformations</p>
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
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Schedule a Consultation</h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you&apos;ve already purchased a lot, you&apos;re considering a tear-down rebuild, or you&apos;re in the early planning stages, we&apos;re happy to meet and discuss your project.
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
  );
}
