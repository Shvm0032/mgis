"use client";

export default function AcademicProgramme() {
  return (
    <section className="py-16 px-6 bg-white text-center md:text-left">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-4">
          Academic Programmes
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#D2093C] mx-auto  md:mx-auto mb-6"></div>

        {/* Paragraph */}
        <p className="text-gray-600 text-base text-center md:text-md leading-relaxed">
          The Academic programme at MGIS is as prescribed by our affiliating body, CBSE ( Central Board of Secondary Education), New Delhi. It is the largest educational board in the country .
        </p>
        <p className="text-gray-600 text-base text-center md:text-md leading-relaxed">
          Mahatma Gandhi International School, Port Blair is affiliated to CBSE with classes from Nursery to XII and is duly recognised by the Directorate of Education , Andaman & Nicobar Islands.
        </p>
      </div>
    </section>
  );
}
