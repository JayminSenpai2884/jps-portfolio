import React from "react";
import workImg from "../assets/imageWork1.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const Work = () => {

  return (
    <div name="work" className="w-full md:h-screen text-black bg-[#e4e3de]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-blue-400  dark:text-black">
            Work
          </h1>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="flex justify-center items-center shadow rounded-md">
          <div className="p-10 border-gray-200  overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src={workImg}
              alt="Work"
              className="object-cover w-100 h-100"
            />
            <div className="mt-4">
              <h1 className="font-extrabold text-2xl">FilmyBox</h1>
              <p className="font-normal text-sm">
                FilmyBox, the dynamic OTT platform, was brought to life using
                the MERN (MongoDB, Express.js, React.js, Node.js) stack. Node.js
                and Express.js power the backend, ensuring efficient server
                operations, while MongoDB stores and retrieves diverse content
                seamlessly. On the frontend, React.js provides a responsive
                interface for users to enjoy FilmyBox's unique features. This
                technology stack not only delivers a smooth user experience but
                also positions FilmyBox to adapt and grow in the ever-evolving
                world of online streaming.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#e4e3de] shadow-md">
        <div class="max-w-2xl mx-auto text-black py-10 flex flex-col items-center justify-center ">
          <div class="text-center ">
            
          </div>
          

          <div class="flex flex-col md:flex-row items-center text-sm text-black">
            <div class="order-2 md:order-1 flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.linkedin.com/in/jaymin-parmar-22096224a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFFqBNLuRSxy7TcP391aWow%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="text-black hover:text-zinc-600"
                />
              </a>
              <a
                href="https://www.instagram.com/jayminsinh_2884"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="text-black hover:text-zinc-600"
                  
                />
              </a>
              <a
                href="https://github.com/JayminSenpai2884"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="text-black hover:text-zinc-600"
                  
                />
              </a>
            </div>
          </div>
          <p class="order-2 md:order-1 p-5">&copy; Jaymin Parmar, 2024. </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
