import { createContext } from "react";
import { useEffect, useState } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { useComments } from "../projects/socialmedia/common/hooks/UseComments";
import { useProfiles } from "../projects/socialmedia/common/hooks/useProfiles";
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
    var DemoUser = {
      id: 1,
      status: "public",
      name: "Jennifer Smith",
      nickname: "Jenny",
      location: "Toronto, ON",
      description: "Night Owl Queen",
      age: 25,
      scores: [125, 102, 55],
      header: "Mom to 2 cats and a Dog",
      about:
        "Photography aficionado, GamerGirl, Outdoorsy-gal, solo-traveler. Vlogger...pretty much your average millennial",
      Feed: [
        { name: "Connie Williams", type: "like", id: 2 },
        { name: "Matt Russo", type: "request", id: 3 },
        { name: "James Santos", type: "request", id: 4 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 26,
      login: false,
      Notifications: 2,
      Notices: [
        {
          id: 50,
          type: "message",
          user: 2,
          from: "Connie",
          date: new Date("2022-03-01"),
          picture:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Hey do you wanna go skiing tomorrow?",
          pending: true,
        },
        {
          id: 20,
          type: "message",
          user: 6,
          from: "Mitch Wiz",
          date: new Date("2022-02-25"),
          text: "Thanks for the gift yo sent!",
          picture:
            "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",

          pending: true,
        },
      ],

      Friends: [2, 3, 4, 6, 11],
      followers: [5, 6, 9],
      following: [5, 7, 9],
      Posts: [6, 5, 1],
    };

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

export const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState(GetCurrentPage());

  const [postIndex, setPostIndex] = useState(0);
  const {
    profiles,
    suggestedProfiles,
    friendProfiles,
    GetSuggestedProfiles,
    GetFriendsProfiles,
  } = useProfiles();

  const [user, setUser] = useState(LoadUser());

  const {
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
  const { GetComments, comments, setComments, CreateComment } = useComments();

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);

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

  useEffect(() => {
    GetSuggestedProfiles(user);
    GetFriendsProfiles(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        page,
        setPage,
        postIndex,
        setPostIndex,
        profiles,
        suggestedProfiles,
        friendProfiles,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
