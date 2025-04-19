import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ContactFormSkeleton from '@/components/ContactFormSkeleton';

export default function ContactLoading() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12">
        <div className="container-custom">
          <Skeleton className="h-12 w-48 bg-white bg-opacity-20 mb-4" />
          <Skeleton className="h-6 w-80 bg-white bg-opacity-20" />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="h-10 w-48 mb-6" />
            
            <div className="space-y-6">
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <ContactFormSkeleton />
        </div>
      </div>
    </div>
  );
}