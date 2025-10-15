"use client";

export default function OurAlumni() {
  return (
    <section className="py-16 px-6 bg-[#121938] text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Subheading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="w-16 h-1 bg-red-600 block"></span>
          <h4 className="text-white font-semibold text-center sm:text-left">
            ACHIEVE GREAT EDUCATION
          </h4>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl text-center font-bold">
          Our Alumni
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Div - Image */}
          <div className="relative flex justify-center items-center">
            {/* Top-left Red block */}
            {/* Top-left Red block with black dots */}
            <div
              className="absolute top-0 left-0 w-4/5 h-2/3 rounded-lg"
              style={{
                backgroundColor: "#D2093C",
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 2px)",
                backgroundSize: "10px 10px",
              }}
            ></div>

            {/* Bottom-right Blue block */}
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#121938] rounded-lg"></div>

            {/* Main Image */}
            <img
              src="/Assets/academy/slider12.jpeg"
              alt="Alumni"
              className="relative z-10 h-[250px] rounded-lg shadow-xl w-4/5 sm:w-3/4 md:w-full max-w-sm md:max-w-md -mt-10 -ml-5"
            />
          </div>

          {/* Right Div - Details */}
          <div className="flex flex-col justify-center space-y-4 p-6">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span> G Darshan Kumar
              </p>
              <p>
                <span className="font-semibold">Batch:</span> 2015-2017
              </p>
              <p>
                <span className="font-semibold">Profile:</span> Commerce
                (Currently working as Inside Sales Manager @Simplilearn, also
                owns a Youtube Channel named DG)
              </p>
            </div>
            <p className="text-gray-200 text-sm sm:text-base">
              Few words about School:- School is the first and foremost place
              where children try to make new friends. Also, students will learn
              how to be a part of the team. MGIS was one of the best school days
              memories for me where I explored many cultural activities, sports,
              and events. I made the best memories with my friends. I would like
              to thank all the faculty members who helped me grow my
              personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
