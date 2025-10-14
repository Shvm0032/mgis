"use client";

import { FaBookReader , FaFootballBall , FaClinicMedical , FaHotel  } from "react-icons/fa";

export default function BoardingCards() {
  const cards = [
    {
      icon: <FaBookReader  size={40} />,
      title: "Supervised Study",
      description: "Prep (Supervised Study) helps the children revise the learnings from the class. Children are free to study, read or play indoor games in the study halls. Access to the Internet will be supervised to prevent misuse.",
    },
    {
      icon: <FaFootballBall  size={40} />,
      title: "Activities",
      description: "MGIS offers hobby classes for full-time and weekday boarders for karate, dance, art & craft, sports and cooking. On weekends, boarders also get to visit amusement parks, places of historical interest, or go on picnics every now and then.",
    },
    {
      icon: <FaClinicMedical  size={40} />,
      title: "Medical Facilities",
      description: "MGIS has standing arrangements for emergency medical aid with reputed hospitals in the vicinity. To ensure sound health of our students, medical checkups are conducted regularly.",
    },
    {
      icon: <FaHotel  size={40} />,
      title: "The Dormitory",
      description: "The dormitory provides an environment that children identify as home.They are maintained by matrons under the supervision of house masters who help students’ overall academic progress and development.",
    },
  ];

  return (
    <section className="border-t-8 border-b-8 border-l-2 border-[#F7DC79]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-5 border-2 border-[#F7DC79] bg-[#f0f4ff] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <div className="mb-4 text-[#422E59]">{card.icon}</div>
            <h3 className="text-xl text-[#422E59] font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-800 text-md">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
