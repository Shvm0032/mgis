'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#0A3874] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Subheading + Red Dash (Centered) */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-12 h-[3px] bg-[#D2093C]"></div>
          <span className="uppercase tracking-widest text-sm">Who We Are</span>
        </div>

        {/* Main Heading (Centered) */}
        <h2 className="text-4xl font-bold text-center mb-5">About Us</h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center pb-15">
          {/* Left Image */}
          <div className="relative w-full h-full min-h-[350px] rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              src="/Assets/about-1.jpeg"
              alt="About Image"
              width={600}
              height={400}
              className="object-cover w-full h-[300px] rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6 text-gray-200 leading-relaxed text-justify ">
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
