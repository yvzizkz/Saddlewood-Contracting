import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function LicenseInfoLoading() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-3/4 mb-6" />
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-3/4 mb-6" />
            
            <div className="space-y-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <Skeleton className="h-7 w-1/3 mb-4" />
                  <div className="flex items-start">
                    <Skeleton className="h-16 w-16 rounded mr-4" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <Skeleton className="h-7 w-1/4 mb-3" />
            <Skeleton className="h-5 w-5/6 mb-4" />
            <Skeleton className="h-10 w-48" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6">
            <div className="mb-4 md:mb-0 md:mr-6 w-full md:w-2/3">
              <Skeleton className="h-7 w-1/2 mb-2" />
              <Skeleton className="h-5 w-full" />
            </div>
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </main>
  );
}