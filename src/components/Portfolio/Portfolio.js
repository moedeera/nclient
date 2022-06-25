import React, { useState } from "react";
import "./portfolio.css";
import social from "./SocialPic1.svg";
import diner from "./diner.svg";
import bootcamp from "./deerCoded.svg";
import elearning from "./Elearner.svg";
import old from "./old.svg";
import wp from "./wp.svg";

export const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const data = [
    {
      id: 1,
      img: social,
      header: "Social Media Network",
      text: "A mock full stack social media website designed using ReactJS and a Firebase backend",
      repo: "https://github.com/moedeera/nclient/tree/main/src/projects/socialmedia",
      live: "/socialmedia",
      color: "#e28743",
    },

    {
      id: 2,
      img: elearning,
      header: "E-Reader website",
      text: "A freelance project I am doing for a client who is building a cross platform reader application .",
      live: "https://www.librum-reader.com/",
      repo: "https://github.com/moedeera/ereader",
      color: "steelblue",
    },
    {
      id: 3,
      img: bootcamp,
      header: "Coding Bootcamp site",
      text: "  A mock coding Boot camp website built with CSS, HTML and JavaScript.It also can connect to a backend via form.",
      live: "https://deercoded.com",
      repo: "https://github.com/moedeera/FED-HT-website-design",
      color: "#5448C8",
    },
    {
      id: 4,
      img: diner,
      header: "Dining site",
      text: "  A dining website for a local business in Saskatoon, This was created using CSS,JavaScript and googleMaps.",
      live: "https://super-donair.com",
      repo: "https://github.com/moedeera/SuperDoniar",
      color: "#9A031E",
    },

    {
      id: 5,
      img: wp,
      header: "Wordpress Website",
      text: "A simple but elegant WordPress site for my personal portfolio. Designed to show my skills on the platform. These skills include use of custom themes, plugins, and builders.",
      live: "https://www.deeracode.ca",
      repo: "https://www.deeracode.ca",
      color: "#E98A15",
    },

    {
      id: 6,
      img: old,
      header: "Old Portfolio Website",
      text: "This was started around 2020 and was my first attempt to create a portfolio website.",
      live: "https://www.deeracode.com",
      repo: "https://github.com/moedeera/Login-Practice",
      color: "#003B36 ",
    },
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
          >
            <img src={project.img} alt="" className="portfolio_image" />
            <div className="portfolio_item_image ">
              <div className="portfolio_info">
                <h3>{project.header}</h3>
                <p>{project.text}</p>
              </div>

              <div className="portfolio_links">
                <a
                  href={project.live}
                  className="btn btn-primary live-demo"
                  id="live-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  className="btn spacing"
                  target="_blank"
                  rel="noreferrer"
                  id="live-repo"
                >
                  Repository
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
