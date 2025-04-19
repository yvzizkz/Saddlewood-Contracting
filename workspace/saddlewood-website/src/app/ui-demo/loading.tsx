import React from 'react';
import HeroSkeleton from '@/components/HeroSkeleton';
import ServiceCardSkeleton from '@/components/ServiceCardSkeleton';
import WhyChooseUsSkeleton from '@/components/WhyChooseUsSkeleton';
import ContactFormSkeleton from '@/components/ContactFormSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function UILoadingDemo() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">UI Components - Loading State</h1>
          <p className="text-xl mb-2">This is the actual loading state powered by Next.js 14 Loading UI</p>
          <p className="text-sm bg-white bg-opacity-10 p-3 rounded-md inline-block">
            The content is loading... These skeleton components are displayed while waiting.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <section className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <HeroSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <WhyChooseUsSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="max-w-lg mx-auto">
            <ContactFormSkeleton />
          </div>
        </section>
        
        <section className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="space-y-4 max-w-lg">
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-8 w-3/4" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
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