import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-[#efefef] py-8 text-center">
      <div className="2xl:container  mx-auto">
        <div className="w-[90%] mx-auto">
          <span className="font-bold">Manikandan.C</span> &copy; {new Date().getFullYear()}
        </div>
        <div className="mt-3">
          <a
            href="https://github.com/manikandancms"
            className="mx-4 text-[#b3b3b3] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cmanikandan96/"
            className="mx-4 text-[#b3b3b3] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
