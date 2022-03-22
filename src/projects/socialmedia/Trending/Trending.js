import React from "react";
import { useEffect } from "react";
import { PostsFeed } from "../main/components/PostsFeed/PostsFeed";
import { PostsManagement } from "../common/hooks/PostsManagement";

export const Trending = () => {
  const { trendingPosts } = PostsManagement();
  console.log(trendingPosts);

  return (
    <div className="content">
      <PostsFeed Posts={trendingPosts} />
    </div>
  );
};
