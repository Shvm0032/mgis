"use client";
import Image from "next/image";

export default function OurInspiration() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/Assets/home-slider/bg-vision.webp')" }} 
    >
      {/* Overlay (optional, for dark tint effect) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl text-[#00306E] font-bold mb-4">Our Inspiration</h2>
          <div className="w-20 h-[3px] bg-[#DC1445] mb-6"></div>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            Late Shri Jai Kumar Jain epitomised the pioneering spirit of man . His exceptional leadership qualities, dynamism, courage of conviction and unwavering commitment to excellence continues to guide us and inspire us.
          </p>
          <p className="text-lg text-gray-700 text-justifyleading-relaxed">
            He will always be an exemplary role model for us and for all who aspire to achieve the impossible and strive to transform their dream into reality.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            Inspired by the vision of his parents, Shri Jain ,established the Raj Bai Anusuya Devi Gulechha Memorial Charitable Trust with the intention to provide realistic and holistic education to children ,world over.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            His parents, Late Shri Manmullji Gulechha and Smt Anusuya Devi Gulechha, over the course of their lives strongly believed that social welfare and education are the most important pillars in sustaining and developing any society. Their unfaltering resolve to provide for and build these pillars has and continues to inspire people from many parts of India.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Assets/about-slider/inspiration.jpeg" 
            alt="School Building"
            fill
            className="object-content"
          />
        </div>
      </div>
    </section>
  );
}
