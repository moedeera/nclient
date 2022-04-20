import React from "react";
import "./portfolio.css";
import social from "./Socialpic1.jpg";
import diner from "./diner.jpg";
import bootcamp from "./deerCoded.jpg";
import elearning from "./Elearner.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        <article className="portfolio_item social-media-project">
          <img src={social} alt="" />
          <div className="portfolio_item_image ">
            <div className="portfolio_info">
              <h3>Social Media website</h3>
              <p>
                A mock full stack social media website designed using ReactJS
                and a Firebase backend.
              </p>
            </div>

            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn spacing"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="/socialmedia" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={diner} alt="" />
          <div className="portfolio_item_image">
            <div className="portfolio_info">
              {" "}
              <h3>Dining Website</h3>
              <p>
                A dining website for a local business in Saskatoon, This was
                created using CSS,JavaScript and googleMaps.
              </p>
            </div>

            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn spacing"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://super-donair.com" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={elearning} alt="" />
          <div className="portfolio_item_image">
            <div className="portfolio_info">
              {" "}
              <h3>Elearning website</h3>
              <p>
                A full stack Elearning website built using JavaScript, Node and
                Express.
              </p>
            </div>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn spacing"
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.deeracode.com/Projects/profile"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <img src={bootcamp} alt="" />
          <div className="portfolio_item_image">
            <div className="portfolio_info">
              {" "}
              <h3>Coding Bootcamp Website</h3>
              <p>
                A full stack Elearning website built using JS, Node and Express.
              </p>
            </div>
            <div className="portfolio_links">
              <a
                href="https://github.com"
                className="btn spacing"
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
          <img src={bootcamp} alt="" />
          <div className="portfolio_item_image">
            <h3>Old Portfolio Website</h3>
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
