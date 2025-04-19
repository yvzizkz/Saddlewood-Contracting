"use client";

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactFormSkeleton() {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-8">
      <Skeleton className="h-8 w-40 mb-6" />
      
      <div className="space-y-4">
        <div className="mb-2">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="mb-2">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="mb-2">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="mb-2">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="mb-4">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-32 w-full" />
        </div>
        
        <Skeleton className="h-4 w-full mb-4" />
        
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
    </div>
  );
}