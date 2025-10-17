// components/Loader.js
'use client';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">
      <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-25 lg:h-25">
        
        {/* Slow Floating Spinner Circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-blue-300 border-t-[#00306E] animate-spin-slow"></div>

        {/* Center Image */}
        <img
          src="/Assets/logo/android.png"
          alt="Loader"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-15 lg:h-15 relative z-10"
        />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.5s linear infinite; 
        }
      `}</style>
    </div>
  );
}
