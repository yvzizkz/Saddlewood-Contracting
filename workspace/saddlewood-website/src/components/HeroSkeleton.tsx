"use client";

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="bg-obsidian text-text-primary relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0">
            <Skeleton className="h-16 w-4/5 mb-6" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-5/6 mb-3" />
            <Skeleton className="h-6 w-4/6 mb-8" />

            <Skeleton className="h-12 w-48 rounded-full" />
          </div>

          <div className="md:w-5/12">
            <div className="bg-surface bg-opacity-50 p-6 rounded-2xl border border-border-default">
              <Skeleton className="bg-surface-light h-4 w-48 mb-4" />
              <Skeleton className="bg-surface-light h-4 w-full mb-2" />
              <Skeleton className="bg-surface-light h-4 w-full mb-2" />
              <Skeleton className="bg-surface-light h-4 w-full mb-2" />
              <Skeleton className="bg-surface-light h-4 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}