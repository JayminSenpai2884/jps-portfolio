import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import cSharp from "../assets/netCore.png";
import next from "../assets/next.png";
import devops from "../assets/devops.png";
import figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#e4e3de] text-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-blue-400 dark:text-black">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 bg-[#e4e3de] justify-center">
          <SkillItem img={HTML} text="HTML" />
          <SkillItem img={CSS} text="CSS" />
          <SkillItem img={JavaScript} text="JavaScript" />
          <SkillItem img={ReactImg} text="React" />
          <SkillItem img={Node} text="NODE JS" />
          <SkillItem img={GitHub} text="GitHub" />
          <SkillItem img={Tailwind} text="TAILWIND" />
          <SkillItem img={Mongo} text="MONGO DB" />
          <SkillItem img={next} text="Next JS" />
          <SkillItem img={cSharp} text="ASP.NET" />
          <SkillItem img={devops} text="Azure DevOps" />
          <SkillItem img={figma} text="Figma" />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ img, text }) => (
  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
    <img className="w-24 mx-auto" src={img} alt={`${text} icon`} />
    <p className="my-4">{text}</p>
  </div>
);

export default Skills;
