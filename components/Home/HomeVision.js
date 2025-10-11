"use client";
import { ArrowRight } from "lucide-react";

export default function HomeVision() {
  return (
    <section
    id="our-vision"
      className="relative scroll-mt-20 bg-cover bg-center bg-no-repeat text-center text-white py-20 px-6 md:px-12"
      style={{
        backgroundImage: "url('/Assets/home-slider/bg-vision.webp')", // ← apni image ka path yahan do
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#00306E] font-bold mb-2">
          Our Vision
        </h2>

        {/* Subheading */}
        <p className="text-lg mb-4 text-[#00306E]">
          Mahatma Gandhi International School
        </p>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto my-6"></div>

        {/* Bold small description */}
        <p className="text-md font-semibold  tracking-wide text-gray-600">
          Established in 2004, MGIS is a co-education, day scholar cum boarding
          school situated in Portblair, the capital city of the pristine
          archipelago of Andaman & Nicobar Islands.
        </p>

        {/* Paragraphs */}
        <p className="text-gray-600 mt-6 leading-relaxed">
          Tapping the inherent brilliance of every child to achieve academic
          excellence. Nurturing the individuality of every child and the growth
          of his spirit. Helping the child evolve as a thinking person with a
          mind of his own so that he can carve out his own niche in the world.
          Making every child grow into a good human being and a responsible
          citizen. Broadening of horizons by bringing children from books and
          life together. Being aware of our planet and knowing to care for it.
          Equipping the child with all the required life skills so that he may
          not only be able to build castles in the air but also lay strong
          foundations beneath them.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Inspired by the ideas and vision of his parents, Late Shri Manmull
          Gulechha and Smt Anusuya Devi, Shri Jain has been instrumental in
          establishing Rajbai Anusuya Devi Gulechha Memorial Charitable Trust
          with the intention of providing realistic and holistic education to
          children the world over. MGIS intends to offer world-class facilities
          at affordable costs.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="inline-flex items-center gap-2 bg-[#D2093C] text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-95">
            Read More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
