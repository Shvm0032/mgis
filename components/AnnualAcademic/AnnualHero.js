"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnualHero() {
  const slides = [
    { id: 1, title: "Welcome To MGIS", subtitle: "Quality Education", image: "/Assets/annual/annual1.jpg" },
    { id: 2, title: "Welcome To MGIS", subtitle: "Quality Education", image: "/Assets/annual/annual2.jpg" },
    { id: 3, title: "Great Quality Education", subtitle: "", image: "/Assets/annual/annual3.jpeg" },
    { id: 4, title: "Welcome To MGIS", subtitle: "Quality Education", image: "/Assets/annual/annual4.jpg" },
    { id: 5, title: "Great Quality Education", subtitle: "", image: "/Assets/annual/annual5.jpeg" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[80vh] sm:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Slide Content */}
          <div className="relative z-30 max-w-4xl px-4 sm:px-6 lg:px-16 text-white h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-2 sm:space-y-4"
                >
                  {slide.subtitle && (
                    <p className="text-sm sm:text-lg text-yellow-400 font-semibold uppercase tracking-wider">
                      {slide.subtitle}
                    </p>
                  )}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* Right Side Vertical Numbers */}
      <div className="absolute right-4 sm:right-6 top-auto bottom-4 sm:top-1/2 sm:bottom-auto -translate-y-0 sm:-translate-y-1/2 flex sm:flex-col flex-row sm:items-end items-center gap-4 sm:gap-4 text-white z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex items-center gap-1 sm:gap-2 transition-all duration-300 ${
              current === index ? "text-yellow-400 text-lg sm:text-xl" : "text-white/60 hover:text-white text-sm sm:text-base"
            }`}
          >
            {/* Show dash only for active slide */}
            {current === index && <span className="text-yellow-400 text-xl sm:text-2xl">—</span>}
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
