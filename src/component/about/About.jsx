import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>1 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Finished Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            🚀 "Turning Pixels into Magic ✨ | Frontend Alchemist 💻 | UX
            Enthusiast 🎨 <br />
            🌟 Hey there, I'm Joseph your friendly neighborhood frontend
            developer on a mission to craft digital experiences that captivate
            and delight. With a passion for turning lines of code into stunning
            visuals, I'm your go-to wizard for all things front-end.
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
