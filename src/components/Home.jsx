import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import Type from "./Type";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInsideText, setIsInsideText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mousemove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const textDiv = document.querySelector("[name='textDiv']");
      if (textDiv) {
        const rect = textDiv.getBoundingClientRect();
        const isInBounds =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsInsideText(isInBounds);
      }
    };

    window.addEventListener("mousemove", mousemove);
    return () => window.removeEventListener("mousemove", mousemove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
  };

  return (
    <div className="w-full h-screen bg-[#e4e3de] ">
      <div
        className="max-w-[1000px]   mx-auto px-8 flex flex-col justify-center h-full"
        name="textDiv"
      >
        <p className="text-blue-600 text-xl">Hey, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1b1b1b]">
          Jaymin Parmar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#5c5c5c]">
          <Type />
          {isInsideText && !isMobile && (
            <motion.div className="Cursor" variants={variants} animate="default" />
          )}
        </h2>
        <p className="text-[#696a6b] py-4 max-w-[700px] text-lg">
          Computer Programming Student | Full Stack & Mobile Developer |
          Tech Enthusiast | MERN Stack Enthusiast | Lifelong Learner 📚🚀
        </p>
      </div>

      {!isMobile && (
  <div className="hidden md:flex fixed flex-col top-[35%] left-0">
    <ul className="space-y-2">
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-300ms duration-300 bg-blue-600 hover:ml-0">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/jaymin-parmar-22096224a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFFqBNLuRSxy7TcP391aWow%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <FaLinkedin size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-300ms duration-300 bg-pink-600 hover:ml-0">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.instagram.com/jayminsinh_2884"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram <FaInstagram size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-300ms duration-300 bg-[#010409] hover:ml-0">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://github.com/JayminSenpai2884"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaGithub size={30} />
        </a>
      </li>
    </ul>
  </div>
)}

{isMobile && (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-center">
    <ul className="flex space-x-4">
      <li>
        <a
          href="https://www.linkedin.com/in/jaymin-parmar-22096224a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFFqBNLuRSxy7TcP391aWow%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-gray-300 hover:text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jayminsinh_2884"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-gray-300 hover:text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/JayminSenpai2884"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="text-gray-300 hover:text-white" />
        </a>
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default Home;
