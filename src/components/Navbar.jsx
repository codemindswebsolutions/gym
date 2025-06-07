import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; // Fixed threshold in pixels
      setIsTop(window.scrollY < scrollThreshold);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTop ? "bg-transparent" : "bg-[#222831] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <span
              className={`px-2 py-1 rounded-sm ${
                isTop ? "bg-white text-[#222831]" : "bg-[#FF4C60] text-white"
              }`}
            >
              GYM
            </span>
            <span className={`ml-1 ${isTop ? "text-[#222831]" : "text-white"}`}>
              BOX
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`uppercase text-sm font-medium hover:text-[#FF4C60] transition-colors ${
                location.pathname === item.path 
                  ? "text-[#FF4C60]" 
                  : isTop 
                    ? "text-[#4581da]" 
                    : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/join"
            className={`ml-4 px-5 py-2 rounded-md uppercase text-sm font-bold ${
              isTop
                ? "border border-[#FF4C60] text-[#FF4C60] hover:bg-[#FF4C60] hover:text-white"
                : "bg-[#FF4C60] text-white hover:bg-[#e63946]"
            } transition-colors`}
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <FiX className={isTop ? "text-[#222831]" : "text-white"} />
          ) : (
            <FiMenu className={isTop ? "text-[#222831]" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isTop ? "bg-white" : "bg-[#222831]"} px-4 pb-4`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-3 uppercase text-sm font-medium ${
                location.pathname === item.path
                  ? "text-[#FF4C60]"
                  : isTop
                    ? "text-[#222831] hover:text-[#FF4C60]"
                    : "text-white hover:text-[#FF4C60]"
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/join"
            className={`block mt-2 py-3 px-4 rounded-md uppercase text-sm font-bold ${
              isTop
                ? "bg-[#FF4C60] text-white hover:bg-[#e63946]"
                : "bg-[#FF4C60] text-white hover:bg-[#e63946]"
            } transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;