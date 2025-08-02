import React from "react";
import { motion } from "framer-motion";

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
      className="max-w-3xl mx-auto bg-gray-900/90 text-gray-200 rounded-2xl p-8 shadow-lg"
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-4">About Me</h2>
      <p className="text-md leading-relaxed whitespace-pre-line">{aboutMeText}</p>
    </motion.section>
  );
};

export default About;
