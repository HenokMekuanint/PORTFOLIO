import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com/in/henok-mekuanint-595966226' target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href='http://github.com/HenokMekuanint' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://leetcode.com/henokmek' target="_blank" rel="noreferrer"><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocials