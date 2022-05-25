import React from "react";
import "./about.css";

export const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        I am self-taught web developer who started learning code in 2020. I have
        built many projects and learned multiple skills during that time-frame.
        The coding industry appeals to me because it always encourages us to
        keep learning and staying up to date with new trends and technologies. I
        truly enjoy discovering new languages and building new projects. If you
        are interested in a partnership or hiring purposes, just send me a
        message and I will respond as soon as possible.
      </p>
      <h1>Skills</h1>
      <ul>
        <li>
          <i className="fab fa-css3-alt fa-4x" style={{ color: "#256eff" }}></i>
        </li>
        <li>
          <i className="fab fa-js fa-4x" style={{ color: "goldenrod" }}></i>
        </li>
        <li>
          <i className="fab fa-react fa-4x" style={{ color: "#4DB5FF" }}></i>
        </li>
        <li>
          <i className="fab fa-node fa-4x" style={{ color: "green" }}></i>
        </li>
      </ul>
    </section>
  );
};
