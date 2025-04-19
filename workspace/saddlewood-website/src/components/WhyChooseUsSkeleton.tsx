"use client";

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function WhyChooseUsSkeleton() {
  return (
    <section className="py-16 bg-primary text-secondary">
      <div className="container-custom">
        <Skeleton className="h-10 w-80 mx-auto mb-8 bg-white bg-opacity-20" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="text-center p-6">
              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full bg-white bg-opacity-20" />
              <Skeleton className="h-6 w-40 mx-auto mb-2 bg-white bg-opacity-20" />
              <Skeleton className="h-4 w-full mb-1 bg-white bg-opacity-20" />
              <Skeleton className="h-4 w-5/6 mx-auto bg-white bg-opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}