"use client";

import Image from "next/image";

export default function Classes() {
  return (
    <>
      <section className="py-16 px-6 bg-[#F6F8FB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-stretch">
          {/* LEFT SIDE (Main Content) */}
          <div className="md:col-span-2 flex flex-col justify-between h-full">
            {/* Heading with dash beside */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-[3px] bg-[#D2093C]"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A3874]">
                CLASSES I TO V
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
              At this stage too, the curriculum supports experiential learning,
              focuses on conceptual clarity by relating learning to everyday
              life, developing thinking and analytical skills. The curriculum
              also aims at nurturing the affective domain of the learners
              through subjects and activities which will help develop the basic
              life skills in the learner – self-awareness, effective
              communication skills and emotional strength. The pedagogy at this
              stage is not absolutely fixed, structured or prescribed but it is
              multi-dimensional and flexible, which gives the learner ample
              opportunities to explore and discover.
            </p>

            {/* Bold Subheading */}
            <h3 className="text-xl md:text-xl font-semibold text-gray-900 mb-3">
              The learning areas include:
            </h3>

            {/* Ordered List */}
            <ol className="list-decimal list-inside text-gray-700 text-base md:text-md leading-relaxed space-y-2 mb-6">
              <li>
                Languages (English, Hindi) – Acquire the skills of listening,
                speaking, reading & writing, acquire varied range of vocabulary,
                develop interpersonal communication skills and express
                meaningfully.
              </li>
              <li>
                Mathematics – Performing operation of numbers, understanding
                shapes, similarities and differences, collecting data,
                representing and analysing the data, identifying patterns in
                shapes and numbers etc.
              </li>
              <li>
                Environmental Science – To make them aware of their
                surroundings, appreciative of and sensitive of environmental
                issues (natural, physical, social and cultural)
              </li>
              <li>Information & Communication technology</li>
              <li>General Knowledge</li>
              <li>Visual Arts & Performing Arts</li>
              <li>Physical & Health Education, Yoga, Karate</li>
              <li>Life skills & Value Education</li>
            </ol>

            {/* Two Paragraphs */}
            <p className="text-gray-700 text-base md:text-md leading-relaxed mb-4">
              Children also get opportunities to join various hobby clubs as per
              their interest and aptitude. They participate in intra-section and
              inter-section competitions, class assemblies, annual days
              celebrations and social awareness campaigns.
            </p>
            <p className="text-gray-700 text-base md:text-md leading-relaxed">
              The scheme of Continuous and Comprehensive Evaluation (CCE), as
              designed and laid out by the CBSE & NCERT, is followed in the
              Junior School. Formal test & Exams are introduced in Class III.
            </p>
          </div>

          {/* RIGHT SIDE (Blue Box) */}
          <div className="bg-[#00306E] text-white rounded-2xl p-10 flex flex-col justify-center md:col-span-1 h-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              School Timing
            </h2>
            <p className="text-xl md:text-2xl font-semibold">Mon to Sat :-</p>
            <p className="text-2xl md:text-3xl font-bold mt-2">
              7.45 am to 2.15 pm
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT DIV */}
          <div className="flex flex-col items-center h-full text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3874] mb-2">
              MIDDLE SCHOOL & HIGH SCHOOL
            </h2><br/>

            {/* Subheading */}
            <h3 className="text-md md:text-xl text-gray-700 mb-4">
              Subjects Taught in Various Classes
            </h3><br/>

            {/* Divider */}
            <div className="w-24 h-1 bg-[#00306E] mb-6 mx-auto"></div>

            {/* Image */}
            <Image
              src="/Assets/academy/middle.png"
              alt="Junior School"
              className="rounded-lg mb-4"
              width={600}
              height={400}
              priority
            />

            {/* School Timing */}
            <p className="text-base md:text-lg text-gray-800 font-semibold">
              School Timing – Mon to Sat -7.45 am to 2.15 pm
            </p>
          </div>

          {/* RIGHT DIV */}
          <div className="flex flex-col items-center h-full text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3874] mb-1">
              Science, Commerce and Humanities are offered at Senior Secondary
              Level.
            </h2>

            {/* Subheading */}
            <h3 className="text-md md:text-xl text-gray-700 mb-1">
              Subjects Taught in Various Classes
            </h3>

            {/* Divider */}
            <div className="w-24 h-1 bg-[#00306E] mb-1 mx-auto"></div>

            {/* Image */}
            <Image
              src="/Assets/academy/senior.png"
              alt="Senior School"
              className="rounded-lg mb-4"
              width={600}
              height={400}
              priority
            />

            {/* School Timing */}
            <p className="text-base md:text-lg text-gray-800 font-semibold">
              Note: Work Experience, Art Education, Physical Education and
              Sports are also compulsory for the students. School Timing – Mon
              to Sat -7.45 am to 2.15 pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
