import React from "react";

// Example projects – replace/link your real projects!
const projects = [
  {
    title: "E-Commerce Store",
    link: "https://pro-e-com.netlify.app/"
  },
  {
    title: "Counter",
    link: "https://submission-he3z.vercel.app/"
  },
  {
    title: "Cat & Bulb",
    link: "https://pro-theta-khaki.vercel.app/"
  }
];

const ProjectsPage = () => (
  <section className="2xl:container mx-auto my-2 px-2">
    <div className="w-[90%] mx-auto bg-gray-900/95 dark:bg-gray-800 rounded-2xl shadow p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h2>
        <p className="text-lg text-gray-300">Explore some of my recent work</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow flex flex-col items-start justify-between">
            <h3 className="text-xl font-semibold mb-3 text-white">{proj.title}</h3>
            <a
              className="mt-2 inline-block rounded bg-orange-500 hover:bg-yellow-700 text-white font-semibold px-5 py-2 transition"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPage;
