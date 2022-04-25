import { createContext } from "react";
import { useEffect, useState } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { useComments } from "../projects/socialmedia/common/hooks/UseComments";
import { useProfiles } from "../projects/socialmedia/common/hooks/useProfiles";
import useDatabase from "../projects/socialmedia/common/hooks/UseDataBase";
import { mock_profiles } from "../assets/MockDataBase";
import axios from "axios";
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
const LoadUser = async () => {
  // if (localStorage.getItem("Token")) {
  //   let Token = JSON.parse(localStorage.getItem("Token"));
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const res = await axios.get(
  //       "http://localhost:5000/api/profiles",
  //       { headers: { Authorization: `Bearer ${Token}` } },

  //       config
  //     );

  //     console.log(JSON.parse(res.data[0].profile));
  //     // console.log(JSON.parse(res.data[0].profile));

  //     // retrieve
  //     // redirect to main page
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
  const { url, error } = useDatabase();
  const [fsSettings, setFsSettings] = useState("main");
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

  const [user, setUser] = useState(null);

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
    progress,
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
    const getUser = async () => {
      const newUser = await LoadUser();
      setUser(newUser);
    };
    getUser().catch(console.error);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("User", JSON.stringify(user));
    }
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
  }, [user]);

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
        fsSettings,
        setFsSettings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
