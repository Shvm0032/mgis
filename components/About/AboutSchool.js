"use client";
import Image from "next/image";

export default function AboutSchool() {
  return (
    <section className="bg-white pb-16 pt-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Divider */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A3874] mb-4">
            Welcome to The School
          </h2>
          <div className="w-20 h-[3px] bg-[#D2093C] mx-auto"></div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Text */}
          <div className="space-y-6 text-gray-700 text-justify">
            <p>
              Mahatma Gandhi International School is a K-12, co-educational, day
              cum residential school established in 2003, with a view to offer
              holistic education in the city of Port Blair, Andaman & Nicobar
              Islands. The school intends to offer world class facilities at
              affordable costs.
            </p>
            <p>
              The school is affiliated to CBSE (Central Board of Secondary
              Education), New Delhi.
            </p>
            <p className="font-semibold text-justify">
              MGIS is a member of several leading organisations like:
            </p>
            <ul className="list-disc pl-6 text-justify space-y-2 text-gray-700">
              <li>Federation of Jain Educational Institutions (FJEI)</li>
              <li>National Independent Schools Association</li>
              <li>Sahodaya Port Blair</li>
            </ul>
            <p className="text-justify">
              The student body comprises of 500 students in 2022 and 40 teachers.
              The faculty is hand picked and drawn from various parts of the
              country to develop the skills, capacities and competencies of the
              child. With a teacher student ratio of 1:25, every student enjoys
              individual attention.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Assets/school.jpg"
              alt="Our Story Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
