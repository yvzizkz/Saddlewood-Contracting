import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ServicesLoading() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <Skeleton className="h-12 w-96 bg-white bg-opacity-20 mb-4" />
          <Skeleton className="h-6 w-80 bg-white bg-opacity-20" />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="h-10 w-72 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            
            <Skeleton className="h-12 w-48 rounded-md" />
          </div>
          
          <div className="card">
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex items-start">
                  <Skeleton className="h-4 w-4 mr-2 mt-1 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl ring-2 ring-gray-300 p-8 bg-gray-50">
          <Skeleton className="h-8 w-64 mb-4 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <Skeleton className="w-12 h-12 rounded-full mb-3 mx-auto" />
                <Skeleton className="h-6 w-48 mb-2 mx-auto" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}