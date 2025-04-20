"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedBackgroundPatternProps {
  className?: string;
  patternType?: 'blueprint' | 'construction';
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
}

export default function AnimatedBackgroundPattern({
  className = '',
  patternType = 'blueprint',
  speed = 'medium',
  opacity = 0.06
}: AnimatedBackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);
  
  // Convert speed to milliseconds
  const getSpeedValue = () => {
    switch (speed) {
      case 'slow': return 40;
      case 'fast': return 15;
      default: return 25;
    }
  };

  useEffect(() => {
    // Check if this is first time user
    const checkFirstTimeVisit = () => {
      if (typeof window !== 'undefined') {
        const visited = localStorage.getItem('hasVisitedBefore');
        if (!visited) {
          setIsFirstTimeUser(true);
          // Set the flag after 15 seconds for future visits
          setTimeout(() => {
            localStorage.setItem('hasVisitedBefore', 'true');
            setIsFirstTimeUser(false);
          }, 15000);
        } else {
          setIsFirstTimeUser(false);
        }
      }
    };
    
    checkFirstTimeVisit();
    
    // If first time user, don't render animations
    const canvas = canvasRef.current;
    if (!canvas || isFirstTimeUser) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to be responsive to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Drawing functions based on pattern type
    const drawBlueprint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      
      // Small grid
      const smallGridSize = 15;
      ctx.lineWidth = 0.2;
      
      const offsetX = (Date.now() / (getSpeedValue() * 60)) % smallGridSize;
      const offsetY = (Date.now() / (getSpeedValue() * 80)) % smallGridSize;
      
      // Draw vertical lines
      for (let x = -offsetX; x < canvas.width; x += smallGridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = -offsetY; y < canvas.height; y += smallGridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw larger grid
      const largeGridSize = 75;
      ctx.lineWidth = 0.5;
      
      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += largeGridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += largeGridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Add occasional circles to represent dimensions or notes
      ctx.lineWidth = 0.4;
      const timestamp = Date.now();
      
      for (let i = 0; i < 20; i++) {
        const x = ((Math.sin(timestamp / 3000 + i * 1000) + 1) / 2) * canvas.width;
        const y = ((Math.cos(timestamp / 4000 + i * 1000) + 1) / 2) * canvas.height;
        const radius = 3 + Math.sin(timestamp / 2000 + i) * 2;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };
    
    const drawConstruction = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity/2})`;
      
      const timestamp = Date.now() / (getSpeedValue() * 40);
      
      // Draw diagonal stripes
      ctx.lineWidth = 0.5;
      const stripeGap = 30;
      const offset = timestamp % (stripeGap * 2);
      
      for (let x = -stripeGap * 4; x < canvas.width + stripeGap * 4; x += stripeGap) {
        // Diagonal lines moving
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x - canvas.height + offset, canvas.height);
        ctx.stroke();
        
        // Crossing lines
        ctx.beginPath();
        ctx.moveTo(x - offset, 0);
        ctx.lineTo(x + canvas.height - offset, canvas.height);
        ctx.stroke();
      }
      
      // Draw small construction symbols
      for (let i = 0; i < 15; i++) {
        const x = ((Math.sin(timestamp / 10 + i * 1000) + 1) / 2) * canvas.width;
        const y = ((Math.cos(timestamp / 12 + i * 1000) + 1) / 2) * canvas.height;
        const size = 4 + Math.sin(timestamp / 8 + i) * 2;
        
        // Randomly pick a shape based on index
        const shapeType = i % 4;
        
        switch (shapeType) {
          case 0: // Cross
            ctx.beginPath();
            ctx.moveTo(x - size, y - size);
            ctx.lineTo(x + size, y + size);
            ctx.moveTo(x + size, y - size);
            ctx.lineTo(x - size, y + size);
            ctx.stroke();
            break;
          case 1: // Square
            ctx.beginPath();
            ctx.rect(x - size, y - size, size * 2, size * 2);
            ctx.stroke();
            break;
          case 2: // Triangle
            ctx.beginPath();
            ctx.moveTo(x, y - size);
            ctx.lineTo(x + size, y + size);
            ctx.lineTo(x - size, y + size);
            ctx.closePath();
            ctx.stroke();
            break;
          case 3: // Circle
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.stroke();
            break;
        }
      }
    };
    
    // Select the drawing function based on pattern type
    const drawPattern = patternType === 'blueprint' ? drawBlueprint : drawConstruction;
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      drawPattern();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [patternType, speed, opacity, isFirstTimeUser]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}