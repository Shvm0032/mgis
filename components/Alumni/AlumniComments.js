// components/TestimonialSlider.jsx
'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AlumniComments = () => {
  const swiperRef = useRef(null);

  // Sample testimonial data
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

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="pt-12 pb-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          What Our Alumni Say
        </h2>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        
        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col mx-2">
                  {/* Name and Designation */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#00306E]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#D30B3C]">
                      {testimonial.designation}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-justify text-sm mb-4 flex-grow">
                    {testimonial.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="mt-auto">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10 -ml-4"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10 -mr-4"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .testimonial-swiper {
          padding: 20px 0;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AlumniComments;