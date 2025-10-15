"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function StudentActivities() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    {
      title: "Architecture",
      images: [
        "/Assets/gallery/arch1.jpg",
        "/Assets/gallery/arch2.jpg",
        "/Assets/gallery/arch3.jpg",
      ],
    },
    {
      title: "Interior",
      images: [
        "/Assets/gallery/int1.jpg",
        "/Assets/gallery/int2.jpg",
        "/Assets/gallery/int3.jpg",
      ],
    },
    {
      title: "Landscape",
      images: [
        "/Assets/gallery/land1.jpg",
        "/Assets/gallery/land2.jpg",
        "/Assets/gallery/land3.jpg",
      ],
    },
    {
      title: "Pool Design",
      images: [
        "/Assets/gallery/pool1.jpg",
        "/Assets/gallery/pool2.jpg",
        "/Assets/gallery/pool3.jpg",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00306E]">
          Sports Activities
        </h2>
        <div className="w-24 h-[3px] bg-[#D2093C] mx-auto mt-3"></div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeTab === index
                ? "bg-[#00306E] text-white border-[#00306E]"
                : "border-[#00306E] text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {tabs[activeTab].images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal for full image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white bg-black/50 p-2 rounded-full hover:bg-black transition"
              >
                <X size={24} />
              </button>
              <Image
                src={selectedImage}
                alt="Large view"
                width={1000}
                height={700}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
