import React from 'react';
import Link from 'next/link';
import HeroSkeleton from '@/components/HeroSkeleton';
import ServiceCardSkeleton from '@/components/ServiceCardSkeleton';
import WhyChooseUsSkeleton from '@/components/WhyChooseUsSkeleton';
import ContactFormSkeleton from '@/components/ContactFormSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import RefreshButton from '@/components/RefreshButton';

// This causes Next.js to simulate loading for 3 seconds
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Force a 3-second delay to allow viewing the loading state
export async function generateMetadata() {
  // Artificial delay to demonstrate loading state
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    title: 'UI Demo - Skeleton Loading',
  };
}

export default function UIDemo() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">UI Components Demo</h1>
          <p className="text-xl mb-4">Showcase of loading skeletons and UI components</p>
          <div className="bg-white bg-opacity-10 p-4 rounded-md">
            <p className="font-medium text-lg mb-2">👋 Welcome to the skeleton demo!</p>
            <p>Reload this page to see the skeleton loading state in action (for about 3 seconds).</p>
            <p>This demo has a built-in 3-second delay to showcase the loading experience.</p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="mb-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h2 className="text-2xl font-bold mb-2">Live Demo Instructions</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>To see the loading skeletons in action, refresh this page</li>
            <li>The page has a 3-second artificial delay to demonstrate loading effects</li>
            <li>Notice how the skeletons match the layout of the actual content</li>
            <li>The pulsing animation provides visual feedback that content is loading</li>
          </ul>
          <div className="mt-4">
            <RefreshButton />
          </div>
        </div>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skeleton Comparison: Service Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">1</span>
                Loading State (Skeleton)
              </h3>
              <ServiceCardSkeleton />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">2</span>
                Loaded Content
              </h3>
              <div className="border border-gray-200 rounded-2xl p-6 h-full transition-all hover:shadow-lg hover:border-primary">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="text-xl">H</span>
                  </div>
                  <h3 className="text-xl font-bold">HVAC Services</h3>
                </div>
                
                <p className="mb-6">Installations, repairs, and maintenance for all your heating and cooling needs. Professional service by licensed technicians.</p>
                
                <Link href="/services/hvac" className="text-primary hover:underline font-medium inline-flex items-center">
                  View Details
                  <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Service Card Grid Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact Form Skeleton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">1</span>
                Loading State
              </h3>
              <ContactFormSkeleton />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">2</span>
                Content When Loaded
              </h3>
              <div className="shadow-lg rounded-2xl bg-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
                <form className="space-y-4">
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    ></textarea>
                  </div>
                  
                  <div className="mb-4 text-xs text-gray-600">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                  </div>
                  
                  <button 
                    type="button" 
                    className="rounded-full px-6 py-3 font-medium w-full bg-primary text-white"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Basic Skeleton Elements</h2>
          <div className="space-y-4 max-w-lg">
            <div>
              <p className="text-sm font-medium mb-2">Text Line</p>
              <Skeleton className="h-4 w-full" />
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Heading</p>
              <Skeleton className="h-8 w-3/4" />
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Avatar/Circle</p>
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Button</p>
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Card</p>
              <div className="border border-gray-300 rounded-lg p-4">
                <Skeleton className="h-8 w-1/2 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-10 w-1/3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}