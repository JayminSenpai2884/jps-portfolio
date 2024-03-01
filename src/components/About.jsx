import React from "react";
import profilePhoto from "../assets/profile.png"; // Import your profile photo

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen bg-[#e4e3de] text-black flex flex-col items-center "
    >
      <div className="w-full px-4 sm:px-8 mt-16 sm:mt-24">
        <p className="text-xl sm:text-6xl font-bold mb-8 text-blue-500 sm:mb-16 text-center  ">
          About Me
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-8 sm:mb-[40px]">
          <div className="text-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full w-52 sm:w-72 h-52 sm:h-72 mx-auto mb-8 sm:mb-0 transition duration-300  hover:scale-105 "
              style={{ zIndex: "10" }}
            />
          </div>
          <div className="w-full sm:w-[calc(100% - 320px)]">
            <p className="text-lg sm:text-2xl font-bold mb-4">
              Hi, I'm JayminKumar, nice to meet you.
            </p>
            <p className="text-base sm:text-xl leading-relaxed w-auto text-justify pr-0 sm:pr-[11rem]">
              As a computer programming student at Conestoga College, I'm
              passionate about forging a rewarding career in IT, focusing on
              roles like Full Stack Developer and Mobile Developer. Proficient
              in the MERN stack and skilled in C# and JavaScript, I'm dedicated
              to ongoing learning to stay ahead of industry trends. My goal is
              to create innovative, user-friendly applications that make a
              positive impact. Expect expertise in full stack and mobile app
              development, a passion for emerging technologies, and a commitment
              to continuous growth. Let's connect and build a bright future
              together in tech! 🚀
            </p>
          </div>
        </div>
        <section class="py-10">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-4 mt-12">
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="rounded-md bg-[#e4e3de] shadow-md p-8 h-full hover:shadow-xl transition duration-300">
                  <div class="text-4xl font-bold text-blue-500 mb-4">
                    Full Stack Development
                  </div>
                  <p class="text-gray-600 mb-4">
                    Proficient in the MERN stack, adept at crafting dynamic web
                    applications with seamless front and back end integration.
                    From UI design to server-side logic, I deliver scalable
                    solutions tailored to project needs.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="rounded-md bg-[#e4e3de] shadow-md p-8 h-full hover:shadow-xl transition duration-300">
                  <div class="text-4xl font-bold text-blue-500 mb-4">
                    Programming Languages
                  </div>
                  <p class="text-gray-600 mb-4">
                    Skilled in C# and JavaScript, capable of handling diverse
                    projects and platforms. Whether it's server-side
                    development, client-side interactivity, or cross-platform
                    solutions, I deliver efficient code to meet project
                    objectives.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="rounded-md bg-[#e4e3de] shadow-md p-8 h-full hover:shadow-xl transition duration-300">
                  <div class="text-4xl font-bold text-blue-500 mb-4">
                    UI/UX Design
                  </div>
                  <p class="text-gray-600 mb-4">
                    Proficient in crafting visually captivating and
                    user-friendly interfaces, I emphasize user experience to
                    optimize engagement and functionality across diverse web and
                    mobile platforms. With a keen eye for detail, I strive to
                    deliver seamless and intuitive designs that elevate overall
                    usability and satisfaction for end-users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
