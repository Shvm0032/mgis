"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentHero() {
  const slides = [
    { id: 1, title: "Welcome To MGIS", subtitle: "Quality Education", image: "/Assets/studentlife/student-slider-1.png" },
    { id: 2, title: "Welcome To MGIS", subtitle: "Quality Education", image: "/Assets/studentlife/student-slider-2.png" },
    { id: 3, title: "Great Quality Education", subtitle: "", image: "/Assets/studentlife/student-slider-3.jpg" },
    { id: 4, title: "Great Quality Education", subtitle: "", image: "/Assets/studentlife/student-slider-4.jpg" },
    { id: 5, title: "Great Quality Education", subtitle: "", image: "/Assets/studentlife/student-slider-5.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Slide Content */}
          <div className="relative z-30 max-w-4xl px-4 sm:px-10 lg:px-16 text-white h-full flex flex-col justify-center">
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
                  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* Right Side Vertical Numbers */}
      <div className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-2 md:space-y-4 text-white z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex items-center gap-1 md:gap-2 transition-all duration-300 ${current === index ? "text-yellow-400 text-lg md:text-xl" : "text-white/60 hover:text-white"}`}
          >
            {current === index && <span className="text-yellow-400 text-xl md:text-2xl">—</span>}
            <span className="text-sm md:text-base">{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
