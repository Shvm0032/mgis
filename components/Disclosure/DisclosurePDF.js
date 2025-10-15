"use client";

export default function DisclosurePDF() {
  const pdfUrl = "/Assets/Mandatary-Disclosure.pdf";

  return (
    <section className="pt-16 pb-28 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Subheading */}
        <h4 className="text-red-600 font-semibold tracking-wide uppercase">
          Mandatory Disclosure
        </h4>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#121938]">
          Our Mandatory Disclosure
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>

        {/* Paragraph */}
        <p className="text-gray-600 text-base leading-relaxed">
          At MGIS, we provide equal opportunity to all students. We place
          significant value on team spirit and fair play besides excelling at
          the sport. Facilities include sprawling sports fields and an indoor
          sports complex.
        </p>

        {/* Button */}
        <a
          href={pdfUrl}
          target="_blank" // open in new tab with preview
          rel="noopener noreferrer"
          className="inline-block bg-[#121938] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D2093C] transition-all duration-300"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
