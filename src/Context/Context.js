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
  } = usePosts();
  const { GetComments, comments, setComments } = UseComments();

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
