"use client";
import Link from "next/link";

export default function AchievementBanner() {
  return (
    <section className="py-16 px-6 bg-[#121938] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Div - Image with background blocks */}
        <div className="relative mt-5 flex justify-center items-center min-h-[400px] md:min-h-[450px]">
          {/* Top-left Red block with white dots */}
          <div
            className="absolute top-0 left-0 w-[85%] h-[75%] rounded-lg"
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
            className="relative z-10 rounded-lg shadow-xl w-[80%] md:w-[90%] lg:w-[95%] max-w-md -mt-12 -ml-8"
          />
        </div>

        {/* Right Div - Text content */}
        <div className="flex flex-col justify-between bg-transparent text-white p-6">
          {/* Heading & Subheading */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-2">
              <span className="w-16 h-1 bg-red-600 block"></span>
              <h4 className="text-white font-semibold text-center sm:text-left">
                ACHIEVE GREAT EDUCATION
              </h4>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">Achievement</h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 mt-3 flex-1">
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
            <div className="mt-2">
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
