"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BoardingAcc() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Boarding Houses",
      answer: [
        "Welcome to our school hostel! Our hostel is a home away from home, providing a safe and comfortable living space for students from diverse backgrounds. Situated within the school campus, it offers easy access to all school facilities. Presently the school has two boarding houses ;one each for girls and boys . Each Boarding house lodges the junior, middle and senior dorms and is taken care of by Wardens. Each room is well furnished, creating a conducive environment for studying and relaxation. Clean wash facilities and well organised laundry service help students live and grow in an environment that they can identify as home. The campus is also under CCTV surveillance and has round the clock security for the safety of its students.",
        
      ]
    },
    {
      question: "Dining Facilities",
      answer: [
        "We understand the importance of a healthy lifestyle ,which is why our kitchen provides vegetarian,nutritious and delicious meals ,catering to various dietary preferences. The inmates are served wholesome Morning breakfast, Morning Milk , Balanced Lunch ,Evening Refreshments, Dinner and Night Milk. Water purifiers are installed in both hostels to provide 24 hrs clean and safe drinking water."
      ]
    },
    {
      question: "Supervised Study (Prep)",
      answer: [
        "We prioritize students academic growth and well being .Supervised study hours are mandatory for all boarders in the Study Halls. Students are provided access to computer and internet as well. Access to internet is supervised to avoid misuse. The students who wish to study late will do so, with the permission of the Warden."
      ]
    },
    {
      question: "Recreation",
      answer: [
        "Moreover, our hostel promotes a sense of community and friendship amongst students.Regular, events, outings and group activities foster a friendly atmosphere,encouraging students to form lasting bonds with their peers. A recreation room has also been set up with a small library, television,indoor games and music . Students are free to use the recreation room during their free time."
      ]
    },
    {
      question: "Medical Facility",
      answer: [
        "MGIS has standing arrangements for emergency medical aid with reputed hospitals in the vicinity. To ensure sound health of our students ,medical checkups are conducted time to time.",
      ]
    },
    {
      question: "Communication",
      answer: [
        "TParents & guardians can stay connected with their children through regular updates and communication channels. We believe in maintaining a strong parent –school –hostel partnership to ensure overall development of the child.",
        "We invite students to experience the warm and inclusive environment of our school hostel ,where lifelong memories are made ,friendships are cherished and personal growth is nurtured."
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
          Boarding House Facilities
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
