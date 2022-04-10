import { createContext } from "react";
import { useEffect, useState } from "react";
import { usePosts } from "../projects/socialmedia/common/hooks/UsePosts";
import { useComments } from "../projects/socialmedia/common/hooks/UseComments";
import { useProfiles } from "../projects/socialmedia/common/hooks/useProfiles";
import useDatabase from "../projects/socialmedia/common/hooks/UseDataBase";
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
          kind: "sent",
          user: 2,
          from: "Connie",
          date: new Date("2022-03-01"),
          Date: "March 01 2022",
          picture:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Hey do you wanna go skiing tomorrow?",
          pending: true,
        },
        {
          id: 20,
          type: "message",
          kind: "reply",
          user: 6,
          from: "Mitch Wiz",
          date: new Date("2022-02-25"),
          Date: "February 25 2022",
          text: "Thanks for the gift yo sent!",
          picture:
            "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",

          pending: true,
        },

        {
          id: 22,
          type: "post",
          kind: "share",
          share: "Jessica Swanson",
          user: 2,
          post: 8,
          from: "Connie Williams",
          date: new Date("2022-03-28"),
          Date: "March 28 2022",
          picture:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

          pending: false,
        },
        {
          id: 23,
          type: "post",
          kind: "posted",
          user: 5,
          post: 5,
          from: "Matthew Russo",
          date: new Date("2022-03-28"),
          Date: "March 02 2022",
          picture:
            "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

          pending: false,
        },
        {
          id: 21,
          type: "post",
          kind: "share",
          share: "SHA",
          user: 2,
          post: 10,
          from: "Connie Williams",
          date: new Date("2022-02-25"),
          Date: "February 25 2022",
          picture:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

          pending: true,
        },

        {
          id: 20,
          type: "post",
          kind: "posted",
          share: "Mitch Wiz",
          user: 2,
          post: 7,
          from: "Mitch Wiz",
          date: new Date("2022-02-22"),
          Date: "February 22 2022",
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
      console.log(currentPost, "it changed");
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
