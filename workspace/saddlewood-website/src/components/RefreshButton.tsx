"use client";

import React from 'react';
import Link from 'next/link';

export default function RefreshButton() {
  return (
    <Link 
      href="/ui-demo" 
      className="bg-primary text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-opacity-90 transition-all"
      onClick={(e) => {
        e.preventDefault();
        window.location.reload();
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
      </svg>
      <span>Refresh to See Skeletons</span>
    </Link>
  );
}