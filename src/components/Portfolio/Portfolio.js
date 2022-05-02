import React, { useState } from "react";
import "./portfolio.css";
import social from "./SocialPic1.svg";
import diner from "./diner.svg";
import bootcamp from "./deerCoded.svg";
import elearning from "./Elearner.svg";
import old from "./old.svg";

export const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const data = [
    {
      id: 1,
      img: social,
      header: "Social Media Network",
      text: "A mock full stack social media website designed using ReactJSand a Firebase backend",
      repo: "https://github.com/moedeera/nclient/tree/main/src/projects/socialmedia",
      live: "/socialmedia",
      color: "#e28743",
    },
    {
      id: 2,
      img: bootcamp,
      header: "Coding Bootcamp site",
      text: "  A mock coding Boot camp website built with CSS, HTML and JavaScript.It also can connect to a backend for process registration.",
      live: "https://deercoded.com",
      repo: "https://github.com/moedeera/FED-HT-website-design",
      color: "#5448C8",
    },
    {
      id: 3,
      img: diner,
      header: "Dining site",
      text: "  A dining website for a local business in Saskatoon, This was created using CSS,JavaScript and googleMaps.",
      live: "https://super-donair.com",
      repo: "https://github.com/moedeera/SuperDoniar",
      color: "#9A031E",
    },
    // {
    //   id: 4,
    //   img: elearning,
    //   header: "E-learning website",
    //   text: " A full stack E-learning website built using JavaScript, Node and Express.",
    //   live: "https://www.deeracode.com/Projects/profile",
    //   repo: "https://github.com/moedeera/Login-Practice",
    //   color: "#0E6BA8",
    // },
    {
      id: 5,
      img: old,
      header: "Old Portfolio Website",
      text: "This was started around 2020 and was my first attempt to create a portfolio website.",
      live: "https://www.deeracode.com",
      repo: "https://github.com/moedeera/Login-Practice",
      color: "#E98A15",
    },
    // {
    //   id: 6,
    //   img: old,
    //   header: "Old Portfolio Website",
    //   text: "This was started around 2020 and was my first attempt to create a portfolio website.",
    //   live: "www.deeracode.com",
    //   repo: "https://github.com/moedeera/Login-Practice",
    //   color: "#003B36 ",
    // },
  ];
  console.log(data);
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        {data.map((project) => (
          <article
            key={project.id}
            className="portfolio_item social-media-project"
            style={{
              backgroundColor: project.color,
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            <img src={project.img} alt="" className="portfolio_image" />
            <div className="portfolio_item_image ">
              <div className="portfolio_info">
                <h3>{project.header}</h3>
                <p>{project.text}</p>
              </div>

              <div className="portfolio_links">
                <a
                  href={project.repo}
                  className="btn spacing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href={project.live} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
