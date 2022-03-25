import { createContext } from "react";
import { useEffect, useState } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { UseComments } from "../projects/socialmedia/common/hooks/UseComments";
export const UserContext = createContext({});

const GetCurrentPage = () => {
  let CurrentPage;

  if (localStorage.getItem("CurrentPage")) {
    CurrentPage = JSON.parse(localStorage.getItem("CurrentPage"));
  } else {
    CurrentPage = "main";
    localStorage.setItem("CurrentPage", JSON.stringify(CurrentPage));
  }
  return CurrentPage;
};

export const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState(GetCurrentPage());
  const [postIndex, setPostIndex] = useState(0);

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
    localStorage.setItem("CurrentPage", JSON.stringify(page));
  }, [page]);

  useEffect(() => {
    localStorage.setItem("CurrentPostId", JSON.stringify(currentPost));
    GetComments(currentPost);
  }, [currentPost]);

  useEffect(() => {
    localStorage.setItem("Comments", JSON.stringify(comments));
  }, [comments]);

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
        page,
        setPage,
        postIndex,
        setPostIndex,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
