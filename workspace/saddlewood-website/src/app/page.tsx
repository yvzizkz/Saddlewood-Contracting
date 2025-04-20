import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'HVAC Services',
      description: 'Installations, repairs, and maintenance for all your heating and cooling needs.',
      link: '/services/hvac',
      icon: 'ac_unit',
    },
    {
      title: 'Electrical',
      description: 'Licensed electrical contracting for residential and commercial properties.',
      link: '/services/electrical',
      icon: 'bolt',
    },
    {
      title: 'Plumbing',
      description: 'Complete plumbing solutions from repairs to full installations.',
      link: '/services/plumbing',
      icon: 'water_drop',
    },
    {
      title: 'Remodeling',
      description: 'Turn your vision into reality with our professional remodeling services.',
      link: '/services/remodeling',
      icon: 'home',
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-16 container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-primary text-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Saddlewood Contracting?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary text-primary flex items-center justify-center">
                <span className="text-2xl">18+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p>Serving Arizona homeowners and businesses since 2005.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary text-primary flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p>Multiple ROC licenses covering all aspects of contracting.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary text-primary flex items-center justify-center">
                <span className="text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-2">5-Star Service</h3>
              <p>Committed to customer satisfaction on every project.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Areas</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Phoenix</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Paradise Valley</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Scottsdale</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Tempe</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Mesa</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Chandler</h3>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md text-center hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold">Gilbert</h3>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mb-8">
            We also provide services to many surrounding areas throughout the Valley. Contact us to check availability in your area.
          </p>
        </div>
      </section>
      
      <section className="py-16 container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to Get Started?</h2>
        <div className="text-center">
          <a 
            href="/contact" 
            className="btn-primary inline-block relative overflow-hidden group transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Book an Estimate</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
        </div>
      </section>
    </div>
  );
}
