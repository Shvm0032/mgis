"use client";
import Image from "next/image";

export default function AnnualCalender() {
  return (
    <section
      className="relative pt-20 pb-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Assets/about-slider/about-4.jpeg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden p-8 md:flex md:items-stretch gap-8">
          
          {/* Left Image */}
          <div className="md:w-1/2 w-full flex-shrink-0">
            <Image
              src="/Assets/annual/calender.jpeg" 
              alt="Informative"
              width={600}
              height={400}
              className="rounded-lg object-cover h-[500px] w-full"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-start space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              ANNUAL ACADEMIC CALENDAR 2023-2024
            </h2>
            <div className="w-20 h-1 bg-[#D70F40] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              Year-at-a-glance calendars feature school holidays, term and instruction start and end dates. The calendar archive contains calendars from 2023-2024 academic years.
            </p>

            {/* YouTube Video */}
            <div className="w-full">
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md border border-gray-200"
                  src="https://www.youtube.com/embed/NbhrLl52lH8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
