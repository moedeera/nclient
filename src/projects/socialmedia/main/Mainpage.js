import React from "react";
import { CreatePost } from "./components/CreatePost";
import "./MainPage.css";

export const Mainpage = () => {
  return (
    <div className="content">
      <CreatePost />
    </div>
  );
};
