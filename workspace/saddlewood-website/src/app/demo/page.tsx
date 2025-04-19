"use client";

import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import Link from 'next/link';

export default function DemoPage() {
  const [showWelcome, setShowWelcome] = useState(false);
  
  const handleResetWelcome = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('welcomeScreenShown');
      setShowWelcome(true);
    }
  };
  
  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl font-bold mb-8">Welcome Screen Demo</h1>
      
      <div className="bg-gray-100 p-8 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">About This Feature</h2>
        <p className="mb-4">
          The welcome screen is a beautiful animated intro that plays when visitors first arrive at the Saddlewood Contracting website.
          It shows a sequence of mission statements that transition smoothly, followed by a stylish logo reveal.
        </p>
        <p className="mb-4">
          The animation highlights Saddlewood Contracting's core values:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Building Quality</li>
          <li>Delivering Excellence</li>
          <li>Earning Trust</li>
          <li>Serving Arizona Since 2007</li>
        </ul>
        
        <h3 className="font-bold mb-2">Technical Features:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Smooth animations and transitions using CSS</li>
          <li>Responsive design that works on all devices</li>
          <li>localStorage integration to only show on first visit</li>
          <li>Skip button for users who don't want to wait</li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button
          onClick={handleResetWelcome}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          Show Welcome Screen
        </button>
        
        <Link href="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-opacity-90 transition-all text-center">
          Back to Home
        </Link>
      </div>
      
      {showWelcome && <WelcomeScreen />}
    </div>
  );
}