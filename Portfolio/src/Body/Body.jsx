import React from "react";

// --- DATA ARRAYS (MUST be present!) ---
const experience = [
  {
    role: "Animator",
    company: "saneeshwar animations international private limited",
    duration: "2022-2023",
    logo: "https://ik.imagekit.io/jap5d6wbb/image/download%20(1).png?updatedAt=1753731322095",
    description: "I am a skilled 3D animator proficient in Unreal Engine 5 and Autodesk Maya, creating polished animations of characters and objects according to project directors’ vision, primarily for cinematic sequences.",
    area: "pondichery",
    totalPeriod: "1 year and 2 months",
  },
];

const education = [
  {
    degree: "B.Com (Bachelor of Commerce)",
    institution: "Swami Vivekananda Arts and Science College",
    year: "2017",
    grade: "First Class",
    logo: "https://ik.imagekit.io/jap5d6wbb/image/swa@3x.jpg?updatedAt=1753730819620",
    details: "Completed undergraduate studies in Commerce at Swami Vivekananda Arts and Science College, affiliated to Thiruvalluvar University, building a solid foundation in accounting and business management.",
    area: "laxmipuram, Villupuram, Tamil Nadu",
    mode: "Offline",
  },
  {
    degree: "M.Com (Master of Commerce)",
    institution: "Sri Aravindar Arts and Science College",
    year: "2023",
    grade: "Distinction (82%)",
    logo: "https://ik.imagekit.io/jap5d6wbb/image/arav.jpeg?updatedAt=1754116083792",
    details: "Postgraduate coursework focused on advanced accounting, finance, and research. Gained valuable experience through research, internships, and projects.",
    area: "Sedarapet, Villupuram, Tamil Nadu",
    mode: "Offline",
  },
  {
    degree: "MERN Stack Developer Certificate",
    institution: "Revamp Acadamy",
    year: "2025",
    grade: "Certified",
    logo: "https://ik.imagekit.io/jap5d6wbb/image/download.png?updatedAt=1753730977043",
    details: "Hands-on training on MongoDB, Express, React, and Node.js, focusing on building full-stack web applications with industry-best practices.",
    area: "Madurai, Tamil Nadu",
    mode: "Online",
  },
];

const skills = [
  "MERN Stack: MongoDB, Express.js, React, Node.js",
  "JavaScript, HTML, CSS, Tailwind CSS",
  "Accounting, Finance, Business Management",
];

// --- COMPONENT ---
const BodySection = () => (
  <section className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
    <div className="w-full mx-auto">
      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT COLUMN: Experience + Skills (stacked vertically) */}
        <div className="flex flex-col gap-6">
          {/* Experience Section */}
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gray-800/80 rounded-xl p-4"
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg shadow-md mb-2 md:mb-0"
              />
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs md:text-sm text-yellow-300">({exp.duration})</span>
                </div>
                <p className="font-medium text-blue-300 text-sm md:text-base">{exp.company}</p>
                <p className="mt-1 text-xs md:text-sm text-gray-300">{exp.description.trim()}</p>
                <p className="mt-1 text-xs text-gray-400">
                  <span className="font-semibold">Total Period:</span> {exp.totalPeriod}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  <span className="font-semibold">Area:</span> {exp.area}
                </p>
              </div>
            </div>
          ))}

          {/* Skills & Highlights */}
          <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-xl p-6 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Skills & Highlights</h2>
            <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-800/70 text-teal-300 py-2 px-4 rounded-full text-xs sm:text-sm whitespace-nowrap shadow"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Education fills full right space */}
        <div className="bg-gray-900/90 dark:bg-gray-800 rounded-2xl shadow p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gray-800/80 rounded-xl p-4"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg shadow-md mb-2 md:mb-0"
                />
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h3>
                    <span className="text-xs md:text-sm text-pink-400">({edu.year})</span>
                  </div>
                  <p className="font-medium text-blue-300 text-sm md:text-base">{edu.institution}</p>
                  <p className="mt-1 text-xs md:text-sm text-gray-300">{edu.details}</p>
                  <span className="inline-block mt-2 text-xs rounded bg-gray-700 text-teal-200 px-3 py-1">
                    Grade: {edu.grade}
                  </span>
                  <div className="flex items-center mt-1 text-xs text-gray-400">
                    <span>
                      <span className="font-semibold">Area:</span> {edu.area}
                    </span>
                    <span className="ml-4">
                      <span className="font-semibold">Mode:</span> {edu.mode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BodySection;
