import React from "react";

import { Header } from "../components/header/Header";
import { Nav } from "../components/Nav/Nav";

import { Portfolio } from "../components/Portfolio/Portfolio";
// import { About } from "../components/About/About";
// import { Footer } from "../components/Footer/Footer";
// import { Contact } from "../components/Contact/Contact";
import "../index.css";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Portfolio />
      {/* <About />

      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};
