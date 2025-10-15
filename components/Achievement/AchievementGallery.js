"use client";

import { useState } from "react";
import Image from "next/image";

export default function AchievementGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/Assets/achievement/gallery/g1.png",
    "/Assets/achievement/gallery/g2.png",
    "/Assets/achievement/gallery/g3.png",
    "/Assets/achievement/gallery/g4.png",
    "/Assets/achievement/gallery/g5.png",
    "/Assets/achievement/gallery/g6.png",
    "/Assets/achievement/gallery/g7.png",
    "/Assets/achievement/gallery/g8.png",
    "/Assets/achievement/gallery/g9.png",
    "/Assets/achievement/gallery/g10.png",
  ];

  return (
    <section className="pt-16 pb-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h3 className="text-red-600 font-semibold tracking-wide">
          OUR GALLERY
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#121938] mt-2">
          Explore Our Campus Moments
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1000}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
