"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Div */}
        <div className="bg-[#F3F5F9] p-8 rounded-lg space-y-8">
          <div className="flex items-start gap-4">
            <MapPin size={24} className="text-[#00306E]" />
            <div>
              <h4 className="font-semibold text-[#00306E] text-lg">Address</h4>
              <p className="text-gray-600">
                Mahatma Gandhi International School,
              </p>
              <p className="text-gray-600">
                Chakkargaon Post, Brookshabad, Port Blair,
              </p>
              <p className="text-gray-600">Andaman and Nicobar Islands.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={24} className="text-[#00306E]" />
            <div>
              <h4 className="font-semibold text-[#00306E] text-lg">Contact</h4>
              <p className="text-gray-600">Phone No. : +91-99332 25511</p>
              <p className="text-gray-600">Mail: mgispb@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={24} className="text-[#00306E]" />
            <div>
              <h4 className="font-semibold text-[#00306E] text-lg">
                Working Hours
              </h4>
              <p className="text-gray-600">Monday - Friday: 09:00 - 5:00</p>
              <p className="text-gray-600">Sunday : Closed</p>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#00306E]">
            Questions? Feel free to contact us.
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#00306E] text-white font-semibold px-6 py-3 cursor-pointer rounded-md border-2 border-[#00306E] transition-all duration-300 hover:bg-white hover:text-[#00306E]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
