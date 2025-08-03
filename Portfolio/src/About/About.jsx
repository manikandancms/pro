import React from "react";
import { motion } from "framer-motion";

// Profile photo URL (replace with your own image path or URL)
const profilePhoto = "/path/to/your/photo.jpg";

const aboutMeText = `Hello! I'm a passionate MERN stack developer and 3D animator with experience 
in creating dynamic web applications and cinematic animations using Unreal Engine 5 and Autodesk Maya. 
I have a background in commerce, business management, and finance, which helps me bring a unique perspective to my projects. 
I enjoy continuous learning and collaboration, always eager to take on new challenges and improve my skills.`;

const animationVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const About = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto text-gray-900 p-8 shadow-lg mt-10 mb-10"
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-violet-600 text-center mb-8">About Me</h2>
      <div className="flex flex-row items-center">
        <p className="text-md leading-relaxed whitespace-pre-line flex-1 mr-6">
          {aboutMeText}
        </p>
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-48 h-48 object-cover shadow-md"
        />
      </div>
    </motion.section>
  );
};

export default About;
