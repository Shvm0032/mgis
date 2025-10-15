export default function AlumniConnect() {
  return (
    <>
      <section className="pt-15 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subheading */}
          <h4 className="text-red-600 font-semibold mb-2">
            Our Alumni Makes Us Proud
          </h4>

          {/* Heading */}
          <h2 className="text-black font-bold text-2xl md:text-3xl mb-4">
            MGIS Alumni Connect
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>

          {/* Paragraph */}
          <p className="text-gray-700 text-md">
            MGIS provide an online professional networking and mentoring
            platform for our alumni community, we provide a private career
            network for MGIS alumni an online portal for alumni to connect with
            one another and share career information, a tool to offer education,
            resume or career advice, when registering in the network, let us
            know if you’d like to volunteer and get involved by meeting with
            students, participating in career fairs, offering internships, or
            taking part in other opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Div */}
          <div className="space-y-6 rounded-b-lg shadow-2xl p-10 bg-white flex flex-col">
            <h4 className="text-red-600 font-semibold">Old Students</h4>
            <h2 className="text-[#00306E] text-2xl md:text-3xl font-bold">
              Association
            </h2>
            <p className="text-gray-700 text-lg">
              Connect with classmates, share memories, success stories with us,
              and exchange opportunities on this alumni portal.
            </p>
          </div>

          {/* Right Div - Form */}
          <div className="flex flex-col">
            <form className="space-y-4 flex-1">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <textarea
                placeholder="Message*"
                rows={5}
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#121938] text-white font-semibold px-6 py-3 rounded-md border-2 border-[#121938] transition-all duration-300 transform hover:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
