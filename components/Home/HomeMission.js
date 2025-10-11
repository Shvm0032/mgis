'use client';
import { FaGraduationCap, FaBook, FaUsers, FaBasketballBall } from 'react-icons/fa';
import { IoAlarmSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";

export default function HomeMission() {
  const cards = [
    {
      icon: <IoAlarmSharp size={40} className="text-[#D2093C]" />,
      title: 'Digital Classrooms',
      desc: 'Well-equipped, IT-enabled classrooms with multimedia projectors to make the learning more interactive. Spacious and airy classrooms with custom designed furniture to suit student requirements.',
    },
    {
      icon: <FaGraduationCap size={40} className="text-[#D2093C]" />,
      title: 'Library & Activity Room',
      desc: 'Well stocked library with carefully selected fictional and reference books across all ages. Students enjoy learning music, dance, dramatics and innovative art & craft activities.',
    },
    {
      icon: <PiCertificateFill size={40} className="text-[#D2093C]" />,
      title: 'Science Labs & Tech Center',
      desc: 'Well equipped labs that aid hands-on learning to support the classroom learning. Integrates new technology into the learning experience. Modern technology center with latest computers to aid practical learning.',
    },
    {
      icon: <FaBasketballBall size={40} className="text-[#D2093C]" />,
      title: 'Dining Facility',
      desc: 'Central dining hall with varied cuisine providing wholesome and balanced vegetarian food. The School has a clean and hygienic vegetarian kitchen which provides sumptuous meals.The menu is prepared considering children’s choice and food habits.',
    },
  ];

  return (
    <section id='mission' className="bg-white scroll-mt-20 pt-10 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center pb-10">
        {/* Subheading */}
        <p className="text-sm uppercase tracking-widest text-[#D2093C] mb-2">
          Greate Quality Education
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0A3874] mb-4">
          Our Mission
        </h2>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#D2093C] mx-auto mb-12"></div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-xl p-8 shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-[#0A3874] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
