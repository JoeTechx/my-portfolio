import React from "react";
import "./portfolio.css";
import { data } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>

              <h3>{title}</h3>
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
        <div className="view_more" style={{ marginBottom: '1.5rem' }}>
          <a href="/portfolio">view more...</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://github.com/JoeTechx?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects on GitHub
          </a>
        </div>
    </section>
  );
};

export default Portfolio;
