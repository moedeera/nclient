import React from "react";
import "./nav.css";
import { useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState(1);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => {
          setActive(1);
        }}
        className={active === 1 ? "active" : ""}
      >
        <i class="fas fa-home "></i>
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActive(2);
        }}
        className={active === 2 ? "active" : ""}
      >
        <i class="fas fa-code "></i>
      </a>

      <a
        href="#about"
        onClick={() => {
          setActive(3);
        }}
        className={active === 3 ? "active" : ""}
      >
        <i class="fas fa-question "></i>
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActive(4);
        }}
        className={active === 4 ? "active" : ""}
      >
        <i class="fas fa-comment "></i>
      </a>
    </nav>
  );
};
