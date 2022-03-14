import React from "react";
import logo from "../../logo.svg";
import "../../index.css";
import "./header.css";
import { CTA } from "./CTA";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hi there!</h5>
        <h1>Moe Deera</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={logo} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
