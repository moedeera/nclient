import React from "react";
import image1 from "./wd1.svg";
import "./Showcase.css";

export const Showcase = () => {
  return (
    <div className="container">
      <div className="showcase-container" id="home">
        <div className="showcase-info-image">
          <img src={image1} alt="" />
        </div>
        <div className="showcase-info-section">
          <div className="showcase-info">
            <h1>
              {" "}
              <span
                style={{
                  color: "goldenrod",
                  fontWeight: "bold",
                }}
              >
                Creative
              </span>{" "}
              Full Stack Development{" "}
              <span
                style={{
                  color: "goldenrod",
                  fontWeight: "bold",
                }}
              >
                for the modern web
              </span>{" "}
            </h1>

            <p>
              Hello, I am a full stack developer mainly specializing in the MERN
              stack with SQL databases. Websites are my main area but I also
              build web applications and set up servers. Get into contact with
              me if you are interested.
            </p>
          </div>
          <div className="showcase-CTA">
            <button className="btn btn-alternate" id="portfolio-btn">
              <a href="#portfolio">Portfolio</a>
            </button>
            <button className="btn btn-alternate" id="contact-btn">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
        <div className="showcase-info-image-lg">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};
