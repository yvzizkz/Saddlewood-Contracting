import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Saddlewood Contracting | Phoenix AZ',
  description: 'Family-owned since 2007. Learn about Saddlewood Contracting\'s story, our process, and why Arizona\'s most discerning homeowners trust us with their homes.',
  keywords: 'about Saddlewood Contracting, Phoenix contractor, family-owned contractor, Arizona remodeling company',
};

export default function AboutPage() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We begin with a private, no-obligation consultation at your home. We listen to your vision, assess your space, and discuss possibilities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Design",
      description: "Our team develops a detailed plan tailored to your needs. We present options, refine details, and ensure every element aligns with your lifestyle.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Build",
      description: "With meticulous attention to detail, our skilled craftsmen bring your vision to life. Regular updates keep you informed every step of the way.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
    },
    {
      step: "04",
      title: "Reveal",
      description: "The moment you've been waiting for. We walk through every detail together, ensuring your complete satisfaction before we consider the project complete.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We serve Paradise Valley, Scottsdale, Phoenix, Fountain Hills, Arcadia, and select communities throughout the Valley. If you're unsure whether we service your area, please reach out.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope. A bathroom renovation might take 3-4 weeks, while a whole-home remodel could be 3-6 months. During your consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "Do you provide estimates?",
      answer: "Yes. After our initial consultation and understanding your vision, we provide a comprehensive proposal outlining scope, timeline, and investment. There's no obligation.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We hold four Arizona ROC licenses (KB-2 #305762, CR-39 #350714, CR-11 #350715, CR-37 #350716) covering general contracting, HVAC, electrical, and plumbing. We're fully bonded and insured.",
    },
    {
      question: "Can I see examples of your work?",
      answer: "Of course! Visit our gallery page or follow us on Instagram (@saddlewood_contracting) and Facebook (SaddlewoodAZ) for our latest projects and behind-the-scenes content.",
    },
    {
      question: "What sets Saddlewood apart?",
      answer: "We're a family-owned company that treats every home like our own. With 18+ years of experience, four trade licenses under one roof, and a commitment to communication, we deliver a seamless experience from start to finish.",
    },
  ];

  return (
    <div className="pb-20 md:pb-0">
      <div className="relative bg-gradient-desert overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-accent uppercase tracking-[0.25em] text-sm font-medium bg-accent/10 px-5 py-2.5 rounded-full border border-accent/20 mb-6">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
              Building <span className="text-accent">Trust</span> Since 2007
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              A family-owned company dedicated to crafting exceptional living spaces 
              for Arizona's most discerning homeowners.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Who We Are</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-primary">
                More Than Contractors. We're Craftsmen.
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Founded in 2007, Saddlewood Contracting began with a simple belief: every homeowner 
                  deserves a contractor who treats their home with the same care and attention they would 
                  their own.
                </p>
                <p>
                  What started as a small family operation has grown into one of the Valley's most 
                  trusted names in premium home services. But one thing hasn't changed—our commitment 
                  to doing things right, every single time.
                </p>
                <p>
                  Today, we hold four Arizona ROC licenses, allowing us to handle remodeling, HVAC, 
                  electrical, and plumbing all under one roof. This means better coordination, faster 
                  timelines, and a single point of contact for your entire project.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-sandstone flex flex-wrap gap-8">
                <div className="text-center">
                  <p className="text-3xl font-serif text-accent">18+</p>
                  <p className="text-sm text-charcoal-light mt-1">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-sandstone"></div>
                <div className="text-center">
                  <p className="text-3xl font-serif text-accent">4</p>
                  <p className="text-sm text-charcoal-light mt-1">Trade Licenses</p>
                </div>
                <div className="h-12 w-px bg-sandstone"></div>
                <div className="text-center">
                  <p className="text-3xl font-serif text-primary">Family</p>
                  <p className="text-sm text-charcoal-light mt-1">Owned & Operated</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-desert rounded-2xl overflow-hidden relative border border-sandstone-light shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-accent/30 flex items-center justify-center bg-white shadow-soft">
                      <Image
                        src="/images/logo.png"
                        alt="Saddlewood Contracting"
                        width={100}
                        height={100}
                        className="opacity-60"
                      />
                    </div>
                    <p className="text-charcoal-light text-sm">Team photo coming soon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow-warm">
                Since 2007
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-desert">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">How We Work</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-primary">Our Process</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto">
              From first conversation to final reveal, we guide you through every step with transparency and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow h-full border border-sandstone-light/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-desert flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-serif text-accent/30 font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Meet the Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-white">The People Behind the Work</h2>
            <p className="text-sandstone-dark mt-4 max-w-2xl mx-auto">
              Our skilled team brings decades of combined experience to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Leadership", desc: "Guiding vision and client relationships" },
              { role: "Project Management", desc: "Coordinating every detail seamlessly" },
              { role: "Master Craftsmen", desc: "Bringing expertise to every trade" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-charcoal border-2 border-accent/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.role}</h3>
                <p className="text-sandstone-dark text-sm">{member.desc}</p>
                <p className="text-accent/50 text-xs mt-3 italic">Photo coming soon</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sandstone-dark mb-6">Follow us to see our team in action</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/saddlewood_contracting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent/20 text-accent rounded-xl hover:bg-accent/30 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://tiktok.com/@saddlewoodcontracting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Got Questions?</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-primary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-sandstone rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer bg-desert hover:bg-sandstone-light/50 transition-colors">
                    <h3 className="font-semibold text-primary pr-4">{faq.question}</h3>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="p-6 bg-white">
                    <p className="text-charcoal-light leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Ready to Start?</span>
          <h2 className="font-serif text-3xl font-semibold mt-3 mb-6 text-white">
            Let's Discuss Your Project
          </h2>
          <p className="text-sandstone-dark mb-8 max-w-xl mx-auto">
            Every great project begins with a conversation. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-accent text-white px-8 py-4 rounded-xl font-medium shadow-warm hover:shadow-warm-lg hover:bg-clay transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:4809996100" 
              className="border border-accent/50 text-accent hover:bg-accent/10 px-8 py-4 rounded-xl font-medium transition-all duration-300"
            >
              (480) 999-6100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
