import React, { useState } from "react";
import Logo from "../assets/JP.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed  w-full h-[80px] flex justify-between items-center px-4 backdrop-blur-sm  text-gray-300 isolate aspect-video rounded-sm  bg-white/20 shadow-md ring-1 ring-black/5">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[100px] cursor-pointer"
          />
        </Link>
      </div>
      <ul className="hidden md:flex text-black font-bold ">
        <li>
          <Link
            to="/"
            onClick={scrollToTop}
            className="hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition duration-300"
          >
            Projects
          </Link>
        </li>
        
      </ul>

      {/* For mobile view */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars  className="text-black" size={20}/> : <FaTimes className="text-black" size={20} />}
      </div>

      {/* mobile nav */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#e4e3de] text-black flex flex-col items-center justify-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
