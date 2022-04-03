import React, { useState } from "react";
import "./Gallery.css";
import Title from "./comps/Title";
import { Uploadform } from "./comps/Uploadform";
import { ImageGrid } from "./comps/ImageGrid";
import Modal from "./comps/Modal";

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Gallery">
      <Title />
      <Uploadform />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};
