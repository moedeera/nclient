import React from "react";
import { useContext } from "react";
import { PostsFeed } from "../main/components/PostsFeed/PostsFeed";

import { UserContext } from "../../../Context/Context";

export const Trending = () => {
  const { TrendingPosts, UpdatePostLikes } = useContext(UserContext);
  return (
    <div className="content">
      <PostsFeed
        Posts={TrendingPosts}
        LikeCounter={UpdatePostLikes}
        Page="trending"
      />
    </div>
  );
};
