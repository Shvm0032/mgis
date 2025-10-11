"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative ">
      {/* Red Top Banner - Half Over Footer */}
      <div
        className="ml-10 px-4 py-10 rounded-lg w-[90vw] mx-auto absolute mt-[-70px] z-50 bg-cover bg-center"
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
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Get the latest Echooling news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-white w-full sm:w-auto border border-white"
            />
            <button className="px-6 py-2 bg-[#d60a3c] text-white rounded hover:bg-white hover:text-[#d60a3c] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} @2022 Mahatma Gandhi International
        School. Design & Developed by RankMantra
      </div>
    </footer>
  );
}
