import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const getServiceBackground = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return (
        <svg className="absolute right-0 top-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 90V50l40-35 40 35v40H60V65H40v25H10z" />
        </svg>
      );
    case 'ac_unit':
      return (
        <svg className="absolute right-0 top-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" />
          <path d="M50 10v20M50 70v20M10 50h20M70 50h20M22 22l14 14M64 64l14 14M22 78l14-14M64 36l14-14" strokeWidth="6" stroke="currentColor" fill="none" />
        </svg>
      );
    case 'bolt':
      return (
        <svg className="absolute right-0 top-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M55 10L25 55h25l-5 35 30-45H50l5-35z" />
        </svg>
      );
    case 'water_drop':
      return (
        <svg className="absolute right-0 top-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10c-5 10-25 30-25 50a25 25 0 0050 0c0-20-20-40-25-50z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ServiceCard({ title, description, link, icon }: ServiceCardProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ac_unit':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v8m0 4v8M2 12h8m4 0h8M4.93 4.93l5.66 5.66m2.83 2.83l5.66 5.66M19.07 4.93l-5.66 5.66m-2.83 2.83-5.66 5.66"></path>
          </svg>
        );
      case 'bolt':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        );
      case 'water_drop':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        );
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4M12 16h.01"></path>
          </svg>
        );
    }
  };

  return (
    <Link href={link} className="block">
      <div className="relative rounded-2xl bg-white border border-sandstone-light/80 p-6 sm:p-8 
                      hover:shadow-soft-lg hover:border-accent/30 transition-all duration-300 group overflow-hidden">
        <div className="text-sandstone-dark">
          {getServiceBackground(icon)}
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-desert text-accent flex items-center justify-center
                           group-hover:bg-accent group-hover:text-white transition-all duration-300
                           shadow-soft">
              {renderIcon(icon)}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 text-primary 
                           group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-charcoal-light mb-4 leading-relaxed">{description}</p>
            
            <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-accent-dark transition-colors duration-300">
              <span>Learn More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
