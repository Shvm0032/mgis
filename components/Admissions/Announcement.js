"use client";
import Image from "next/image";
import Link from "next/link";

export default function Announcement() {
  return (
    <section className="bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Div */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading with dashes */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-8 h-[2px] bg-[#D2093C] mr-2 md:mr-3"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Announcements
            </h2>
            <span className="w-8 h-[2px] bg-[#D2093C] ml-2 md:ml-3"></span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            MGIS entry is open to all qualified students at all grade levels and
            full residential students are admitted from grade 3. The academic
            year begins in April and admission forms are available in the month
            of December and January. Admissions are confirmed in March based on
            existing vacancies on the basis of entrance tests and interviews.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link href="/contact">
              <button className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-[#D2093C] bg-white text-[#D2093C] font-semibold transition-all duration-300 hover:bg-[#D2093C] hover:text-white">
                Get Free Guide
              </button>
            </Link>
          </div>
        </div>

        {/* Right Div (Image) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Assets/admission/announce.jpg"
            alt="Announcements"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-w-sm sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
