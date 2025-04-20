"use client";

import React from 'react';
import { useAccessibility } from '@/lib/accessibility-context';

interface AccessibilityToggleProps {
  className?: string;
}

export default function AccessibilityToggle({ className = '' }: AccessibilityToggleProps) {
  const { toggleMode, isHighContrast } = useAccessibility();

  return (
    <button
      aria-label={isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      title={isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      onClick={toggleMode}
      className={`accessibility-toggle ${className} ${
        isHighContrast 
          ? 'bg-white text-black' 
          : 'bg-gray-800 text-white'
      } hover:opacity-90 transition-all`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  );
}

// Floating version that stays at bottom-right of screen
export function FloatingAccessibilityToggle() {
  return <AccessibilityToggle className="fixed bottom-5 right-5 z-50 shadow-lg" />;
}