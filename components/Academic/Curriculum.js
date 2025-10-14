"use client";

export default function Curriculum() {
  return (
    <section className="py-16 px-6 bg-[#F6F8FB] text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-4">
          Curriculum- Primary Level
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#D2093C] mx-auto  md:mx-auto mb-6"></div>

        {/* Paragraph */}
        <p className="text-gray-600 text-base  md:text-md leading-relaxed">
          The primary school curriculum is based on the NCERT guidelines and
          focuses on laying the foundations of knowledge, skills and attitudes
          which will guide the young learners for life.
        </p>
        <p className="text-gray-600 text-base md:text-md leading-relaxed">
          The KEY LEARNING DOMAINS which are focused are:
        </p><br/>
        <ul className="text-gray-600 text-base md:text-md leading-relaxed list-disc list-inside space-y-2">
          <li>
            Language and Literacy (Listening, Reading, Writing & Communication
            skills)
          </li>
          <li>Numeracy (Mathematical thinking and reasoning)</li>
          <li>
            Personal, Social & Emotional Development (Self Awareness & Social
            Awareness)
          </li>
          <li>Discovery of the World – (Environmental awareness)</li>
          <li>
            Motor Skills development (Physical & Health Education, Yoga, Karate,
            Dance)
          </li>
          <li>Aesthetics & Creative Expression (Art Education)</li>
        </ul>
      </div>
    </section>
  );
}
