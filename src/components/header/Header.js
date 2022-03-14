import React from "react";
import logo from "../../logo.svg";
import "../../index.css";
import "./header.css";
import { CTA } from "./CTA";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <h5>Hello</h5>
        <h1>Moe Deera</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <div className="me">
          <img src={logo}></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
