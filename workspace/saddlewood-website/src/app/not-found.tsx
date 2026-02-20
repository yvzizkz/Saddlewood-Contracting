import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-obsidian via-obsidian to-surface flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={800}
            height={800}
            className="opacity-10"
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-serif font-bold text-gold/30">404</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h1>

        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4
                      bg-gradient-to-r from-gold to-gold-dark text-text-inverse font-semibold
                      rounded-lg hover:shadow-gold-glow transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4
                      border border-gold/50 text-gold font-medium
                      rounded-lg hover:bg-gold/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contact Us
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border-default">
          <p className="text-text-muted text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/remodeling" className="text-gold/70 hover:text-gold text-sm transition-colors">
              Remodeling
            </Link>
            <span className="text-border-default">•</span>
            <Link href="/services/hvac" className="text-gold/70 hover:text-gold text-sm transition-colors">
              HVAC
            </Link>
            <span className="text-border-default">•</span>
            <Link href="/services/electrical" className="text-gold/70 hover:text-gold text-sm transition-colors">
              Electrical
            </Link>
            <span className="text-border-default">•</span>
            <Link href="/services/plumbing" className="text-gold/70 hover:text-gold text-sm transition-colors">
              Plumbing
            </Link>
            <span className="text-border-default">•</span>
            <Link href="/gallery" className="text-gold/70 hover:text-gold text-sm transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
