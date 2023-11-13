import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        JOEX
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://web.facebook.com/joseph.oyinloye.351">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/iam_joex/">
          <GrInstagram />
        </a>
        <a href="https://twitter.com/git_boys">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JOEX 2022. All Right Reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
