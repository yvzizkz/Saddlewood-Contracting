"use client";

// This utility helps with resetting animation states for testing

/**
 * Resets the loading animation so it will show again on the next page refresh
 */
export function resetLoadingAnimation() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('saddlewood_visited');
    console.log('Loading animation reset. Refresh the page to see it.');
  }
}

/**
 * Resets the welcome screen so it will show again on the next page refresh
 */
export function resetWelcomeScreen() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('saddlewood_welcomed');
    console.log('Welcome screen reset. Refresh the page to see it.');
  }
}

/**
 * Reset both the loading animation and welcome screen
 */
export function resetAllAnimations() {
  resetLoadingAnimation();
  resetWelcomeScreen();
  console.log('All animations have been reset. Refresh the page to see them.');
}