import React from "react";
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <h5>Elearning Website</h5>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repository
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://github.com" className="btn">
              Live Demo
            </a>
            <img src="" alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};
