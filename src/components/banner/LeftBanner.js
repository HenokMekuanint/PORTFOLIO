import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "Mobile App Developer.","Software Engineer.","Technical Support Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Henok</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Welcome. Make yourself comfortable as you explore my work. I am a
          senior full stack and mobile application developer with extensive
          experience building reliable, scalable, and user focused products. I
          work across web and mobile, delivering clean solutions that solve real
          business problems.
        </p>
        <p>
          From high quality Flutter mobile apps to modern web platforms using
          React, Node.js, and Python based backends, I focus on performance,
          maintainability, and great user experience. I value clear
          communication, strong ownership, and turning ideas into production
          ready systems you can trust.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner