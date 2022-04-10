import { createContext } from "react";
import { useEffect, useState } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { useComments } from "../projects/socialmedia/common/hooks/UseComments";
import { useProfiles } from "../projects/socialmedia/common/hooks/useProfiles";
import useDatabase from "../projects/socialmedia/common/hooks/UseDataBase";
import { mock_profiles } from "../assets/MockDataBase";
export const UserContext = createContext({});

//GetDemoStatus
const getDemoStatus = () => {
  let demo = true;
  if (localStorage.getItem("token")) {
    demo = false;
  }
  return demo;
};

//LoadUser
const LoadUser = () => {
  if (localStorage.getItem("token")) {
    return null;
  } else {
    var DemoUser = mock_profiles[0];
    let User;
    if (localStorage.getItem("User")) {
      User = JSON.parse(localStorage.getItem("User"));
    } else {
      User = DemoUser;
      localStorage.setItem("User", JSON.stringify(User));
    }

    return User;
  }
};
//
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

//

export const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState(GetCurrentPage());
  const [file, setFile] = useState(null);
  const [postIndex, setPostIndex] = useState(0);
  const { progress, url, error } = useDatabase();
  const {
    profiles,
    setProfiles,
    suggestedProfiles,
    friendProfiles,
    GetSuggestedProfiles,
    GetFriendsProfiles,
    viewedProfile,
    setViewedProfile,
    filter,
    filteredProfiles,
  } = useProfiles();

  const [user, setUser] = useState(LoadUser());

  const {
    posts,
    setPosts,
    friendsPosts,
    TrendingPosts,
    createPosts,
    UpdatePostLikes,
    currentPost,
    setCurrentPost,
    UpdateViews,
  } = usePosts();
  const {
    getComments,
    comments,
    setComments,
    createComment,
    createCommentList,
  } = useComments({
    setPosts,
  });

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("CurrentPage", JSON.stringify(page));
  }, [page]);

  useEffect(() => {
    if (currentPost) {
      localStorage.setItem("CurrentPost", JSON.stringify(currentPost));

      getComments(currentPost);
    }
  }, [currentPost]);

  useEffect(() => {
    localStorage.setItem("Comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("Viewed-Profile", JSON.stringify(viewedProfile));
  }, [viewedProfile]);

  useEffect(() => {
    if (Array.isArray(posts) && posts.length > 0) {
      localStorage.setItem("Posts", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    GetSuggestedProfiles(user);
    GetFriendsProfiles(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        posts,
        setPosts,
        friendsPosts,
        TrendingPosts,
        createPosts,
        UpdatePostLikes,
        currentPost,
        setCurrentPost,
        getComments,
        setComments,
        comments,
        UpdateViews,
        createComment,
        page,
        setPage,
        postIndex,
        setPostIndex,
        profiles,
        setProfiles,
        suggestedProfiles,
        friendProfiles,
        viewedProfile,
        setViewedProfile,
        filter,
        filteredProfiles,
        file,
        setFile,
        progress,
        url,
        error,
        createCommentList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
