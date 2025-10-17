"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Welcome To MGIS",
      subtitle: "Quality Education",
      description:
        "We at Mahatma Gandhi International School will provide quality education that ensures the physical, emotional, spiritual ,social and aesthetical development of the child in addition to academic excellence.",
      image: "/Assets/home-slider/slider-1.jpeg",
    },
    {
      id: 2,
      title: "Great Quality Education",
      subtitle: "",
      description:
        "Tapping the inherent  brilliance of every child to achieve academic excellence.",
      image: "/Assets/home-slider/slider-2.jpeg",
    },
    {
      id: 3,
      title: "Welcome To MGIS",
      subtitle: "Quality Education",
      description:
        "At MGIS we are committed to complete holistic education with focus on child development and growth of every student",
      image: "/Assets/home-slider/slider-3.jpeg",
    },
    {
      id: 4,
      title: "Great Quality Education",
      subtitle: "",
      description:
        "At MGIS we are committed to complete holistic education with focus on child development and growth of every student.",
      image: "/Assets/home-slider/slider-4.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
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
                  <p className="text-sm sm:text-lg text-yellow-400 font-semibold uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-snug sm:leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xs sm:text-base text-gray-200 max-w-full sm:max-w-lg">
                    {slide.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
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
            className="flex items-center gap-2 font-semibold transition-all duration-300"
          >
            {/* Dash only for active slide */}
            {current === index && (
              <span className="w-5 md:w-8 h-[2px] bg-yellow-400"></span>
            )}

            <span
              className={`${
                current === index ? "text-yellow-400 text-lg md:text-xl" : "text-white/70 text-sm md:text-base"
              }`}
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
