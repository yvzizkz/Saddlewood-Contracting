"use client";

import { useState, useEffect } from 'react';

// This hook manages whether to show the loading animation and welcome screen
// It shows these animations on the first visit only, with separate flags
export function useLoadingState() {
  // Always set to true initially to show animation by default
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load of the site
    const hasVisitedBefore = localStorage.getItem('saddlewood_visited');
    const hasSeenLoading = localStorage.getItem('saddlewood_loading_seen');
    
    if (!hasVisitedBefore) {
      // This is the first visit, show welcome screen
      localStorage.setItem('saddlewood_visited', 'true');
      setIsFirstLoad(true);
    } else {
      setIsFirstLoad(false);
    }
    
    // Set loading animation flag
    if (!hasSeenLoading) {
      // First time seeing loading animation
      localStorage.setItem('saddlewood_loading_seen', 'true');
    }
    
    // For development/testing - uncomment to always show the loading animation
    // setIsFirstLoad(true);
    // localStorage.removeItem('saddlewood_loading_seen');

    // Auto-clear the first load flags occasionally to refresh the experience
    return () => {
      // 10% chance to reset welcome screen on each visit
      if (Math.random() < 0.1) {
        localStorage.removeItem('saddlewood_visited');
      }
      
      // 5% chance to reset loading animation on each visit
      if (Math.random() < 0.05) {
        localStorage.removeItem('saddlewood_loading_seen');
      }
    };
  }, []);

  return isFirstLoad;
}

// Function to manually reset the loading state for testing
export function resetLoadingState() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('saddlewood_loading_seen');
    localStorage.removeItem('saddlewood_visited');
  }
}