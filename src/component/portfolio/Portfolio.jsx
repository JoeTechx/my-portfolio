import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-data-Visualization",
  },
  {
    id: 2,
    Image: IMG2,
    title: "CHarts templates and info-graphics in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-Kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Figma dashboard UI Kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/17290927-Eclipse-Figma-dashboard-UI-Kit-for-data-design-web-apps",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Chart templates & info-graphics in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-data-Visualization",
  },
];

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
    </section>
  );
};

export default Portfolio;
