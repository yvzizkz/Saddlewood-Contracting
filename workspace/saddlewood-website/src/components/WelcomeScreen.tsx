"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0);
  const router = useRouter();
  
  const missionStatements = [
    "Building Quality",
    "Delivering Excellence",
    "Earning Trust",
    "Serving Arizona Since 2007"
  ];
  
  // Animation timing configuration (in milliseconds)
  const animationConfig = {
    textDuration: 1200,       // How long each mission statement stays visible
    textTransition: 800,      // Transition time between statements
    logoRevealDelay: 300,     // Delay before logo reveals after last statement
    finalDisplayTime: 2000,   // How long the final screen with logo stays
    fadeOutDuration: 1000,    // How long the fade out animation takes
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStage < missionStatements.length) {
        setAnimationStage(animationStage + 1);
      } else if (animationStage === missionStatements.length) {
        // Last stage, show company logo with slight delay
        setTimeout(() => {
          setAnimationStage(animationStage + 1);
          
          // Set a timer to fade out the welcome screen after showing the logo
          setTimeout(() => {
            setVisible(false);
            
            // Allow time for fade-out animation before removing from DOM
            setTimeout(() => {
              // Use local storage to remember that the user has seen the welcome screen
              localStorage.setItem('welcomeScreenShown', 'true');
            }, animationConfig.fadeOutDuration);
          }, animationConfig.finalDisplayTime);
        }, animationConfig.logoRevealDelay);
      }
    }, 
    // Use different timing for transition between statements vs. final logo reveal
    animationStage < missionStatements.length 
      ? animationConfig.textDuration
      : animationConfig.textTransition
    );

    return () => clearTimeout(timer);
  }, [animationStage, missionStatements.length]);

  // Check if user has already seen the welcome screen
  useEffect(() => {
    // For development: Check if URL has ?welcome=reset to force welcome screen to show again
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const resetWelcome = urlParams?.get('welcome') === 'reset';
    
    if (resetWelcome) {
      // Remove the stored value to show welcome screen again
      localStorage.removeItem('welcomeScreenShown');
      // Remove the query parameter from URL without page reload
      if (typeof window !== 'undefined') {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    } else {
      // Regular check for returning visitors
      const hasSeenWelcome = localStorage.getItem('welcomeScreenShown');
      if (hasSeenWelcome === 'true') {
        setVisible(false);
      }
    }
  }, []);

  // If not visible, don't render anything
  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-1000 ${
        animationStage === missionStatements.length + 1 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-right corner circular element */}
          <div 
            className={`absolute -top-32 -right-32 w-64 h-64 rounded-full border border-white opacity-10 transition-all duration-1000 ${
              animationStage > 0 ? 'scale-100' : 'scale-50 opacity-0'
            }`}
          />
          
          {/* Bottom-left corner circular element */}
          <div 
            className={`absolute -bottom-48 -left-48 w-96 h-96 rounded-full border border-white opacity-10 transition-all duration-1000 delay-300 ${
              animationStage > 1 ? 'scale-100' : 'scale-50 opacity-0'
            }`}
          />
          
          {/* Grid background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 md:grid-cols-12 h-full">
              {[...Array(72)].map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="relative w-32 h-32 mb-8">
            {/* Animated circles around logo */}
            <div 
              className={`absolute inset-0 rounded-full border-2 border-white opacity-30 transition-all duration-1000 ${
                animationStage >= missionStatements.length ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
              }`}
            />
            
            <div 
              className={`absolute inset-0 rounded-full border border-white opacity-60 transition-all duration-1200 delay-100 ${
                animationStage >= missionStatements.length ? 'scale-125 opacity-0' : 'scale-0 opacity-0'
              }`}
            />
            
            {/* Main logo circle */}
            <div 
              className={`absolute inset-2 rounded-full bg-white bg-opacity-5 border-2 border-white transition-all duration-700 ${
                animationStage >= missionStatements.length ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            />
            
            {/* Company logo - displayed at the final animation stage */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                animationStage >= missionStatements.length ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center">
                <Image
                  src="/images/sc-monogram-correct.svg"
                  alt="Saddlewood Contracting Monogram"
                  width={90}
                  height={90}
                  className="filter drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Mission statements that animate in sequence */}
          <div className="h-14 relative">
            {missionStatements.map((statement, index) => (
              <div
                key={index}
                className={`text-2xl md:text-3xl font-bold tracking-wider transition-all duration-700 absolute left-1/2 transform -translate-x-1/2 ${
                  animationStage === index 
                    ? 'opacity-100 translate-y-0' 
                    : animationStage > index 
                      ? 'opacity-0 -translate-y-12' 
                      : 'opacity-0 translate-y-12'
                }`}
              >
                <span className="relative">
                  {statement}
                  {/* Animated underline that grows from left to right */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-1000 origin-left ${
                      animationStage === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </span>
              </div>
            ))}
          </div>
          
          {/* Company name - displayed after all mission statements */}
          <div 
            className={`mt-12 text-3xl md:text-4xl font-bold tracking-wider transition-all duration-700 ${
              animationStage >= missionStatements.length ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            SADDLEWOOD CONTRACTING
          </div>
          
          {/* Tagline - displayed after company name */}
          <div 
            className={`mt-3 text-sm md:text-base tracking-wider text-white text-opacity-70 transition-all duration-700 delay-300 ${
              animationStage >= missionStatements.length ? 'opacity-100' : 'opacity-0'
            }`}
          >
            PROFESSIONAL CONTRACTING SERVICES
          </div>
        </div>
      </div>
      
      {/* Skip button with improved styling */}
      <button 
        onClick={() => setVisible(false)} 
        className="absolute bottom-8 right-8 px-4 py-1.5 rounded-full border border-white border-opacity-30 text-white text-sm opacity-60 hover:opacity-100 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
      >
        Skip Intro
      </button>
    </div>
  );
}