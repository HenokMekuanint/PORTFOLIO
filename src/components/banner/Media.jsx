import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Media = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Find me in
      </h2>
      <div className="flex gap-4">
        <a href="https://www.upwork.com/freelancers/~015ce12be08f7b72bb" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <SiUpwork />
        </a>
        <a href="https://github.com/HenokMekuanint" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/henok-a-595966226/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}

export default Media
