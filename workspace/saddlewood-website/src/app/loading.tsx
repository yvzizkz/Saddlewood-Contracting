import React from 'react';
import HeroSkeleton from '@/components/HeroSkeleton';
import ServiceCardSkeleton from '@/components/ServiceCardSkeleton';
import WhyChooseUsSkeleton from '@/components/WhyChooseUsSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomeLoading() {
  return (
    <div>
      <HeroSkeleton />
      
      <section className="py-16 container-custom">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </div>
      </section>
      
      <WhyChooseUsSkeleton />
      
      <section className="py-16 container-custom">
        <Skeleton className="h-10 w-80 mx-auto mb-8" />
        <div className="text-center">
          <Skeleton className="h-12 w-48 mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
}