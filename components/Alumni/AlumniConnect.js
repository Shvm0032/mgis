"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AlumniConnect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        "service_ffqgjer", // ✅ Your EmailJS Service ID
        "template_nrxluzq", // ✅ Your EmailJS Template ID
        formData,
        "uQ7cnOAe_wNk_9Mzv" // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          toast.success(
            "Thank you for connecting! We'll get in touch with you shortly.",
            {
              position: "top-center",
              autoClose: 4000,
              style: {
                backgroundColor: "#121938",
                color: "#fff",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "15px",
              },
            }
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("❌ Failed to send message. Please try again later.", {
            position: "top-center",
            autoClose: 4000,
            style: {
              backgroundColor: "#121938",
              color: "#fff",
              fontWeight: "500",
              borderRadius: "8px",
              fontSize: "15px",
            },
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <ToastContainer />

      {/* Intro Section */}
      <section className="pt-15 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-red-600 font-semibold mb-2">
            Our Alumni Makes Us Proud
          </h4>
          <h2 className="text-black font-bold text-2xl md:text-3xl mb-4">
            MGIS Alumni Connect
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-gray-700 text-md">
            MGIS provides an online networking and mentoring platform for our
            alumni community. Connect with classmates, share success stories,
            offer career guidance, and take part in alumni opportunities.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Div */}
          <div className="space-y-6 rounded-b-lg shadow-2xl p-10 bg-white flex flex-col justify-center">
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
          <div className="flex flex-col bg-white p-10 shadow-2xl rounded-b-lg">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              />
              <textarea
                name="message"
                placeholder="Message*"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#121938]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold px-6 py-3 rounded-md border-2 border-[#121938] transition-all duration-300 flex justify-center items-center gap-2 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#121938] text-white hover:bg-white hover:text-[#121938] transform hover:scale-95"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
