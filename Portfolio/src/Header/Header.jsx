import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerLayout from "../shimmer/Shimmer"; // Adjust path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds (replace with your actual logic)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show shimmer loading placeholder while loading
    return <ShimmerLayout />;
  }

  return (
    <header className="2xl:container mx-auto bg-gray-800 text-white p-4 z-50 shadow-md fixed top-0 left-0 right-0">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-semibold">C. Manikandan</div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-10 font-medium">
          <Link
            to="/"
            className="hover:underline hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-gray-400 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-gray-400 transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <nav
          className="fixed top-[56px] left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg z-50 mb-20"
          style={{ maxHeight: "calc(100vh - 56px)", overflowY: "auto" }}
        >
          <Link
            to="/"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
