"use client";

export default function CenterSection() {
  return (
    <section className="bg-[#173044] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Mission Statement
        </h2>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#D2093C] mx-auto mb-6"></div>

        {/* Paragraphs */}
        <p className="text-gray-100 text-lg text-center leading-relaxed mb-4">
          We at MGIS will provide quality education that ensures the physical,
          emotional, spiritual, social and aesthetical excellence.
        </p>
        <p className="text-gray-100 text-lg text-center leading-relaxed">
          We aim to offer a dynamic, caring and child centric environment where
          each student shall become a critical and compassionate thinker, a
          lifelong learner and a contributing member of his community.
        </p>
      </div>
    </section>
  );
}
