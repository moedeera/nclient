import React, { useEffect } from "react";
import { useContext } from "react";
import { CreatePost } from "./components/CreatePosts/CreatePost";
import { PostsFeed } from "./components/PostsFeed/PostsFeed";

import { UserContext } from "../../../Context/Context";

import "./MainPage.css";

export const Mainpage = () => {
  const { friendsPosts, UpdatePostLikes, setPage } = useContext(UserContext);

  useEffect(() => {
    setPage("main");
  }, []);

  return (
    <div className="content">
      <CreatePost />
      <PostsFeed
        Posts={friendsPosts}
        LikeCounter={UpdatePostLikes}
        Page="main"
      />
    </div>
  );
};
