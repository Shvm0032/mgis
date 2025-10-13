"use client";
import React from "react";

export default function AboutFilm() {
  return (
    <section className="relative bg-gray-50 py-32 px-6 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <span className="absolute top-10 left-10 text-4xl text-yellow-300 animate-bounce">📚</span>
        <span className="absolute top-1/3 right-20 text-5xl text-blue-300 animate-pulse">✏️</span>
        <span className="absolute bottom-10 right-10 text-3xl text-green-300 animate-pulse">🎒</span>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        {/* Top Label */}
        <p className="text-red-500 text-sm font-semibold uppercase tracking-wide">
          Live Class
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">MGIS FILM</h2>

        {/* Video */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <video
            src="/Assets/about-slider/SMALL-OUT-MGIS1.mp4" // 🔹 Video public folder me hona chahiye
            controls
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
