import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function PrivacyPolicyLoading() {
  return (
    <div>
      <div className="bg-primary text-secondary py-12 border-b-2 border-secondary">
        <div className="container-custom">
          <Skeleton className="h-12 w-48 bg-white bg-opacity-20 mb-4" />
          <Skeleton className="h-6 w-64 bg-white bg-opacity-20" />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="prose max-w-none">
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-8" />
          
          <Skeleton className="h-10 w-64 mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-3" />
          
          <div className="ml-6 mb-8">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-4/5 mb-2" />
          </div>
          
          <Skeleton className="h-10 w-64 mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-3" />
          
          <div className="ml-6 mb-8">
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-4/5 mb-2" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
          </div>
          
          <Skeleton className="h-10 w-64 mb-6" />
          <Skeleton className="h-4 w-full mb-8" />
          
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-5 w-64 mb-1" />
          <Skeleton className="h-5 w-48 mb-1" />
          <Skeleton className="h-5 w-56 mb-1" />
          <Skeleton className="h-5 w-72 mb-8" />
          
          <Skeleton className="h-4 w-32 mt-8 mb-8" />
        </div>
      </div>
    </div>
  );
}