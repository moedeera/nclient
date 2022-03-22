import React from "react";
import { useEffect } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";
import { PostsManagement } from "../common/hooks/PostsManagement";

import "./MainPage.css";

export const Mainpage = () => {
  const { friendsPosts, GetPosts } = PostsManagement();

  useEffect(() => {
    GetPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(friendsPosts);
  return (
    <div className="content">
      <CreatePost />
      <PostsFeed Posts={friendsPosts} />
    </div>
  );
};
