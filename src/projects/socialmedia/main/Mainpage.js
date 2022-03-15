import React from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";
import "./MainPage.css";

export const Mainpage = () => {
  return (
    <div className="content">
      <CreatePost />
      <PostsFeed />
    </div>
  );
};
