"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Welcome To MGIS",
      subtitle: "Quality Education",
      image: "/Assets/academy/slider11.jpeg",
    },
    {
      id: 2,
      title: "Welcome To MGIS",
      subtitle: "Quality Education",
      image: "/Assets/about-slider/about-4.jpeg",
    },
    {
      id: 3,
      title: "Great Quality Education",
      subtitle: "",
      image: "/Assets/academy/slider12.jpeg",
    },
    {
      id: 4,
      title: "Great Quality Education",
      subtitle: "",
      image: "/Assets/academy/slider13.jpg",
    },
    
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
    <section className="relative w-full h-[90vh] overflow-hidden">
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
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Slide Content */}
          <div className="relative z-30 max-w-4xl px-6 sm:px-10 lg:px-16 text-white h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <p className="text-lg sm:text-xl text-yellow-400 font-semibold uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* Right Side Vertical Numbers */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-4 text-white z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex items-center gap-2  transition-all duration-300 ${
              current === index
                ? "text-yellow-400 text-xl"
                : "text-white/60 hover:text-white"
            }`}
          >
            {/* Show dash only for active slide */}
            {current === index && (
              <span className="text-yellow-400 text-2xl">—</span>
            )}
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
