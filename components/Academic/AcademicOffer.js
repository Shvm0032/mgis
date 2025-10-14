"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function AcademicOffer() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ICT in classrooms",
      answer: [
        "MGIS integrates technology into the curriculum and implements 21st century learning best practices. The school provides state of the art computing facilities and implements the fastest fiber internet connectivity to cater to the needs of school.",
        "The entire campus is wifi enabled and the classrooms are equipped with technology .",
        
      ]
    },
    {
      question: "Sports",
      answer: [
        "MGIS offers a variety of sporting activities to improve health and fitness of our students, nurture individual talents whilst enabling them to enjoy recreational benefits.",
        "The sports classes are compulsory for all and introduce students to various games and activities to develop fitness, physical skills, versatility and sense of fair play."
      ]
    },
    {
      question: "Library",
      answer: [
        "The library is a well coming and dynamic hub that fosters information and media literacy , critical thinking , collaboration and reading appreciation.",
        "The collection includes over thousands of print books for classes from Nur to 12 and resources for teachers’ development. MGIS is also in the process of setting up a digital library so students can access digital and multimedia collections.",
        "Students have 40 mins weekly sessions for reading appreciation, story time, and fun reading activities. Small classroom libraries are also run by students to encourage collaborative learning.",
        "Apart from above, to inculcate love of reading and sharing and develop collaborating skills, small classroom libraries have been created in class which is run by students ."
      ]
    },
    {
      question: "Student Care Services",
      answer: [
        "Remedial Teaching",
        "In response to the needs of children with learning difficulties or children who have come from diverse educational backgrounds, the school has a remedial program that is designed to work as a bridge to the curriculum.",
       "Career Counselling"
      ]
    },
    {
      question: "Counsellors",
      answer: [
        "At MGIS ,teachers and the school provide guidance through trained counsellors to help students in personal, academic and career options.",
      ]
    },
    {
      question: "Service Learning",
      answer: [
        "To instill the values of care, compassion and empathy, MGIS through has integrated experiential learning with enduring service learning . These activities enrich the learning experience, teaches civic responsibility , brings about social change and strengthen communities.",
        "Students from Grade III onwards are involved in age appropriate community service activities. It connects students learning in classrooms with real world experiences in the community. Students gain practical skills, develop their career and personal interest, and are usually more engaged citizens.",
        "The small acts, when multiplied by millions of people, can transform the world.",
        "The best way to find yourself is to loose yourself in service to others…Mahatma Gandhi."
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-28 pt-10 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#00306E] mb-4">
          We offer: Football, Cricket, Volleyball, Table Tennis, Badminton, Basketball, Athletics, Karate & Yoga.
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#D1093A] mx-auto mb-10"></div>

        {/* Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-[#00306E] hover:cursor-pointer text-white px-6 py-4 font-semibold text-lg md:text-xl focus:outline-none"
              >
                {faq.question}
                <span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* Accordion Body */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-800 text-base md:text-md">
                  {faq.answer.map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
