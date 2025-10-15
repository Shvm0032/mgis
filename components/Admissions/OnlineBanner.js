"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnlineBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/Assets/admission/online-banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#072334]/90"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
        {/* Left Div */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Online Payment
          </h2>

          <p className="text-lg mb-6 text-gray-200 flex items-center justify-center uppercase tracking-wide">
            <span className="w-10 h-[2px] bg-[#D2093C] mr-3"></span>
            Click Here
            <span className="w-10 h-[2px] bg-[#D2093C] ml-3"></span>
          </p>

          {/* Button */}
           <Link href="https://www.eduqfix.com/PayDirect/#/student/pay/Lb69PzJK1cv5KkYDCEfFpTR4IoJNU2eSAiI8UrPtNJdzv7ZH2HR5AcCl8o9hAJTv/1362">
      <button className="bg-[#D2093C] text-white font-semibold px-6 py-3 hover:cursor-pointer transition-all duration-300 hover:bg-[#072334] hover:text-white border-2 border-[#D2093C]">
        Click Here To Pay
      </button>
    </Link>
        </div>

        {/* Right Div (optional) */}
        <div className="hidden md:flex justify-center">
          {/* Points */}
          <div className="mt-8 space-y-3">
            {[
              "Innovative & Sustainable Designs",
              "Top-quality materials and craftsmanship",
              "Comprehensive maintenance support",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Check size={18} className="text-[#072334]" />
                </div>
                <span className="text-gray-200">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
