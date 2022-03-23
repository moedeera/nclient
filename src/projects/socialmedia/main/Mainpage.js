import React from "react";
import { useContext } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";
import { PostsManagement } from "../common/hooks/PostsManagement";
import { general } from "../common/function/GeneralFunctions";
import { UserContext } from "../../../Context/Context";

import "./MainPage.css";

export const Mainpage = () => {
  const { UpdatePostLikes } = PostsManagement();
  const { friendsPosts } = useContext(UserContext);

  return (
    <div className="content">
      <CreatePost />
      <PostsFeed Posts={friendsPosts} LikeCounter={UpdatePostLikes} />
    </div>
  );
};
