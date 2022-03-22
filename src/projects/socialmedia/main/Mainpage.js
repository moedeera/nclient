import React from "react";
import { useEffect } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";
import { PostsManagement } from "../common/hooks/PostsManagement";

import "./MainPage.css";

export const Mainpage = () => {
  const { friendsPosts, UpdatePostLikes, posts } = PostsManagement();

  console.log(posts);
  return (
    <div className="content">
      <CreatePost />
      <PostsFeed Posts={friendsPosts} LikeCounter={UpdatePostLikes} />
    </div>
  );
};
