"use client";
import { useState } from "react";
import Image from "next/image";

export default function CurricularActivities() {
  const allImages = [
    "/Assets/curricular/co-1.png",
    "/Assets/curricular/co-2.png",
    "/Assets/curricular/co-3.jpg",
    "/Assets/curricular/co-4.jpg",
    "/Assets/curricular/co-5.png",
    "/Assets/curricular/co-6.jpeg",
    "/Assets/curricular/co-7.jpeg",
    "/Assets/curricular/co-8.jpeg",
    "/Assets/curricular/co-9.jpeg",
    "/Assets/curricular/co-10.jpeg",
    "/Assets/curricular/co-11.jpeg",
    "/Assets/curricular/co-12.jpeg",
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allImages.length));
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#ECECEC]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00306E]">
          Co-Curricular Activities
        </h2>
        <div className="w-20 sm:w-24 h-[3px] bg-[#D2093C] mx-auto mt-3"></div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allImages.slice(0, visibleCount).map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => setSelectedImage(src)} // open modal
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-52 sm:h-56 md:h-60 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allImages.length && (
        <div className="text-center mt-5">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#00306E] text-white rounded-full font-medium hover:bg-[#D2093C] transition-all"
          >
            Load More
          </button>
        </div>
      )}

      {/* ✅ Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold z-50 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Image */}
            <div className="flex justify-center items-center">
              <Image
                src={selectedImage}
                alt="Preview"
                width={1000}
                height={700}
                className="rounded-lg shadow-2xl w-full h-auto max-h-[80vh] object-contain transition-transform duration-300 transform scale-100 hover:scale-105"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
