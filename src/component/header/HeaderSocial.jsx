import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/oyinloye-joseph-b79820239/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/JoeTechx" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/joe_x" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
