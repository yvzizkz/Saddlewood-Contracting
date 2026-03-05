import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whole Home Remodel Scottsdale | Full Home Renovation Contractor | Saddlewood',
  description: 'Full home remodeling in Scottsdale AZ. Saddlewood Contracting transforms McCormick Ranch & Gainey Ranch homes with whole-house renovations. Licensed since 2007. Free consultation.',
  alternates: { canonical: '/whole-home-remodel-scottsdale' },
};

export default function WholeHomeRemodelPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero */}
      <div className="bg-gradient-hero py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise-texture pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/0"></div>
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Whole-Home Remodeling</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-primary">
            Whole-Home Remodeling in <span className="text-gold">Scottsdale, AZ</span>
          </h1>
          <p className="text-lg text-silver-light max-w-2xl mb-8">
            Complete home transformations for McCormick Ranch, Gainey Ranch, and Scottsdale&apos;s most established communities.
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
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">Complete Home Transformations for McCormick Ranch &amp; Gainey Ranch</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Some homes don&apos;t need a room-by-room approach — they need a complete reimagining. When you love your lot, your neighborhood, and your community but your home no longer fits how you live, a whole-home remodel is the answer.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12">
            Saddlewood Contracting specializes in large-scale residential renovations across Scottsdale&apos;s most established communities. Many of the homes in <Link href="/mccormick-ranch" className="text-gold hover:text-gold-light">McCormick Ranch</Link> and <Link href="/gainey-ranch" className="text-gold hover:text-gold-light">Gainey Ranch</Link> were built between the 1970s and 1990s. They have exceptional bones — solid construction, generous lot sizes, and prime locations. What they need is a contractor who can bring them into the present while honoring what made them special in the first place.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">What a Whole-Home Remodel Includes</h2>
          <div className="space-y-8 mb-16">
            {[
              { title: 'Layout redesign', desc: "Opening walls, reconfiguring floor plans, creating open-concept living spaces, and improving flow between indoor and outdoor areas. Scottsdale's climate begs for indoor-outdoor transitions, and we design for exactly that." },
              { title: 'Kitchen and bathroom renovation', desc: 'Typically the highest-impact rooms in any home. We give them the attention they deserve as part of the broader transformation.' },
              { title: 'Structural modifications', desc: 'Removing load-bearing walls (with proper engineering), raising ceilings, adding square footage through bump-outs or room additions.' },
              { title: 'All mechanical systems', desc: 'HVAC replacement or reconfiguration, electrical panel upgrades, plumbing reconfiguration, and smart home wiring. All performed in-house under our own ROC licenses.' },
              { title: 'Finishes throughout', desc: 'Flooring, paint, trim, hardware, lighting fixtures, window treatments — every surface and detail selected to create a cohesive, intentional home.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-surface-light rounded-xl border border-border-default">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">How We Manage Large-Scale Projects</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            A whole-home remodel is a significant undertaking. Saddlewood manages these projects with a dedicated project manager, weekly client updates, and a detailed construction schedule. We communicate proactively — you&apos;ll never have to chase us for information about your own project.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12">
            Timeline: 3 to 6 months depending on scope. We provide a detailed project schedule during your consultation.
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
            <Link href="/bathroom-remodeling-scottsdale" className="p-5 bg-surface rounded-xl border border-border-default hover:border-gold/30 transition-colors group">
              <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">Bathroom Remodeling →</h3>
              <p className="text-text-secondary text-sm mt-1">Spa-inspired bath renovations</p>
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
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">Start Planning Your Whole-Home Remodel</h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            The best time to start planning is now. Call us to schedule your complimentary in-home design consultation.
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
