import { useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";
import { mock_posts } from "../../../../assets/MockDataBase";

// Fetch DemoStatus
const getDemoStatus = () => {
  if (localStorage.getItem("token")) {
    return false;
  } else {
    return true;
  }
};

const getAllPosts = () => {
  let AllPosts;

  if (getDemoStatus()) {
    if (localStorage.getItem("Posts")) {
      AllPosts = JSON.parse(localStorage.getItem("Posts"));
    } else {
      AllPosts = mock_posts;
      localStorage.setItem("Posts", JSON.stringify(mock_posts));
    }
    return AllPosts;
  }
};
const getCurrentPost = () => {
  let CurrentPost;

  if (getDemoStatus) {
    if (localStorage.getItem("CurrentPost")) {
      CurrentPost = JSON.parse(localStorage.getItem("CurrentPost"));
    } else {
      CurrentPost = mock_posts[0];
      localStorage.setItem("CurrentPost", JSON.stringify(CurrentPost));
    }
    return CurrentPost;
  }
};

/// function that fetches values

export const usePosts = () => {
  const { days, months } = general();
  const [posts, setPosts] = useState(getAllPosts());
  const [currentPost, setCurrentPost] = useState(getCurrentPost());

  var friendsPosts = useMemo(
    function getFriendPosts() {
      return posts.filter((post) => post.status === "friends");
    },
    [posts]
  );
  var TrendingPosts = useMemo(
    function getTrendingPosts() {
      return posts.sort(function (a, b) {
        return b.views - a.views;
      });
    },
    [posts]
  );

  // useEffect(() => {
  //   localStorage.setItem("CurrentPost", JSON.stringify(currentPost));
  // }, [currentPost]);
  var postImage = "http://localhost:8080/images/";
  // var productionImage ='http://deeracode.com/images/'

  const CreatePosts = async (PostInfo) => {
    let user = localStorage.getItem("User");
    console.log("new post was created", PostInfo);
    var PostID = Math.floor(Math.random() * 1000 + 1);
    var CurrentDate = new Date();
    var day = JSON.stringify(days[CurrentDate.getDay()]);
    var month = JSON.stringify(months[CurrentDate.getMonth()]);
    var Year = JSON.stringify(CurrentDate.getUTCFullYear());
    var time = CurrentDate.toLocaleTimeString();
    console.log(time);
    const newDate =
      day.substring(1, 4) +
      " " +
      month.substring(1, 4) +
      " " +
      Year.substring(2, 4) +
      " " +
      "at" +
      " " +
      time.substring(3, 10);
    var date = new Date();
    const newPost = {
      id: PostID,
      status: "public",
      Poster: user.id,
      PosterName: user.nickname,
      PosterPic: user.profilePic,
      postPic: postImage.concat(PostInfo.PstPicture.name),
      text: PostInfo.textPstText,
      date: newDate,
      comments: [],
      views: 1,
      shares: 0,
      likers: [user.id],
      datePosted: date,
    };

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = new FormData();

    data.append("file", PostInfo.PstPicture.name);
    const body = newPost;

    try {
      const res = await axios.post(
        "http://localhost:8080/posts/upload",
        data,
        config
      );
      const response = await axios.post(
        "http://localhost:8080/posts/create",
        body,
        configuration
      );
      var addPosts = posts.push(newPost);
      setPosts(addPosts);
      console.log("post sent, filename:", PostInfo.PstPicture.name);
    } catch (error) {
      // console.log(error);
      // const res = await axios.post(
      //   "http://deercoded.herokuapp.com/upload",
      //   data,
      //   config
      // );
      // const response = await axios.post(
      //   "http://deercoded.herokuapp.com/create",
      //   body,
      //   configuration
      // );

      // setPosts(res.data);
      // console.log("new post was successful", response);
      console.log(error);
    }
  };
  const UpdateViews = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, views: post.views + 1 } : post
      )
    );
  };

  // Update Post Likes
  const UpdatePostLikes = (id) => {
    if (getDemoStatus) {
      let updatedPosts;
      let user = localStorage.getItem("User");
      var match = posts.find((post) => post.id === id);

      if (match.likers.some((like) => like === user.id)) {
        match.likers = match.likers.filter((like) => like !== user.id);
        updatedPosts = posts.map((post) =>
          post.id === id ? { ...post, likers: [...match.likers] } : post
        );
        setPosts(updatedPosts);
      } else {
        updatedPosts = posts.map((post) =>
          post.id === id ? { ...post, likers: [...post.likers, user.id] } : post
        );
        setPosts(updatedPosts);
      }

      localStorage.setItem("Posts", JSON.stringify(updatedPosts));
    }
  };

  // useEffect(() => {
  //   console.log(getDemoStatus());
  //   if (getDemoStatus()) {      setPosts(getAllPosts());
  //     setCurrentPost(getCurrentPost());
  //   }
  // }, []);

  return {
    posts,
    setPosts,
    friendsPosts,
    TrendingPosts,
    CreatePosts,
    UpdatePostLikes,
    currentPost,
    setCurrentPost,
    UpdateViews,
  };
};
