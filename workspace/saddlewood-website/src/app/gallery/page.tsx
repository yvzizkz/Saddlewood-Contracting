import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio - Saddlewood Contracting | Phoenix AZ',
  description: 'Explore our portfolio of premium HVAC, electrical, plumbing, and remodeling projects throughout Phoenix and the Valley. See the craftsmanship that sets us apart.',
  keywords: 'project portfolio, luxury home projects, HVAC installation, electrical work, plumbing projects, remodeling gallery, Phoenix, Paradise Valley',
};

export default function GalleryPage() {
  const projectCategories = [
    {
      title: "Climate Systems",
      subtitle: "Premium HVAC Installations",
      projects: [
        {
          title: "Estate Climate Control",
          location: "Paradise Valley",
          scope: "$85,000 Investment",
          description: "Complete climate system redesign for 8,500 sq ft estate with 6-zone control and air purification throughout."
        },
        {
          title: "Smart Home Integration",
          location: "Scottsdale",
          scope: "$42,000 Investment",
          description: "High-efficiency HVAC with whole-home automation, individual room control, and energy monitoring."
        },
        {
          title: "Historic Home Retrofit",
          location: "Arcadia",
          scope: "$65,000 Investment",
          description: "Sensitive HVAC installation in 1950s mid-century home preserving architectural integrity."
        }
      ]
    },
    {
      title: "Electrical Excellence",
      subtitle: "Power & Lighting Design",
      projects: [
        {
          title: "Complete Smart Home",
          location: "Fountain Hills",
          scope: "$125,000 Investment",
          description: "Full electrical overhaul with Lutron lighting, Control4 integration, and dedicated theater wiring."
        },
        {
          title: "Architectural Lighting",
          location: "Paradise Valley",
          scope: "$38,000 Investment",
          description: "Custom landscape and interior lighting design showcasing art collection and outdoor living spaces."
        },
        {
          title: "EV Ready Estate",
          location: "Scottsdale",
          scope: "$28,000 Investment",
          description: "Panel upgrade with dual Tesla chargers, generator backup, and solar preparation."
        }
      ]
    },
    {
      title: "Water Systems",
      subtitle: "Refined Plumbing Solutions",
      projects: [
        {
          title: "Spa Master Suite",
          location: "Paradise Valley",
          scope: "$95,000 Investment",
          description: "Complete master bathroom transformation with steam shower, soaking tub, and heated floors."
        },
        {
          title: "Chef's Kitchen",
          location: "Scottsdale",
          scope: "$48,000 Investment",
          description: "Professional-grade kitchen with pot filler, instant hot, and commercial-style fixtures."
        },
        {
          title: "Outdoor Living",
          location: "Cave Creek",
          scope: "$62,000 Investment",
          description: "Full outdoor kitchen with pool plumbing, fire features, and misting system."
        }
      ]
    },
    {
      title: "Custom Renovations",
      subtitle: "Transformative Design",
      projects: [
        {
          title: "Complete Home Transformation",
          location: "Paradise Valley",
          scope: "$450,000 Investment",
          description: "Whole-home renovation including kitchen, three bathrooms, and open-concept great room."
        },
        {
          title: "Gourmet Kitchen",
          location: "Arcadia",
          scope: "$185,000 Investment",
          description: "Full kitchen remodel with custom cabinetry, quartzite counters, and integrated appliances."
        },
        {
          title: "Wine Cellar & Bar",
          location: "Scottsdale",
          scope: "$78,000 Investment",
          description: "Custom temperature-controlled wine room with tasting bar and entertainment space."
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Saddlewood transformed our 1960s home into a modern sanctuary while respecting its architectural heritage. Their attention to detail is unmatched.",
      author: "Michael & Sarah T.",
      location: "Paradise Valley",
      project: "Whole-Home Renovation"
    },
    {
      quote: "From the initial consultation to final walkthrough, the experience was exceptional. They truly understand what luxury homeowners expect.",
      author: "Dr. Jennifer L.",
      location: "Scottsdale",
      project: "Smart Home Integration"
    },
    {
      quote: "The team's professionalism and craftsmanship exceeded our expectations. Our outdoor living space is now the envy of the neighborhood.",
      author: "Robert & Maria K.",
      location: "Fountain Hills",
      project: "Outdoor Kitchen & Pool"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Our Work</span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mt-4 mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated collection of our finest work, showcasing the craftsmanship and attention to detail that defines Saddlewood
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">{category.subtitle}</span>
              <h2 className="font-serif text-3xl font-semibold mt-2 text-charcoal">
                {category.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100
                                                 hover:shadow-premium hover:border-gold/20 transition-all duration-500 group">
                  <div className="h-56 bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white z-10">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center 
                                    group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-400">Project Photo</p>
                    </div>
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold text-sm font-medium">{project.location}</span>
                      <span className="text-gray-500 text-sm">{project.scope}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Client Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-charcoal">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <cite className="not-italic">
                    <p className="font-semibold text-charcoal">{testimonial.author}</p>
                    <p className="text-gold text-sm">{testimonial.location}</p>
                    <p className="text-gray-500 text-sm">{testimonial.project}</p>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">How We Work</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 text-charcoal">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Private consultation to understand your vision, lifestyle, and objectives" },
              { step: "02", title: "Design", desc: "Detailed planning with timelines, materials, and transparent pricing" },
              { step: "03", title: "Execute", desc: "Expert implementation with daily updates and meticulous craftsmanship" },
              { step: "04", title: "Deliver", desc: "Final walkthrough, documentation, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold font-serif text-2xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Your Project Awaits</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-white">
            Ready to Create Something Exceptional?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your vision into reality. Schedule a private consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-lg font-semibold 
                       hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:4809996100" 
              className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              (480) 999-6100
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
