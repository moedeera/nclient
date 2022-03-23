import React from "react";
import { useContext } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";

import { UserContext } from "../../../Context/Context";

import "./MainPage.css";

export const Mainpage = () => {
  const { friendsPosts, UpdatePostLikes } = useContext(UserContext);

  return (
    <div className="content">
      <CreatePost />
      <PostsFeed Posts={friendsPosts} LikeCounter={UpdatePostLikes} />
    </div>
  );
};
