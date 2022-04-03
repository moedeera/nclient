import React from "react";
import "./Gallery.css";
import Title from "./comps/Title";
import { Uploadform } from "./comps/Uploadform";
import { ImageGrid } from "./comps/ImageGrid";

export const Gallery = () => {
  return (
    <div className="Gallery">
      <Title />
      <Uploadform />
      <ImageGrid />
    </div>
  );
};
