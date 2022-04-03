import React from "react";
import "./Gallery.css";
import Title from "./comps/Title";
import { Uploadform } from "./comps/Uploadform";

export const Gallery = () => {
  return (
    <div className="Gallery">
      <Title />
      <Uploadform />
    </div>
  );
};
