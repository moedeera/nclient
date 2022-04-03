import React from "react";
import { useFirestore } from "../hooks/useFireStore";

export const ImageGrid = () => {
  const { docs } = useFirestore("images");
  return <div className="img-grid">ImageGrid</div>;
};
