"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function StudentActivities() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const tabs = [
    {
      title: "All",
      images: [
        "/Assets/activities/act-1.jpg",
        "/Assets/activities/act-2.jpg",
        "/Assets/activities/act-3.jpg",
        "/Assets/activities/act-4.jpg",
        "/Assets/activities/act-5.jpg",
        "/Assets/racing/rac-1.jpg",
        "/Assets/racing/rac-2.jpg",
        "/Assets/racing/rac-3.jpg",
        "/Assets/racing/rac-4.jpg",
        "/Assets/parade/par-1.jpg",
        "/Assets/parade/par-2.jpg",
        "/Assets/parade/par-3.jpg",
        "/Assets/parade/par-4.jpg",
        "/Assets/activities/act-6.jpeg",
        "/Assets/activities/act-7.jpg",
        "/Assets/activities/act-8.jpg",
        "/Assets/activities/act-9.jpeg",
        "/Assets/activities/act-10.png",
        "/Assets/racing/rac-5.jpg",
        "/Assets/racing/rac-6.jpg",
        "/Assets/racing/rac-7.jpg",
        "/Assets/racing/rac-8.jpg",
        "/Assets/parade/par-5.jpg",
        "/Assets/parade/par-6.jpg",
        "/Assets/parade/par-7.jpg",
        "/Assets/parade/par-8.jpg",
      ],
    },
    {
      title: "Racing",
      images: [
        "/Assets/racing/rac-1.jpg",
        "/Assets/racing/rac-2.jpg",
        "/Assets/racing/rac-3.jpg",
        "/Assets/racing/rac-4.jpg",
        "/Assets/racing/rac-5.jpg",
        "/Assets/racing/rac-6.jpg",
        "/Assets/racing/rac-7.jpg",
        "/Assets/racing/rac-8.jpg",
      ],
    },
    {
      title: "Parade",
      images: [
        "/Assets/parade/par-1.jpg",
        "/Assets/parade/par-2.jpg",
        "/Assets/parade/par-3.jpg",
        "/Assets/parade/par-4.jpg",
        "/Assets/parade/par-5.jpg",
        "/Assets/parade/par-6.jpg",
        "/Assets/parade/par-7.jpg",
        "/Assets/parade/par-8.jpg",
      ],
    },
    {
      title: "Activities",
      images: [
        "/Assets/activities/act-1.jpg",
        "/Assets/activities/act-2.jpg",
        "/Assets/activities/act-3.jpg",
        "/Assets/activities/act-4.jpg",
        "/Assets/activities/act-5.jpg",
        "/Assets/activities/act-6.jpeg",
        "/Assets/activities/act-7.jpg",
        "/Assets/activities/act-8.jpg",
        "/Assets/activities/act-9.jpeg",
        "/Assets/activities/act-10.png",
      ],
    },
  ];

  // Handle zoom via scroll or pinch
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prev) => Math.min(Math.max(prev + e.deltaY * -0.001, 1), 3));
  };

  // Handle mouse drag for panning
  const handleMouseDown = (e) => {
    if (zoom === 1) return;
    setDragging(true);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const handleMouseUp = () => setDragging(false);

  // Reset zoom when closing
  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

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

      {/* Image Grid */}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 md:top-6 md:right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black transition z-50"
            >
              <X size={24} />
            </button>

            {/* Zoomable Image */}
            <div
              className="relative w-full max-w-5xl h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.img
                src={selectedImage}
                alt="Zoomable"
                className="rounded-lg select-none max-h-[85vh] object-contain"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transition: dragging ? "none" : "transform 0.2s ease",
                }}
                draggable="false"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
