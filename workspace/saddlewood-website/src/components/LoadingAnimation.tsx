"use client";

import React, { useEffect, useState } from 'react';
import { useLoadingState } from '@/lib/useLoadingState';

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const isFirstLoad = useLoadingState();

  useEffect(() => {
    // Only show loading animation on first load
    if (!isFirstLoad) {
      setShowAnimation(false);
      return;
    }

    // Progress simulation with dynamic speed adjustments
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          // Wait a moment at 100% before hiding
          setTimeout(() => setShowAnimation(false), 600);
          return 100;
        }
        
        // Dynamic progress speed to give a more natural building feel
        // Phases of construction:
        // 0-30%: Foundation/framing (fast)
        // 30-60%: Main structure (medium)
        // 60-85%: Details (slower)
        // 85-100%: Finishing touches (slowest)
        let increment;
        if (prevProgress < 30) {
          increment = 12; // Fast initial progress
        } else if (prevProgress < 60) {
          increment = 8;  // Medium progress
        } else if (prevProgress < 85) {
          increment = 5;  // Slower details
        } else {
          increment = 3;  // Final finishing touches
        }
        
        return Math.min(prevProgress + increment, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, [isFirstLoad]);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6 flex flex-col items-center">
        {/* Logo/Brand Element */}
        <div className="mb-4 text-secondary text-4xl font-bold">
          <span className="mr-2">Saddlewood</span>
          <span>Contracting</span>
        </div>
        
        {/* Construction animation */}
        <div className="w-full h-32 mb-8 relative">
          {/* Dust particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-secondary opacity-30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  animation: `float${i % 3 + 1} ${Math.random() * 2 + 2}s infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: progress > 40 ? 0.3 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                }}
              />
            ))}
            <style jsx>{`
              @keyframes float1 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(10px, -15px); }
              }
              @keyframes float2 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(-8px, -10px); }
              }
              @keyframes float3 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(5px, -20px); }
              }
            `}</style>
          </div>
          
          {/* Building outline */}
          <div className="absolute inset-0 flex items-end justify-center">
            <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* House frame - fills based on progress */}
              <path 
                d="M20,80 L50,30 L150,30 L180,80 Z" 
                stroke="white" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M20,80 L50,30 L150,30 L180,80 Z" 
                stroke="white" 
                strokeWidth="0" 
                fill="rgba(255, 255, 255, 0.15)"
                style={{ 
                  clipPath: `polygon(0% 100%, 100% 100%, 100% ${100 - progress}%, 0% ${100 - progress}%)` 
                }}
              />
              
              {/* Roof */}
              <path 
                d="M50,30 L100,10 L150,30" 
                stroke="white" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M50,30 L100,10 L150,30" 
                stroke="white" 
                strokeWidth="0" 
                fill="rgba(255, 255, 255, 0.15)"
                style={{ 
                  opacity: progress > 60 ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Door */}
              <rect 
                x="90" y="55" width="20" height="25" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"
              />
              <rect 
                x="90" y="55" width="20" height="25" 
                stroke="white" 
                strokeWidth="0" 
                fill="rgba(255, 255, 255, 0.2)"
                style={{ 
                  opacity: progress > 80 ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Windows */}
              <rect 
                x="60" y="40" width="15" height="15" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"
              />
              <rect 
                x="125" y="40" width="15" height="15" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"
              />
              <rect 
                x="60" y="40" width="15" height="15" 
                stroke="white" 
                strokeWidth="0" 
                fill="rgba(255, 255, 255, 0.25)"
                style={{ 
                  opacity: progress > 90 ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              <rect 
                x="125" y="40" width="15" height="15" 
                stroke="white" 
                strokeWidth="0" 
                fill="rgba(255, 255, 255, 0.25)"
                style={{ 
                  opacity: progress > 90 ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </svg>
          </div>

          {/* Construction tools animation */}
          <div className="absolute inset-0">
            {/* Animated hammer */}
            <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDuration: '1.5s' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16,15L10,21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10,8L16,14V15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13.5,5.5L12,7L17,12L18.5,10.5L13.5,5.5Z" fill="white"/>
                <path d="M12,7L5,14L10,19L17,12L12,7Z" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            {/* Animated wrench */}
            <div className="absolute top-1/4 right-1/4 animate-pulse">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7,6.3a1,1,0,0,0,0,1.4l1.6,1.6a1,1,0,0,0,1.4,0l3.77-3.77a6,6,0,0,1-7.94,7.94l-6.91,6.91a2.12,2.12,0,0,1-3-3l6.91-6.91a6,6,0,0,1,7.94-7.94l-3.76,3.76Z" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            {/* Animated drill */}
            <div className="absolute bottom-1/4 right-1/3 animate-spin" style={{ animationDuration: '3s' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="8" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                <rect x="12" y="6" width="7" height="3" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                <rect x="15" y="16" width="4" height="2" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M19,10L22,13L19,16" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div 
            className="bg-secondary h-2.5 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading text */}
        <div className="text-secondary text-sm">
          {progress < 100 ? (
            <p>Building Excellence... {progress}%</p>
          ) : (
            <p>Ready!</p>
          )}
        </div>
      </div>
    </div>
  );
}