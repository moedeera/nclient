import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../Context/Context";
import { PostsFeed } from "../../components/PostsFeed/PostsFeed";

export const Trending = () => {
  const { TrendingPosts, UpdatePostLikes, setPage } = useContext(UserContext);

  useEffect(() => {
    setPage("trending");
  }, []);

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
