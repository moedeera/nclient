import { createContext } from "react";
import { useEffect } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { UseComments } from "../projects/socialmedia/common/hooks/UseComments";
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
    UpdateViews,
  } = usePosts();
  const { GetComments, comments, setComments, CreateComment } = UseComments();

  useEffect(() => {
    GetComments(currentPost.id);
  }, []);

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
        GetComments,
        setComments,
        comments,
        UpdateViews,
        CreateComment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
