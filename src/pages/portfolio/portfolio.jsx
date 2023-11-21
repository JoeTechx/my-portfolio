import { useState } from "react";
import { moreData } from "../../data";
import { AiOutlineHome } from "react-icons/ai";

import "./portfolio.css";

const Portfolio = () => {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {moreData.map(({ id, Image, title, github, demo, des }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>

              <h3>{title}</h3>
              <p className="description">{des}</p>
              <div className="portfolio__item-Cta">
                <a href={github} target="blank" className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="home_active">
        <a
          href="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
