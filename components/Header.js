"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Box, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "#",
      submenu: [
        { name: "Submenu 1", href: "#" },
        { name: "Submenu 2", href: "#" },
      ],
    },
    {
      name: "Abouts",
      href: "#",
      submenu: [
        { name: "History", href: "#" },
        { name: "Mission", href: "#" },
      ],
    },
    { name: "Academics", href: "/academics" },
    { name: "Boarding", href: "/boarding" },
    { name: "Student Life", href: "/student-life" },
    { name: "Admission", href: "/admission" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar */}
        <div className="bg-[#00306E] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@mgis.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/Assets/logo/mgis-logo-main.png"
                  alt="MGIS Logo"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-[#00306E] font-medium transition-colors"
                  >
                    {item.name}
                    {item.submenu && (
                      activeDropdown === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.submenu && activeDropdown === item.name && (
                    <div
                      className="absolute left-0 top-full bg-white shadow-md mt-1 min-w-[160px] rounded overflow-hidden"
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Category */}
            <div className="hidden lg:flex items-center gap-2 ml-4">
              <Box size={22} className="text-gray-700" />
              <span className="text-gray-700 font-medium">Category</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-4 py-4 gap-2">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
                  >
                    {item.name}
                    {item.submenu && (
                      activeDropdown === item.name ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.submenu && activeDropdown === item.name && (
                    <div className="pl-4">
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block py-1 text-gray-600 hover:text-[#00306E]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Category (Mobile) */}
              <div className="flex items-center gap-2 mt-4">
                <Box size={20} />
                <span className="font-medium">Category</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#00306E] text-white p-3 rounded-full shadow-lg hover:bg-[#002550] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
