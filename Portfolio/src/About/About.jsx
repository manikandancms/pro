import React from "react";
import { motion } from "framer-motion";

// Profile photo URL
const profilePhoto = "https://ik.imagekit.io/jap5d6wbb/image/DHA_7805_000000001_.jpg?updatedAt=1754241378589";

const aboutMeText = `Hello! I'm a passionate MERN stack developer and 3D animator with experience 
in creating dynamic web applications and cinematic animations using Unreal Engine 5 and Autodesk Maya. 
I have a background in commerce, business management, and finance, which helps me bring a unique perspective to my projects. 
I enjoy continuous learning and collaboration, always eager to take on new challenges and improve my skills.`;

const animationVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 5 },
};

const About = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto p-10 shadow-lg mt-10 rounded"
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mt-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <p className="text-md  flex-1 mb-6 md:mb-0 md:mr-8 text-gray-800">
              {aboutMeText}
            </p>
            {/* Profile photo only visible on small/medium and up */}
            <img
              src={profilePhoto}
              alt="Profile"
              className="hidden sm:block w-40 h-40 sm:w-48 sm:h-48 object-cover shadow-md border border-gray-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
