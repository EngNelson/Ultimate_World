import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/EngNelson/Power-Admin.git",
    demo: "https://nginyatechnologies.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts Application & Infographics in Figma",
    github: "https://github.com/EngNelson/Talk_It_Out.git",
    demo: "https:",
  },
  {
    id: 3,
    image: IMG3,
    title: "Maintaining Tasks and Tracking Progress",
    github: "https://github.com/EngNelson/Data-Systems.git",
    demo: "https://nginyatechnologies.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Figma Dashboard UI kit for data Design Web Apps",
    github: "https://github.com/EngNelson/Projects-Manager.git",
    demo: "https:",
  },
  {
    id: 5,
    image: IMG5,
    title: "Business Management System",
    github: "https://github.com/EngNelson/Bussiness-Manager.git",
    demo: "https:",
  },
  {
    id: 6,
    image: IMG6,
    title: "School Management System",
    github: "https://github.com/EngNelson/E-Learning.git",
    demo: "https://epicdca.netlify.app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  {" "}
                  Live Demo{" "}
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
