import { createContext } from "react";

import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const {
    user,
    posts,
    setPosts,
    friendsPosts,
    TrendingPosts,
    CreatePosts,
    UpdatePostLikes,
    currentPost,
    setCurrentPost,
  } = usePosts();

  return (
    <UserContext.Provider
      value={{
        user,
        posts,
        setPosts,
        friendsPosts,
        TrendingPosts,
        CreatePosts,
        UpdatePostLikes,
        currentPost,
        setCurrentPost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
