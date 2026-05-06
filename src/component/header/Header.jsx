import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/joex-sleek.png";
import HeaderSocial from "./HeaderSocial";

import { FaArrowRight } from "react-icons/fa";
import PortfolioCard from "../portfolio-card/portfolioCard";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__top">
          <div className="header__content">
            <h5>Hello I'm</h5>
            <h1>Oyinloye Joseph</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocial />
          </div>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="header__bottom">
          <PortfolioCard />
        </div>
      </div>
    </header>
  );
};

export default Header;
