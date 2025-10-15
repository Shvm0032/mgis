"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aman Verma",
    designation: "Student",
    description:
      "Mahatma Gandhi International School has one of the best necessary infrastructure, facilities and schooling environment. Starting from classrooms to the playground, everything is well maintained. The library has varieties of books and updated journals. They are well maintained.",
    rating: 5,
  },
  {
    name: "Bibek Saha",
    designation: "2007",
    description:
      "I received from my teachers is exactly what anyone needs in their young age. Now I can proudly say that MGIS, formally known by us as Blair International School is a Corner Stone in my life. I had the best time of my life at the school and cherish each moment lived there.",
    rating: 4,
  },
  {
    name: "Ramji Vasakam",
    designation: "Batch 2004-2009",
    description:
      "MGIS/BIS has played an important part in my career. The place where my foundation began. The infra and setup not only concentrates on studies but also in extracurricular activities which boosts your inner confidence at different levels of your path, so happy being a part.",
    rating: 5,
  },
  {
    name: "Darshan Kumar",
    designation: "2015-2017",
    description:
      "School is the first and foremost place where children try to make new friends. MGIS was one of the best school days memories for me where I was explore with many cultures activities. I would like thank all the faculty member who helped me for growing up my personality.",
    rating: 4,
  },
];

// 🔹 Custom Arrow Components
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#DA2351] hover:bg-[#121938] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-20 transition"
      onClick={onClick}
    >
      <ChevronRight size={22} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[#DA2351] hover:bg-[#121938] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-20 transition"
      onClick={onClick}
    >
      <ChevronLeft size={22} />
    </div>
  );
}

export default function AlumniComments() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="pt-16 pb-28 px-6 bg-[#FFFFFF] relative">
      {/* Heading + Divider */}
      <div className="text-center mb-10">
        <h2 className="md:text-3xl text-2xl text-[#121938] font-bold mb-2">
          What Our Past Students Say
        </h2>
        <div className="w-28 h-1 bg-[#DA2351] mx-auto rounded-full"></div>
      </div>

      {/* Slider Container (relative for arrows) */}
      <div className="relative max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                <h3 className="text-xl text-[#121938] font-semibold mb-1">
                  {t.name}
                </h3>
                <p className="text-[#DA2351] text-sm mb-3">{t.designation}</p>
                <p className="text-gray-700 text-sm mb-4 flex-1">
                  {t.description}
                </p>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
