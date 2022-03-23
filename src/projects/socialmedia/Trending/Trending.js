import React from "react";
import { useContext } from "react";
import { PostsFeed } from "../main/components/PostsFeed/PostsFeed";

import { UserContext } from "../../../Context/Context";

export const Trending = () => {
  const { TrendingPosts } = useContext(UserContext);
  return (
    <div className="content">
      <PostsFeed Posts={TrendingPosts} />
    </div>
  );
};
