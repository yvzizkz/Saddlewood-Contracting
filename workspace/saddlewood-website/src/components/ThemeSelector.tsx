"use client";

import { useState, useRef, useEffect } from 'react';
import { useTheme, type ColorScheme } from '@/lib/theme-context';

interface ThemeOption {
  name: ColorScheme;
  displayName: string;
  iconColor: string;
  description: string;
}

const themeOptions: ThemeOption[] = [
  {
    name: 'classic',
    displayName: 'Classic',
    iconColor: '#d4af37',
    description: 'Traditional black with gold accents'
  },
  {
    name: 'modern',
    displayName: 'Modern',
    iconColor: '#3182ce',
    description: 'Deep blue-steel modern design'
  },
  {
    name: 'earth',
    displayName: 'Earth',
    iconColor: '#896a45',
    description: 'Natural earthy construction tones'
  },
  {
    name: 'industrial',
    displayName: 'Industrial',
    iconColor: '#e67e22',
    description: 'Steel blue with orange highlights'
  }
];

export default function ThemeSelector() {
  const { colorScheme, setColorScheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={selectorRef}>
      {/* Theme button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full flex items-center justify-center transition-all duration-300 theme-transition"
        style={{ 
          backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-card)',
          color: isOpen ? 'var(--color-secondary)' : 'var(--color-primary)',
          borderColor: 'var(--color-border)'
        }}
        aria-label="Change color theme"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.37 2.63 14 7l-1.74-1.74a.59.59 0 0 0-.84 0l-2.83 2.83a.59.59 0 0 0 0 .84L11.29 11l-7 7a1.5 1.5 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7-7 2.83 2.83a.59.59 0 0 0 .84 0l2.83-2.83a.59.59 0 0 0 0-.84L18.29 11l4.37-4.37"></path>
        </svg>
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg theme-transition"
          style={{ 
            backgroundColor: 'var(--color-card)',
            borderColor: 'var(--color-border)',
            borderWidth: '1px'
          }}
        >
          <div className="p-2">
            <div className="px-2 py-2 text-sm font-medium mb-1"
                style={{ color: 'var(--color-primary)' }}
            >
              Construction Themes
            </div>
            
            <div className="mt-1 space-y-1">
              {themeOptions.map((option) => (
                <button
                  key={option.name}
                  className={`flex items-center w-full rounded-md px-2 py-2 theme-transition ${
                    colorScheme === option.name ? 'theme-selector-active' : ''
                  }`}
                  style={{ 
                    backgroundColor: colorScheme === option.name 
                      ? 'var(--color-primary)' 
                      : 'transparent',
                    color: colorScheme === option.name 
                      ? 'var(--color-secondary)' 
                      : 'var(--color-primary)',
                    borderColor: colorScheme === option.name 
                      ? 'var(--color-accent)' 
                      : 'transparent',
                    '--tw-ring-color': option.iconColor
                  } as React.CSSProperties}
                  onClick={() => {
                    setColorScheme(option.name);
                    setIsOpen(false);
                  }}
                >
                  <span
                    className="mr-2 h-4 w-4 rounded-full"
                    style={{ backgroundColor: option.iconColor }}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{option.displayName}</span>
                    <span className="text-xs opacity-75">{option.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}