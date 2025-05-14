"use client";

import { useEffect } from 'react';
import { initGA } from '@/lib/analytics';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: NEXT_PUBLIC_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  // Track page views when routes change
  useAnalytics();
  
  return <>{children}</>;
}