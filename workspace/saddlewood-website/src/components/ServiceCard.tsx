import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
  featured?: boolean;
}

export default function ServiceCard({ title, description, link, icon, featured }: ServiceCardProps) {
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
      <div className={`relative rounded-2xl bg-white border p-8 sm:p-10 
                      hover:shadow-lift hover:-translate-y-1 
                      transition-all duration-300 group overflow-hidden
                      ${featured 
                        ? 'border-gold/40 shadow-soft-lg' 
                        : 'border-sandstone hover:border-gold/40 shadow-soft'}`}>
        {featured && (
          <>
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold animate-pulse"></div>
              <svg viewBox="0 0 100 100" className="w-full h-full text-gold/10">
                <path d="M100 0 L100 100 L0 100 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Featured
              </span>
            </div>
          </>
        )}
        
        <div className={`flex flex-col sm:flex-row items-start gap-6 ${featured ? 'mt-6' : ''}`}>
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center
                           transition-all duration-300 shadow-soft
                           ${featured 
                             ? 'bg-gradient-to-br from-gold/20 to-gold/5 text-gold group-hover:from-gold group-hover:to-gold-dark group-hover:text-white' 
                             : 'bg-ivory text-gold group-hover:bg-gold group-hover:text-white'}`}>
              {renderIcon(icon)}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 text-primary 
                           group-hover:text-gold transition-colors duration-300">
              {title}
            </h3>
            <p className="text-primary/60 mb-5 leading-relaxed">{description}</p>
            
            <span className="inline-flex items-center text-sm font-medium text-gold group-hover:text-gold-dark transition-colors duration-300">
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
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </Link>
  );
}
