import React from "react";
import { useEffect } from "react";
import { PostsFeed } from "../main/components/PostsFeed/PostsFeed";
import { PostsManagement } from "../common/hooks/PostsManagement";

export const Trending = () => {
  const { trendingPosts, getTrendingPosts } = PostsManagement();
  console.log(trendingPosts);
  useEffect(() => {
    getTrendingPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="content">
      <PostsFeed Posts={trendingPosts} />
    </div>
  );
};
