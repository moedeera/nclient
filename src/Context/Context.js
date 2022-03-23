import { createContext } from "react";
import { useState, useMemo } from "react";
import { PostsManagement } from "../projects/socialmedia/common/hooks/PostsManagement";

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
  } = PostsManagement();

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
