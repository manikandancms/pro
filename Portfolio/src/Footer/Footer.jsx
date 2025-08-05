import React from "react";

const Footer = () => {
  return (
    <div className="2xl:container  mx-auto bg-[#151515] text-[#efefef] py-8 text-center">
      <div className="w-[90%] mx-auto ">
       
        <div className=" mb-1">
          <span>
            All Right Reserved by C.Manikandan  &copy; {new Date().getFullYear()}
          </span>
        </div>
         <div className=" mb-1">
          <span>
            Contact: 91+ 6381195298
          </span>
        </div >
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
    </div>
  );
};

export default Footer;


