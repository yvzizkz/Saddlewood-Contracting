import React from 'react';
import Link from 'next/link';
import HeroSkeleton from '@/components/HeroSkeleton';
import ServiceCardSkeleton from '@/components/ServiceCardSkeleton';
import WhyChooseUsSkeleton from '@/components/WhyChooseUsSkeleton';
import ContactFormSkeleton from '@/components/ContactFormSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

// This causes Next.js to simulate loading for 3 seconds
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function UIDemo() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">UI Components Demo</h1>
          <p className="text-xl">Showcase of loading skeletons and UI components</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Hero Section Skeleton</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <HeroSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Service Card Skeleton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us Skeleton</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <WhyChooseUsSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact Form Skeleton</h2>
          <div className="max-w-lg mx-auto">
            <ContactFormSkeleton />
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