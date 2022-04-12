import React, { useEffect } from "react";
import { useContext } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";
import { motion } from "framer-motion";

import { UserContext } from "../../../Context/Context";

import "./MainPage.css";

export const Mainpage = () => {
  const { friendsPosts, UpdatePostLikes, setPage, progress } =
    useContext(UserContext);

  useEffect(() => {
    setPage("main");
  }, []);

  return (
    <div className="content">
      <CreatePost />

      {progress !== null && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}

      <PostsFeed
        Posts={friendsPosts}
        LikeCounter={UpdatePostLikes}
        Page="main"
      />
    </div>
  );
};
