"use client";

export default function SchoolTiming() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3874] mb-6">
            School Timings
          </h2>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-xl">Nursery</h3>
              <p>Mon to Fri – 9.00 am to 12.15 pm</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">LKG & UKG</h3>
              <p>Mon to Fri – 9.00 am to 2.15 pm</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Heading with dash */}
          <div className="flex items-center gap-4 mb-4">
             <div className="flex-1 h-[3px] bg-[#D2093C]"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3874]">
              PRE SCHOOL & KINDERGARTEN
            </h2>
           
          </div>

          {/* Paragraph */}
          <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
            Learning at this stage is experiential, fun & activity based. The pedagogical processes followed are based on developmentally appropriate methods with multiple teaching and learning strategies. The child is the central figure and an active participant in the teaching learning process. Children enjoy the freedom to explore, express, create and interact within their environment and gain knowledge.<br/>
            Children at this stage:
          </p>

          {/* List */}
          <ul className="text-gray-600 text-base md:text-md leading-relaxed list-disc list-inside space-y-2 mb-6">
            <li>identify self by specific abilities, characteristics and preferences (e.g., by gender, age, as part of a family, friends, colours, food etc.)</li>
            <li>develop a sense of balance and physical coordination through play.</li>
            <li>learn language through activities like role play, storytelling, poetry recitation, singing and reading age appropriate and level based books.</li>
            <li>understand to analyse their actions as right or wrong.</li>
            <li> learn to be friends with children from diverse backgrounds, celebrate various festivals, sing and dance together.</li>
            <li> learn to live in harmony with their environment, make observations, enquire and ask questions – what, how & why.</li>
            <li> relate a numeral to its respective quantity, associate value to a number and Identify shapes by names: curved and straight lines, circle, square, triangle and understand spatial relationships.</li>
            <li> learn to manage their feelings and emotions and learn appropriate behaviour.</li>
            <li> demonstrate the ability to begin to assume responsibility for their own safety within their environment.</li>
            <li> learn values, life skills, build relationships and grow up as confident and responsible citizens.</li>
          </ul>
          <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">At this stage, there is no system of formal assessment.</p>

          {/* Small paragraph */}
          <p className="text-gray-600 text-sm md:text-base">
            We ensure a balance between learning and play to foster overall
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
