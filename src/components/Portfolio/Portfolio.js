import React from "react";
import "./portfolio.css";
import social from "./social.jpg";
import diner from "./diner.jpg";
import chess from "./chess.jpg";
import elearning from "./elearning.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        <article className="portfolio_item social-media-project">
          <img src={social} alt="" />
          <div className="portfolio_item_image ">
            <h3>Social Media website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="/SocialMedia" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={diner} alt="" />
          <div className="portfolio_item_image">
            <h3>Dining Website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={elearning} alt="" />
          <div className="portfolio_item_image">
            <h3>Elearning Website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={social} alt="" />
          <div className="portfolio_item_image">
            <h3>Elearning Website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={chess} alt="" />
          <div className="portfolio_item_image">
            <h3>Chess Website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={social} alt="" />
          <div className="portfolio_item_image">
            <h3>Elearning Website</h3>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
