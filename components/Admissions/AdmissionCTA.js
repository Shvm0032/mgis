"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionCTA() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Attested Birth Certificate",
      answer:
        "An attested photocopy of the birth certificate. The original birth certificate must be brought to the school at the time of admission. This will be returned after verification.",
    },
    {
      question: "Transfer Certificate, Character Certificate",
      answer:
        "A valid transfer Certificate and Character Certificate issued by the principal from the school last attended must be submitted on the joining day, failure to produce the admission will remain provisional. lavatory pukka at public school..",
    },
    {
      question: "Medical Certificate",
      answer:
        "All new entrants are required to produce a medical certificate that they are free from any contagious and infectious disease and are otherwise physically fit to be admitted to the school.",
    },
    {
      question: "Photographs",
      answer: "",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-20 pb-28 px-6"
      style={{ backgroundImage: "url('/Assets/admission/admission-cta.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl text-[#00306E] font-bold">
            Have Any Questions? Look Here.
          </h2>
          <p className="text-lg text-gray-600">
            The complete Registration Form must be sent along with the following
            documents.
          </p>
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-[#D2093C] text-white font-semibold px-6 py-3 transition-all duration-300 hover:bg-[#072334] border-2 border-[#D2093C] cursor-pointer">
              Contact Us <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-gray-600 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div
                className="flex justify-between items-center px-4 py-3"
                onClick={() => toggle(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="px-4 py-3 border-t border-gray-200 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
