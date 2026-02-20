"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useLoadingState } from '@/lib/useLoadingState';
import Image from 'next/image';

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const isFirstLoad = useLoadingState();
  const containerRef = useRef<HTMLDivElement>(null);

  // Construction phases and messages
  const constructionPhases = [
    { name: "Planning", message: "Creating blueprint...", threshold: 20 },
    { name: "Foundation", message: "Laying foundation...", threshold: 40 },
    { name: "Framing", message: "Building structure...", threshold: 60 },
    { name: "Systems", message: "Installing systems...", threshold: 80 },
    { name: "Finishing", message: "Adding final touches...", threshold: 100 }
  ];

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
          setTimeout(() => setShowAnimation(false), 800);
          return 100;
        }

        // Dynamic progress speed to give a more natural building feel
        let increment;
        if (prevProgress < 25) {
          increment = 3; // Planning phase (slower)
        } else if (prevProgress < 40) {
          increment = 5; // Foundation (medium)
        } else if (prevProgress < 60) {
          increment = 4; // Main structure (medium)
        } else if (prevProgress < 80) {
          increment = 3; // Systems installation (slower)
        } else {
          increment = 2; // Final finishing touches (slowest)
        }

        // Update current phase based on progress
        for (let i = 0; i < constructionPhases.length; i++) {
          if (prevProgress < constructionPhases[i].threshold) {
            if (currentPhase !== i) {
              setCurrentPhase(i);
            }
            break;
          }
        }

        return Math.min(prevProgress + increment, 100);
      });
    }, 180);

    // Add some particles for visual effect when animation starts
    if (containerRef.current) {
      createParticle();
    }

    return () => clearInterval(interval);
  }, [isFirstLoad, currentPhase]);

  // Function to create construction dust particles
  const createParticle = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles = 25;

    for (let i = 0; i < particles; i++) {
      setTimeout(() => {
        if (!containerRef.current) return;

        const particle = document.createElement('div');
        particle.classList.add('construction-particle');

        // Random position within the container
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        // Random size and opacity
        const size = Math.random() * 5 + 2;
        const opacity = Math.random() * 0.3 + 0.1;

        // Set styles
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity.toString();
        particle.style.animation = `float-particle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        // Add to container and remove after animation
        container.appendChild(particle);
        setTimeout(() => {
          container.removeChild(particle);
        }, 5000);
      }, i * 200); // Staggered creation
    }
  };

  // Add a fade-out effect
  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 bg-obsidian z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Particle container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <style jsx global>{`
          .construction-particle {
            position: absolute;
            background-color: rgba(212, 175, 55, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
          }

          @keyframes float-particle {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, -30px) rotate(15deg); }
          }

          @keyframes blueprint-draw {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
          }

          @keyframes build-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes hammer {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-30deg); }
          }

          @keyframes drill {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }

          @keyframes pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(212,175,55,0.3)); }
            50% { filter: drop-shadow(0 0 10px rgba(212,175,55,0.6)); }
          }
        `}</style>
      </div>

      <div className="w-full max-w-md px-6 flex flex-col items-center relative z-10">
        {/* Company Logo - larger size */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mb-3 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-gold border-opacity-20"></div>
            <Image
              src="/images/logo.png"
              alt="Saddlewood Contracting Logo"
              width={128}
              height={128}
              className="rounded-full shadow-lg animate-pulse"
              style={{
                animationDuration: '3s',
                filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.3))'
              }}
            />
          </div>
          <div className="text-center">
            <div className="text-text-primary text-3xl font-bold uppercase tracking-wider mb-1">
              Saddlewood
            </div>
            <div className="text-silver-dark text-sm uppercase tracking-widest">
              Contracting LLC
            </div>
          </div>
        </div>

        {/* Main construction animation area */}
        <div className="w-full h-44 mb-6 relative">
          {/* Blueprint grid background */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Construction animation based on phase */}
          <div className="absolute inset-0 flex items-center justify-center">
            {currentPhase === 0 && (
              // Planning phase - Blueprints drawing
              <svg className="w-4/5 h-4/5" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30,120 L50,50 L150,50 L170,120 Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  fill="none"
                  style={{ animation: 'blueprint-draw 4s linear forwards' }}
                />
                <path
                  d="M50,50 L100,20 L150,50"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  fill="none"
                  style={{ animation: 'blueprint-draw 4s linear forwards', animationDelay: '1s' }}
                />
                <rect
                  x="90" y="80" width="20" height="40"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  fill="none"
                  style={{ animation: 'blueprint-draw 2s linear forwards', animationDelay: '2s' }}
                />
                <rect
                  x="60" y="60" width="15" height="15"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  fill="none"
                  style={{ animation: 'blueprint-draw 2s linear forwards', animationDelay: '2.5s' }}
                />
                <rect
                  x="125" y="60" width="15" height="15"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  fill="none"
                  style={{ animation: 'blueprint-draw 2s linear forwards', animationDelay: '3s' }}
                />

                <circle cx="30" cy="40" r="3" fill="#D4AF37" opacity="0.6" style={{ animation: 'pulse-glow 1.5s infinite' }}/>
                <circle cx="170" cy="40" r="3" fill="#D4AF37" opacity="0.6" style={{ animation: 'pulse-glow 2s infinite' }}/>
                <circle cx="30" cy="120" r="3" fill="#D4AF37" opacity="0.6" style={{ animation: 'pulse-glow 1.8s infinite' }}/>
                <circle cx="170" cy="120" r="3" fill="#D4AF37" opacity="0.6" style={{ animation: 'pulse-glow 1.3s infinite' }}/>
              </svg>
            )}

            {currentPhase === 1 && (
              // Foundation phase
              <svg className="w-4/5 h-4/5" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Foundation base */}
                <rect
                  x="20" y="120" width="160" height="10"
                  fill="rgba(212,175,55,0.3)"
                  style={{ animation: 'build-up 1s ease-out forwards' }}
                />

                <rect
                  x="30" y="110" width="140" height="10"
                  fill="rgba(212,175,55,0.25)"
                  style={{ animation: 'build-up 1s ease-out forwards', animationDelay: '0.3s' }}
                />

                {/* Outline of future building */}
                <path
                  d="M30,120 L50,50 L150,50 L170,120"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  fill="none"
                  opacity="0.3"
                />

                {/* Construction equipment */}
                <g style={{ animation: 'hammer 1.5s ease-in-out infinite', transformOrigin: '40px 90px' }}>
                  <rect x="35" y="80" width="10" height="30" fill="#D4AF37" opacity="0.8" rx="2" />
                  <rect x="33" y="75" width="14" height="8" fill="#D4AF37" opacity="0.9" rx="1" />
                </g>

                <g style={{ animation: 'drill 2s ease-in-out infinite' }}>
                  <rect x="150" y="80" width="20" height="10" fill="#D4AF37" opacity="0.8" rx="2" />
                  <rect x="165" y="75" width="10" height="20" fill="#D4AF37" opacity="0.7" rx="1" />
                </g>
              </svg>
            )}

            {currentPhase === 2 && (
              // Framing phase
              <svg className="w-4/5 h-4/5" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Foundation */}
                <rect x="20" y="120" width="160" height="10" fill="rgba(212,175,55,0.3)" />

                {/* Frame */}
                <path
                  d="M30,120 L50,50 L150,50 L170,120 Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Roof frame */}
                <path
                  d="M50,50 L100,20 L150,50"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="none"
                  style={{ animation: 'build-up 1s ease-out forwards' }}
                />

                {/* Internal frames */}
                <line x1="50" y1="50" x2="50" y2="120" stroke="#D4AF37" strokeWidth="2" />
                <line x1="90" y1="50" x2="90" y2="120" stroke="#D4AF37" strokeWidth="2" />
                <line x1="110" y1="50" x2="110" y2="120" stroke="#D4AF37" strokeWidth="2" />
                <line x1="150" y1="50" x2="150" y2="120" stroke="#D4AF37" strokeWidth="2" />
                <line x1="30" y1="85" x2="170" y2="85" stroke="#D4AF37" strokeWidth="2" />

                {/* Construction worker indicator */}
                <circle cx="70" cy="70" r="5" fill="#D4AF37" opacity="0.8" style={{ animation: 'pulse-glow 1.5s infinite' }} />
                <circle cx="130" cy="95" r="5" fill="#D4AF37" opacity="0.8" style={{ animation: 'pulse-glow 2s infinite' }} />
              </svg>
            )}

            {currentPhase === 3 && (
              // Systems installation phase
              <svg className="w-4/5 h-4/5" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Building shell */}
                <path
                  d="M30,120 L50,50 L150,50 L170,120 Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.1)"
                />

                <path
                  d="M50,50 L100,20 L150,50"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.15)"
                />

                {/* HVAC/Plumbing indicators */}
                <circle cx="70" cy="70" r="3" fill="#88CCFF" opacity="0.8" style={{ animation: 'pulse-glow 1.5s infinite' }} />
                <circle cx="130" cy="70" r="3" fill="#88CCFF" opacity="0.8" style={{ animation: 'pulse-glow 1.8s infinite' }} />
                <circle cx="100" cy="90" r="3" fill="#88CCFF" opacity="0.8" style={{ animation: 'pulse-glow 2s infinite' }} />

                {/* Electrical indicators */}
                <circle cx="60" cy="100" r="3" fill="#FFCC00" opacity="0.8" style={{ animation: 'pulse-glow 1.2s infinite' }} />
                <circle cx="140" cy="100" r="3" fill="#FFCC00" opacity="0.8" style={{ animation: 'pulse-glow 1.7s infinite' }} />
                <circle cx="100" cy="60" r="3" fill="#FFCC00" opacity="0.8" style={{ animation: 'pulse-glow 1.5s infinite' }} />

                {/* Connection lines for systems */}
                <path
                  d="M70,70 L100,90 L130,70"
                  stroke="#88CCFF"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.5"
                />

                <path
                  d="M60,100 L100,60 L140,100"
                  stroke="#FFCC00"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.5"
                />

                {/* Tools animation */}
                <g style={{ animation: 'drill 1.5s ease-in-out infinite', transformOrigin: '120px 85px' }}>
                  <rect x="110" y="80" width="20" height="10" fill="#D4AF37" opacity="0.8" rx="2" />
                  <rect x="125" y="75" width="5" height="20" fill="#D4AF37" opacity="0.7" rx="1" />
                </g>
              </svg>
            )}

            {currentPhase === 4 && (
              // Finishing touches
              <svg className="w-4/5 h-4/5" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Complete building */}
                <path
                  d="M30,120 L50,50 L150,50 L170,120 Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.2)"
                />

                <path
                  d="M50,50 L100,20 L150,50"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.25)"
                />

                {/* Windows */}
                <rect
                  x="60" y="60" width="15" height="15"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.3)"
                  style={{ animation: 'pulse-glow 3s infinite' }}
                />

                <rect
                  x="125" y="60" width="15" height="15"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.3)"
                  style={{ animation: 'pulse-glow 2.5s infinite' }}
                />

                {/* Door */}
                <rect
                  x="90" y="80" width="20" height="40"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="rgba(212,175,55,0.25)"
                />

                {/* Finishing details */}
                <circle cx="100" cy="100" r="3" fill="#D4AF37" opacity="0.9" style={{ animation: 'pulse-glow 1s infinite' }} />

                {/* Checkmark for completion */}
                {progress > 95 && (
                  <path
                    d="M85,90 L95,100 L115,80"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{ animation: 'build-up 0.5s ease-out forwards' }}
                  />
                )}
              </svg>
            )}
          </div>

          {/* Construction tools at the bottom */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 opacity-70">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ animation: 'hammer 2s ease-in-out infinite', transformOrigin: 'bottom center' }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <path d="M15,12L5.5,18V6L15,12Z" fill="#D4AF37" />
                <line x1="15" y1="12" x2="22" y2="12" stroke="#D4AF37" strokeWidth="2" />
              </svg>
            </div>

            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <path d="M14.7,6.3a1,1,0,0,0,0,1.4l1.6,1.6a1,1,0,0,0,1.4,0l3.77-3.77a6,6,0,0,1-7.94,7.94l-6.91,6.91a2.12,2.12,0,0,1-3-3l6.91-6.91a6,6,0,0,1,7.94-7.94l-3.76,3.76Z" stroke="#D4AF37" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ animation: 'drill 1s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <rect x="5" y="8" width="14" height="8" rx="1" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                <rect x="12" y="6" width="7" height="3" rx="1" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                <rect x="15" y="16" width="4" height="2" rx="1" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                <path d="M19,10L22,13L19,16" stroke="#D4AF37" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Construction phase indicator */}
        <div className="text-text-primary text-center mb-4">
          <div className="uppercase tracking-wider text-sm font-bold mb-1">
            {constructionPhases[currentPhase].name} Phase
          </div>
          <div className="text-silver-dark text-xs">
            {constructionPhases[currentPhase].message}
          </div>
        </div>

        {/* Progress bar with enhanced styling */}
        <div className="w-full bg-surface bg-opacity-40 rounded-full h-3 mb-4 p-0.5">
          <div
            className="h-full rounded-full transition-all duration-200 ease-out relative overflow-hidden"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, rgba(212,175,55,0.7) 0%, rgba(212,175,55,1) 100%)'
            }}
          >
            {/* Animated shine effect */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                animation: 'shine 2s infinite linear',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
        </div>

        {/* Loading text with completion indication */}
        <div className="text-text-primary text-sm font-medium">
          {progress < 100 ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Building Excellence... {progress}%</span>
            </div>
          ) : (
            <div className="flex items-center text-base">
              <svg className="-ml-1 mr-2 h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Ready to Serve You!</span>
            </div>
          )}
        </div>

        {/* Saddlewood tagline */}
        <div className="absolute bottom-4 text-silver-dark text-xs tracking-widest text-center w-full">
          HVAC · ELECTRICAL · PLUMBING · REMODELING
        </div>
      </div>

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #000 70%)',
          animation: 'pulse 4s infinite ease-in-out',
        }}
      >
        <style jsx>{`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.15; }
          }
        `}</style>
      </div>
    </div>
  );
}
