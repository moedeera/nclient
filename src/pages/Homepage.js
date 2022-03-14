import React from "react";

import { Header } from "../components/header/Header";
import { Nav } from "../components/Nav/Nav";
import { About } from "../components/About/About";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Footer } from "../components/Footer/Footer";
import { Contact } from "../components/Contact/Contact";
import "../index.css";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
