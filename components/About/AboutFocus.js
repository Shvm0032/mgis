"use client";

export default function AboutFocus() {
  return (
    <section
      className="relative bg-content bg-center bg-repeat pt-10 pb-15 px-6"
      style={{ backgroundImage: "url('/Assets/about-slider/focus.jpg')" }}
    >
      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-left  space-y-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#D2093C] mb-4">Our Focus</h2>

        {/* UL List */}
        <ul className="space-y-4 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              Tapping the inherent brilliance of every child to achieve academic
              excellence.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              Nurturing the individuality of every child and the growth of his
              spirit.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              Helping the child evolve as a thinking person with mind of his own
              so that he can carve out his own in this world.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              Making every child grow into a good human being and a responsible
              citizen.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              Broadening of horizons by bringing together children from across
              the world to learn from books and life together.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span> Being aware of our planet and knowing to care for it.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D2093C] text-xl">⦿</span>
            <span>
              {" "}
              All the above elements in our curriculum model interact with each other and converge to bring out the best in every child and develop them holistically.
            </span>
          </li>
        </ul>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed text-gray-700 mt-4 text-justify">
          At Mahatma Gandhi International School, we provide quality education
          that balances academics with physical, emotional, and social growth.
          Our mission is to nurture responsible and compassionate learners who
          contribute positively to society.
        </p>
      </div>
    </section>
  );
}
