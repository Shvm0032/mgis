"use client";

import Image from "next/image";

export default function BoardingFacility() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-[#422E59] font-bold mb-2">
          About our Boarding Facility
        </h2>
        <div className="w-24 h-1 bg-[#F7DC79] mx-auto rounded"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left: Paragraph */}
        <div className="flex-1 flex items-center">
          <p className="text-gray-700 text-md">
            MGIS is attached with an elegant boarding facilities for its
            students and teachers and build an ambience that fosters sound
            values, personal development and discipline. At MGIS, we offer
            boarding facility for students above grade 3 along with
            accommodation for house-parents. There are separate boarding houses
            for boys and girls. We also offer WEEKDAY BOARDING apart from
            full-time boarding. Weekday boarders live in boarding facility from
            Monday to Friday and spends quality time with parents over the
            weekends. The spacious and well maintained boarding facilities are
            self-sufficient in all respects with hygienic washrooms, common
            rooms, emergency medical aid, and access to computers centers.
            Boarders can look forward to the entire range of sporting and
            recreational activities on campus.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative">
          <Image
            src="/Assets/boarding/boarding.png"
            alt="Example Image"
            width={600}
            height={400}
            className="object-content w-full h-[300px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
