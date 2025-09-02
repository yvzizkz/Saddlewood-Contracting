import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery - Saddlewood Contracting | Phoenix AZ',
  description: 'View our completed HVAC, electrical, plumbing, and remodeling projects throughout Phoenix and the Valley. See the quality craftsmanship that sets us apart.',
  keywords: 'project gallery, completed projects, HVAC projects, electrical work, plumbing projects, remodeling gallery, Phoenix contractor',
};

export default function GalleryPage() {
  const projectCategories = [
    {
      title: "HVAC Projects",
      description: "Professional heating and cooling installations",
      projects: [
        {
          title: "Whole Home HVAC System",
          location: "Scottsdale, AZ",
          description: "Complete HVAC replacement with high-efficiency units and new ductwork throughout 3,200 sq ft home."
        },
        {
          title: "Commercial AC Installation", 
          location: "Phoenix, AZ",
          description: "Multi-zone commercial HVAC system for 10,000 sq ft office building with smart controls."
        },
        {
          title: "Ductwork Redesign",
          location: "Tempe, AZ", 
          description: "Complete ductwork redesign and installation improving airflow efficiency by 40%."
        }
      ]
    },
    {
      title: "Electrical Projects",
      description: "Safe and reliable electrical installations",
      projects: [
        {
          title: "Electrical Panel Upgrade",
          location: "Mesa, AZ",
          description: "200-amp panel upgrade with new circuits for modern home electrical needs."
        },
        {
          title: "Whole Home Rewiring",
          location: "Paradise Valley, AZ",
          description: "Complete electrical rewiring of 1960s home bringing it up to current code standards."
        },
        {
          title: "Outdoor Lighting Design",
          location: "Fountain Hills, AZ",
          description: "Custom landscape and security lighting installation with smart controls."
        }
      ]
    },
    {
      title: "Plumbing Projects", 
      description: "Quality plumbing solutions that last",
      projects: [
        {
          title: "Bathroom Renovation Plumbing",
          location: "Chandler, AZ",
          description: "Complete master bathroom plumbing renovation with luxury fixtures and heated floors."
        },
        {
          title: "Water Heater Replacement",
          location: "Gilbert, AZ",
          description: "Tankless water heater installation providing unlimited hot water for large family home."
        },
        {
          title: "Kitchen Plumbing Upgrade",
          location: "Glendale, AZ",
          description: "Kitchen island plumbing installation with garbage disposal and water filtration system."
        }
      ]
    },
    {
      title: "Remodeling Projects",
      description: "Transform your space with expert craftsmanship",
      projects: [
        {
          title: "Kitchen Renovation",
          location: "Phoenix, AZ", 
          description: "Complete kitchen remodel with custom cabinets, granite countertops, and stainless appliances."
        },
        {
          title: "Master Bathroom Suite",
          location: "Scottsdale, AZ",
          description: "Luxury master bathroom with walk-in shower, soaking tub, and double vanity."
        },
        {
          title: "Basement Finishing",
          location: "Cave Creek, AZ",
          description: "1,200 sq ft basement conversion into entertainment room with full bathroom and wet bar."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              See the quality craftsmanship that sets Saddlewood apart
            </p>
            <p className="text-lg text-gray-400">
              18+ years of successful projects throughout the Phoenix Valley
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <span className="text-4xl mb-2 block">📸</span>
                      <p className="text-sm">Project Photo</p>
                      <p className="text-xs">{project.title}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      📍 {project.location}
                    </p>
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

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Saddlewood completely transformed our kitchen. The attention to detail and quality of work exceeded our expectations. Highly recommend!"
              </blockquote>
              <cite className="text-gray-600 font-medium">
                - Sarah M., Phoenix
              </cite>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Professional service from start to finish. Our new HVAC system works perfectly and the installation was clean and efficient."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                - Mike R., Scottsdale
              </cite>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "The electrical work was done safely and up to code. Great communication throughout the project. Will definitely use them again."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                - Jennifer L., Tempe
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results on every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Free in-home consultation to understand your needs and provide detailed estimate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed project planning with timeline, materials, and permits handled
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional installation with daily progress updates and clean worksite
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Completion</h3>
              <p className="text-gray-600 text-sm">
                Final walkthrough, cleanup, and warranty information provided
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link 
              href="tel:480-999-6100" 
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (480) 999-6100
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}