import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="2xl:container mx-auto bg-gray-800 text-white px-4 py-4 sticky top-0 z-50 shadow-md">
      <div className=" w-[95%] mx-auto flex items-center justify-between ">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          Portfolio
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:underline hover:text-green-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:underline hover:text-green-400 transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:underline hover:text-green-400 transition-colors duration-200">
            Contact
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
        <nav className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg">
          <Link
            to="/"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-green-400 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
