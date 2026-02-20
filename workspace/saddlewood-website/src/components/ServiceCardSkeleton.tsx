"use client";

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceCardSkeleton() {
  return (
    <div className="border border-border-default rounded-2xl p-6 h-full transition-all hover:shadow-lg hover:border-gold bg-surface">
      <div className="flex items-center space-x-4 mb-6">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-8 w-40" />
      </div>
      
      <Skeleton className="h-4 w-full mb-3" />
      <Skeleton className="h-4 w-5/6 mb-3" />
      <Skeleton className="h-4 w-4/6 mb-6" />
      
      <Skeleton className="h-10 w-40" />
    </div>
  );
}