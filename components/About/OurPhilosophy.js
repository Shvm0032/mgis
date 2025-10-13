"use client";
import Image from "next/image";

export default function OurPhilosophy() {
  return (
    <section className="bg-[#EEF2F8] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
        
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center  p-8  flex-1">
          <h2 className="text-3xl font-bold text-[#0A3874] mb-4">
            Our Philosophy
          </h2>
          {/* Divider */}
          <div className="w-16 h-[3px] bg-[#D2093C] mb-6"></div>
          
          {/* Paragraph */}
          <p className="text-gray-700 text-justify leading-relaxed">
            MGIS has been conceived to optimize student potential in an atmosphere of freedom, fun and parent –like care. The school as well its cultural ambience, is planned in such a way as to enrich the teaching learning process and to foster reflective assimilation.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Life at MGIS is a synthesis –a harmonious blend of academic , cultural, physical ,social and intellectual inputs. The school believes in multiple intelligence and misses no opportunity for holistic living.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            The pillars of our pedagogy are learning through enquiry, conceptual understanding, differentiated instructions and technology integration.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 w-auto h-[400px] relative overflow-hidden">
          <Image
            src="/Assets/about-slider/philosophy.jpg" 
            alt="School Campus"
            fill
            className="object-content"
          />
        </div>
      </div>
    </section>
  );
}
