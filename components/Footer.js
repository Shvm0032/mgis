"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative ">
      {/* Red Top Banner - Half Over Footer */}
      <div
        className="ml-10 px-4 py-10 rounded-lg w-[90vw] mx-auto absolute mt-[-70px] z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/cta.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-white">Free Online Courses</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Enquiry Now about Admissions
            </h2>
          </div>
          <a
            href="/contact"
            className="mt-4 md:mt-0 inline-block px-6 py-2 border border-white rounded hover:bg-white hover:text-[#d60a3c] transition"
          >
            Contact Us →
          </a>
        </div>
      </div>

      {/* Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8 pt-24 pb-12 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-16 text-center md:text-left relative z-0">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/alumni">Alumni</a>
            </li>
            <li>
              <a href="/academics">Academics1</a>
            </li>
            <li>
              <a href="/student-life">Student Life</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/boarding">Boarding</a>
            </li>
            <li>
              <a href="/admission">Admissions</a>
            </li>
            <li>
              <a href="/academics">Academics1</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-6">Contact Information</h3>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white text-[#0E293E] p-2 rounded-full flex items-center justify-center">
              <FaPhone className="text-md" />
            </div>
            <a
              href="tel:+919933225511"
              className="text-gray-300 hover:text-[#d60a3c] transition"
            >
              +91-99332 25511
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white text-[#0E293E] p-2 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-md" />
            </div>
            <a
              href="mailto:mgispb@gmail.com"
              className="text-gray-300 hover:text-[#d60a3c] transition"
            >
              mgispb@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white text-[#0E293E] p-2 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-md" />
            </div>
            <p className="text-gray-300">
              Mahatma Gandhi International School, Chakkargaon Post,
              Brookshabad, Port Blair, Andaman and Nicobar Islands.
            </p>
          </div>

          {/* Social Icons */}
         
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-100 text-sm">
        &copy; 2022 Mahatma Gandhi International School. Design & Developed by{" "}
        <a
          href="https://rankmantra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D91142] hover:text-white font-semibold hover:underline transition-colors"
        >
          RankMantra
        </a>
      </div>
    </footer>
  );
}
