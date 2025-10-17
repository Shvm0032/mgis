"use client";

import { FaGraduationCap } from "react-icons/fa";

export default function BoardingHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/boarding/board-1.jpg')" }}
      ></div>

      {/* Semi-Transparent Overlay with #3D2D4F */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(61,45,79,0.8)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl text-[#F7DFAF] font-bold mb-6">
          BOARDING
        </h1>
        <p className="text-md md:text-xl mb-8">
          MGIS is attached with an elegant boarding facilities for its students
          and teachers and build an ambience that fosters sound values, personal
          development and discipline.
        </p>
        <button className="inline-flex items-center gap-3 bg-[#F7DC79] text-[#422E59]  py-2 px-5 rounded-lg transform transition-transform duration-300 hover:scale-95">
          <FaGraduationCap size={20} />
          APPLY TODAY
        </button>
      </div>
    </section>
  );
}
