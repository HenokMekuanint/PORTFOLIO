import React from 'react';
import { FaGithub, FaReact } from "react-icons/fa";
import { SiDjango, SiDocker, SiFigma, SiFirebase, SiFlask, SiFlutter, SiGit, SiGo, SiGooglecloud, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const SkillsCarousel = () => {
  const skills = [
    { icon: <FaReact className="text-xl text-designColor" />, name: "React" },
    { icon: <SiNextdotjs className="text-xl text-designColor" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-xl text-designColor" />, name: "Tailwind CSS" },
    { icon: <SiFigma className="text-xl text-designColor" />, name: "Figma" },
    { icon: <SiFlutter className="text-xl text-designColor" />, name: "Flutter" },
    { icon: <SiNodedotjs className="text-xl text-designColor" />, name: "Node.js" },
    { icon: <SiDjango className="text-xl text-designColor" />, name: "Django" },
    { icon: <SiGo className="text-xl text-designColor" />, name: "Go" },
    { icon: <SiDocker className="text-xl text-designColor" />, name: "Docker" },
    { icon: <SiFlask className="text-xl text-designColor" />, name: "Flask" },
    { icon: <SiNestjs className="text-xl text-designColor" />, name: "NestJS" },
    { icon: <SiGooglecloud className="text-xl text-designColor" />, name: "GCP" },
    { icon: <SiMysql className="text-xl text-designColor" />, name: "MySQL" },
    { icon: <SiMongodb className="text-xl text-designColor" />, name: "MongoDB" },
    { icon: <SiFirebase className="text-xl text-designColor" />, name: "Firebase" },
    { icon: <SiGit className="text-xl text-designColor" />, name: "Git" },
    { icon: <FaGithub className="text-xl text-designColor" />, name: "GitHub" },
  ];

  return (
    <section className="w-full py-10 border-b-[1px] border-b-black">
      <div className="flex flex-col gap-4 font-titleFont mb-8">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
          Skills
        </h3>
        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">My Skill Set</h1>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="flex animate-scroll gap-6" style={{ width: 'fit-content' }}>
          {/* First set */}
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-black bg-opacity-25 rounded-md shadow-shadowOne hover:bg-opacity-40 transition-all duration-300 flex-shrink-0"
            >
              {skill.icon}
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`skill-duplicate-${index}`}
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-black bg-opacity-25 rounded-md shadow-shadowOne hover:bg-opacity-40 transition-all duration-300 flex-shrink-0"
            >
              {skill.icon}
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
