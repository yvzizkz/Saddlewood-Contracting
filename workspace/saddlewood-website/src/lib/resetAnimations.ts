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
 * This function is now deprecated as the welcome screen has been disabled
 * It remains here only for backward compatibility
 */
export function resetWelcomeScreen() {
  // Welcome screen permanently disabled - function remains for backwards compatibility
  console.log('Welcome screen has been permanently disabled');
}

/**
 * Reset both the loading animation and welcome screen
 */
export function resetAllAnimations() {
  resetLoadingAnimation();
  resetWelcomeScreen();
  console.log('All animations have been reset. Refresh the page to see them.');
}