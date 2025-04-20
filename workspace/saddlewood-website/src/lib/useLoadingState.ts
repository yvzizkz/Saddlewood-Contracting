"use client";

import { useState, useEffect } from 'react';

// This hook manages whether to show the loading animation
// It shows the loading animation on the first visit only
export function useLoadingState() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load of the site
    const hasVisitedBefore = localStorage.getItem('saddlewood_visited');
    
    if (!hasVisitedBefore) {
      // This is the first visit, so show loading animation
      // Set a flag in localStorage to remember this visit
      localStorage.setItem('saddlewood_visited', 'true');
      setIsFirstLoad(true);
    } else {
      // The user has visited before, no need for loading animation
      setIsFirstLoad(false);
    }

    // Auto-clear the first load flag after a session
    return () => {
      // An expired session will see the loading animation again
      if (Math.random() < 0.1) { // 10% chance to reset on each visit
        localStorage.removeItem('saddlewood_visited');
      }
    };
  }, []);

  return isFirstLoad;
}