"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AccessibilityMode = 'default' | 'high-contrast';

interface AccessibilityContextType {
  mode: AccessibilityMode;
  setMode: (mode: AccessibilityMode) => void;
  toggleMode: () => void;
  isHighContrast: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  // Initialize with default mode, but check localStorage for saved preference
  const [mode, setModeState] = useState<AccessibilityMode>('default');
  const isHighContrast = mode === 'high-contrast';

  // On mount, check for saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('accessibility-mode');
    if (savedMode === 'high-contrast') {
      setModeState('high-contrast');
      document.documentElement.classList.add('high-contrast-mode');
    }
  }, []);

  // Function to set the mode and save preference
  const setMode = (newMode: AccessibilityMode) => {
    setModeState(newMode);
    
    // Save to localStorage
    localStorage.setItem('accessibility-mode', newMode);
    
    // Update document classes for styling
    if (newMode === 'high-contrast') {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }
  };

  // Function to toggle between modes
  const toggleMode = () => {
    const newMode = mode === 'default' ? 'high-contrast' : 'default';
    setMode(newMode);
  };

  return (
    <AccessibilityContext.Provider value={{ mode, setMode, toggleMode, isHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

// Hook to use accessibility context
export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}