import React from "react";


const contactInfo = {
  email: "cmanikandan23496@gmail.com",
  mobile: "+91-6381195298",
  linkedin: "https://www.linkedin.com/in/cmanikandan96",
  github: "https://github.com/manikandancms",
  resumeUrl: "/resume.pdf", // Put your resume in public folder
  resumeFileName: "Resume",

};

const ContactMe = () => {
  const {
    email,
    mobile,
    linkedin,
    github,
    resumeUrl,
    resumeFileName,
  } = contactInfo;

  const linkedinId = linkedin.split("linkedin.com/in/")[1] || linkedin;
  const githubId = github.split("github.com/")[1] || github;

  return (


    <div className="font-sans 2xl:container mx-auto p-4">
      {/* Contact Info Section */}
      <section
        id="contact"
        className=" w-[95%] mx-auto bg-gray-900 text-gray-100 p-8 rounded-xl shadow-lg mt-16"
      >
        <h2 className="text-center text-3xl mb-6 font-semibold">Contact Me</h2>
        <ul className="list-none p-0 mb-8 text-lg space-y-4">
          <li>

            <strong>Email: </strong>
            <a
              href={`mailto:${email}`}
              className="text-white hover:underline break-all"
            >
              {email}
            </a>
          </li>
          <li>
            <strong>Mobile: </strong>
            <span>{mobile}</span>
          </li>
          <li>
            <strong>LinkedIn: </strong>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline break-all"
            >
              {linkedinId.startsWith("/") ? linkedinId : `/in/${linkedinId}`}
            </a>
          </li>
          <li>
            <strong>GitHub: </strong>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline break-all"
            >
              @{githubId}
            </a>
          </li>
        </ul>
        {/* Removed the "Download Resume" button here */}
      </section>

      {/* Gmail-style Resume Preview Section */}
      <section className="max-w-xl mx-auto border border-gray-300 rounded-lg bg-white shadow-md">
        {/* Header */}
        <div className="border-b border-gray-300 p-4 bg-gray-100">
          <span className="font-medium">To: recruiter@example.com</span>
          <div className="text-gray-600 text-sm">
            From: &lt;{email}&gt;
          </div>
          <div className="font-medium mt-2">Resume for Your Consideration..</div>
        </div>

        {/* Message */}
        <div className="p-6">
          <p className="mb-5 leading-relaxed text-gray-800 whitespace-pre-line">
            Dear Recruiter,

            {"\n\n"}I attached my resume link here for your review.

            {"\n\n"}Thank you for your consideration.

            {"\n\n"}Regards,

            {"\n"}C.Manikandan.
          </p>
        </div>

        {/* Attachment Preview */}
        <div className="border-t border-gray-300 p-4 flex items-center bg-gray-50">
          <img
            src="https://www.gstatic.com/images/icons/material/system/2x/description_black_24dp.png"
            alt="PDF"
            className="w-8 h-8 mr-3"
          />
          <div className="flex-1">
            <span className="font-semibold text-gray-900">{resumeFileName}</span>
            <div className="text-xs text-gray-600">PDF • 1 page</div>
          </div>
          <a
            href={"https://drive.google.com/file/d/1u9uHtpEJyDAFRRWT8MNiClv89_ORRv6T/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-1 rounded-md font-medium text-sm mr-2 hover:bg-blue-700 transition"
          >
            Preview
          </a>

        </div>
      </section>
    </div>
  );
};

export default ContactMe;
