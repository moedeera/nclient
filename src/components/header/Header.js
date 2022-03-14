import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      {" "}
      <h1>Welcome to the Main Page</h1>
      <Link to="/about">
        <h3>Go to About page</h3>
      </Link>
    </div>
  );
};
