'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#0A3874] text-white py-8 px-3 md:py-10 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Subheading + Red Dash (Centered) */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 sm:w-12 h-[3px] bg-[#D2093C]"></div>
          <span className="uppercase tracking-widest text-xs sm:text-sm">Who We Are</span>
        </div>

        {/* Main Heading (Centered) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-5">About Us</h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Image */}
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              src="/Assets/about-1.jpeg"
              alt="About Image"
              width={600}
              height={400}
              className="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-4 sm:space-y-6 text-gray-200 leading-relaxed text-justify text-sm sm:text-base">
            <p>
              MGIS offers classes from Lower Kindergarten to Grade XII. The curriculum followed by MGIS is prescribed by the Central Board of Secondary Education (CBSE), New Delhi. Mahatma Gandhi International School strives to provide quality education that ensures the physical, emotional, spiritual, social, and aesthetic development of the child in addition to academic excellence.
            </p>
            <p>
              Sprawled over 20 acres the campus is designed to nurture young minds. The lush green surroundings in a zero-pollution zone and the ideal infrastructure and comfortable transport facilities provide the right ambience for learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
