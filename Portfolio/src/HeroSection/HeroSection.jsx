import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-6 text-white bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Text content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-center lg:text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
            I'm Manikandan
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600"
            style={{ animation: "bounce 2s infinite alternate" }}
          >
            Full Stack Developer
          </h2>
          <div className="w-full flex justify-center lg:justify-center mt-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded border border-gray-800 transition-transform transform hover:scale-105"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Image near text with reduced margin on large screens */}
        <div className="flex-1 flex justify-center lg:justify-start lg:ml-4">
          <img
            src="https://ik.imagekit.io/jap5d6wbb/image/bgmani@2x.jpg?updatedAt=1753636313470"
            alt="Profile illustration"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-xl border-4 object-cover border-gray-600 shadow-lg"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes bounce {
             0% { transform: translateY(0); }
             100% { transform: translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
