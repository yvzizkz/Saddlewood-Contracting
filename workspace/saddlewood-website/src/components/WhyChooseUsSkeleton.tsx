"use client";

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function WhyChooseUsSkeleton() {
  return (
    <section className="py-16 bg-obsidian text-text-primary">
      <div className="container-custom">
        <Skeleton className="h-10 w-80 mx-auto mb-8 bg-surface-light" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="text-center p-6">
              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light" />
              <Skeleton className="h-6 w-40 mx-auto mb-2 bg-surface-light" />
              <Skeleton className="h-4 w-full mb-1 bg-surface-light" />
              <Skeleton className="h-4 w-5/6 mx-auto bg-surface-light" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}