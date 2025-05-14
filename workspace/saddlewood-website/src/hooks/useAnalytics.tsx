"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef<string | null>(null);
  
  useEffect(() => {
    // Combine pathname and search params for full URL tracking
    const url = searchParams?.size 
      ? `${pathname}?${searchParams.toString()}`
      : pathname;
      
    if (url !== prevPathRef.current) {
      trackPageView(url);
      prevPathRef.current = url;
    }
  }, [pathname, searchParams]);
};