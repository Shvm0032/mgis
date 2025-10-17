"use client";
import Link from "next/link";

export default function AchievementBanner() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#121938] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Div - Image with background blocks */}
        <div className="relative flex justify-center items-center min-h-[280px] sm:min-h-[380px] md:min-h-[450px] order-2 md:order-1">
          {/* Top-left Red block with white dots */}
          <div
            className="absolute top-0 left-0 w-[90%] h-[80%] rounded-lg"
            style={{
              backgroundColor: "#D2093C",
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 2px)",
              backgroundSize: "10px 10px",
            }}
          ></div>

          {/* Bottom-right Blue block */}
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#121938] rounded-lg"></div>

          {/* Main Image */}
          <img
            src="/Assets/studentlife/student-slider-1.png"
            alt="Achievement"
            className="relative z-10 rounded-lg shadow-2xl w-[85%] sm:w-[75%] md:w-[90%] max-w-sm sm:max-w-md object-cover translate-x-[-8px] translate-y-[10px]"
          />
        </div>

        {/* Right Div - Text content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-5 p-2 sm:p-4 md:p-6 order-1 md:order-2">
          {/* Heading & Subheading */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-2">
              <span className="w-16 h-1 bg-red-600 block"></span>
              <h4 className="text-white font-semibold">ACHIEVE GREAT EDUCATION</h4>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">Achievement</h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 mt-3">
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              At MGIS, achievement is not just measured by academic success but
              by the overall growth of an individual. Our focus is on creating
              an enjoyable learning environment that encourages children to
              explore and express their talents to the fullest.
            </p>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Every child deserves the chance to experience success to promote
              self-esteem and nurture curiosity, fostering exploration as a key
              part of learning from their surroundings.
            </p>

            {/* Button */}
            <div className="pt-2">
              <Link href="/about-us">
                <button className="bg-white text-[#121938] cursor-pointer px-6 py-2 rounded-lg font-semibold hover:bg-[#D2093C] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
