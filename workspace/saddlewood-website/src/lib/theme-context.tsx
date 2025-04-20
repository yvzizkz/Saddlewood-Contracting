"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ColorScheme = 'classic' | 'modern' | 'earth' | 'industrial';

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  getCssVariables: () => Record<string, string>;
}

// Construction-themed color palettes
const colorSchemes: Record<ColorScheme, Record<string, string>> = {
  // Classic black and white with gold accent
  classic: {
    '--color-primary': '#0f0f0f',
    '--color-secondary': '#ffffff',
    '--color-accent': '#d4af37',
    '--color-neutral': '#6b7280',
    '--color-neutral-light': '#d1d5db',
    '--color-neutral-dark': '#374151',
    '--color-success': '#10b981',
    '--color-warning': '#f59e0b',
    '--color-error': '#ef4444',
    '--color-border': 'rgba(255, 255, 255, 0.1)',
    '--color-background': '#0f0f0f',
    '--color-card': '#1e1e1e',
  },
  // Modern construction with blue-steel accents
  modern: {
    '--color-primary': '#1a202c',
    '--color-secondary': '#f7fafc',
    '--color-accent': '#3182ce',
    '--color-neutral': '#718096',
    '--color-neutral-light': '#e2e8f0',
    '--color-neutral-dark': '#2d3748',
    '--color-success': '#38a169',
    '--color-warning': '#dd6b20',
    '--color-error': '#e53e3e',
    '--color-border': 'rgba(203, 213, 224, 0.2)',
    '--color-background': '#1a202c',
    '--color-card': '#2d3748',
  },
  // Earthy tones for natural construction aesthetic
  earth: {
    '--color-primary': '#413022',
    '--color-secondary': '#f8f5f0',
    '--color-accent': '#896a45',
    '--color-neutral': '#8e8276',
    '--color-neutral-light': '#e5e0da',
    '--color-neutral-dark': '#5c4d3c',
    '--color-success': '#4c8c4a',
    '--color-warning': '#ba8a37',
    '--color-error': '#b54b3a',
    '--color-border': 'rgba(142, 130, 118, 0.3)',
    '--color-background': '#413022',
    '--color-card': '#5c4d3c',
  },
  // Industrial steel and orange
  industrial: {
    '--color-primary': '#2c3e50',
    '--color-secondary': '#ecf0f1',
    '--color-accent': '#e67e22',
    '--color-neutral': '#95a5a6',
    '--color-neutral-light': '#ecf0f1',
    '--color-neutral-dark': '#34495e',
    '--color-success': '#27ae60',
    '--color-warning': '#f39c12',
    '--color-error': '#c0392b',
    '--color-border': 'rgba(236, 240, 241, 0.2)',
    '--color-background': '#2c3e50',
    '--color-card': '#34495e',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to classic color scheme
  const [colorScheme, setColorScheme] = useState<ColorScheme>('classic');
  
  // Apply colors to document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const variables = colorSchemes[colorScheme];
      const root = document.documentElement;
      
      Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      
      // Store preference in localStorage
      localStorage.setItem('saddlewood-color-scheme', colorScheme);
    }
  }, [colorScheme]);
  
  // Load preference from localStorage on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedScheme = localStorage.getItem('saddlewood-color-scheme') as ColorScheme | null;
      if (savedScheme && colorSchemes[savedScheme]) {
        setColorScheme(savedScheme);
      }
    }
  }, []);
  
  const getCssVariables = () => colorSchemes[colorScheme];
  
  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, getCssVariables }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}