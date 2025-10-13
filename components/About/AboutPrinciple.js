"use client";
import Image from "next/image";
import { useState } from "react";

export default function AboutPrinciple() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleZoom = () => setZoom(zoom === 1 ? 1.5 : 1);

  return (
    <section className="bg-[#0A3874] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px] md:h-[800px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Assets/about-slider/principal-img.jpeg"
            alt="Principal"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          {/* Dash + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[3px] bg-[#D2093C]"></div>
            <h2 className="text-3xl font-bold text-white">
              A Message from the Principal
            </h2>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-100 leading-relaxed text-justify">
            ‘If your actions inspire others to dream more, learn more, do more
            and become more, you are a leader.
            <br />
            <span className="font-semibold">John Quincy Adams</span>
            <br />
            Dear Children,
            <br />
            All great leadership is personal leadership. Great leadership is not
            trained or modeled. It is lived. Others see the inspiration emanates
            from great leaders- it comes from their soul. Change and inspire
            your life to slow down the personality long enough for the soul to
            be heard. You are the shaper of your destiny. Introspect and try to
            come up with definite answers to the following questions : <br />
            <span className="font-semibold">Define your destiny</span> -Why are
            you here?
            <br />
            <span className="font-semibold">Define your cause</span> – How will
            you be? & what will you stand for?
            <br />
            <span className="font-semibold">Define your calling</span> – What
            will you do?
            <br />
          </p>

          <p className="text-gray-100 leading-relaxed text-justify">
            Once you have arrived at the satisfactory answers to these
            questions, you will be in the position to align your destiny, cause
            and calling. You would have found the purpose of your life. You will
            automatically exude strength, vision, calm and humility of a natural
            leader. In a nutshell, you have to lead your soul to greatness…. to
            become your own leader first and then the world will follow you.
          </p>

          <p className="text-gray-100 leading-relaxed">
            Welcome to MGIS….. A School for leaders!
          </p>

          <p className="text-gray-100 font-semibold leading-relaxed">
            Principal
          </p>

          {/* Button to open modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#D2093C] text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-95"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 md:p-8"
          onClick={() => setIsModalOpen(false)} // Close modal on outside click
        >
          <div
            className="relative w-full max-w-3xl rounded-lg overflow-hidden bg-black bg-opacity-20 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-700 transition z-10"
            >
              ×
            </button>

            {/* PDF Preview Image */}
            <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
              <Image
                src="/Assets/about-slider/pdf.png" // PDF preview image
                alt="PDF Preview"
                fill
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.3s",
                }}
                className="object-contain"
              />
            </div>

            {/* Modal Actions */}
            {/* Modal Actions */}
            <div className="flex justify-end gap-3 p-4">
              {/* Zoom Button */}
              <button
                onClick={handleZoom}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                {zoom === 1 ? "Zoom In" : "Zoom Out"}
              </button>

              {/* Download Image Button */}
              <a
                href="/Assets/about-slider/pdf.png" // <-- This is the image being shown
                download="PDF_Preview.png" // Name for downloaded image
                className="bg-[#D2093C] text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
