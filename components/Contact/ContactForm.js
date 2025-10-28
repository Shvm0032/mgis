"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Clock, Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ffqgjer", //  Replace with your EmailJS Service ID
        "template_8wokdeo", //  Replace with your EmailJS Template ID
        formData,
        "uQ7cnOAe_wNk_9Mzv" //  Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success(
            "Your message has been sent successfully! We'll get back to you shortly.",
            { position: "top-center", theme: "colored", autoClose: 4000, style: {
              backgroundColor: "#00306E", // Blue background
              color: "#fff",              // White text
              fontWeight: "500",
              borderRadius: "8px",
              fontSize: "15px",
            }, }
          );
          setFormData({
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("❌ Failed to send message. Please try again later.", {
            position: "top-center",
            theme: "colored",
            autoClose: 4000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <ToastContainer /> {/* ✅ Toast Container */}

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00306E]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold px-6 py-3 rounded-md border-2 border-[#00306E] transition-all duration-300 flex justify-center items-center gap-2 ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#00306E] text-white hover:bg-white hover:text-[#00306E]"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
