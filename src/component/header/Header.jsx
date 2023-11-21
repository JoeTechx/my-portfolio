import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/joex.png";
import HeaderSocial from "./HeaderSocial";

import { FaArrowRight } from "react-icons/fa";
import PortfolioCard from "../portfolio-card/portfolioCard";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Oyinloye Joseph</h1>
        <h5>Joex</h5>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <PortfolioCard />
        <a href="#about" className="scroll__down">
          Scroll Down
          <FaArrowRight />
        </a>
      </div>
    </header>
  );
};

export default Header;
