"use client";

export default function ClientRefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };
  
  return (
    <button 
      onClick={handleRefresh}
      className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
    >
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
        <path d="M16 21h5v-5"></path>
      </svg>
      <span>Refresh Demo</span>
    </button>
  );
}