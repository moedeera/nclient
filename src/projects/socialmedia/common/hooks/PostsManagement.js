import { useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";

export const PostsManagement = () => {
  const { days, months, allPosts } = general();
  const { user, posts, setPosts } = useContext(UserContext);

  var postImage = "http://localhost:8080/images/";
  // var productionImage ='http://deeracode.com/images/'

  const CreatePosts = async (PostInfo) => {
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
      console.log(error);
      const res = await axios.post(
        "http://deercoded.herokuapp.com/upload",
        data,
        config
      );
      const response = await axios.post(
        "http://deercoded.herokuapp.com/create",
        body,
        configuration
      );

      setPosts(res.data);
      console.log("new post was successful", response);
    }
  };
  // Update Post Likes
  const UpdatePostLikes = (id) => {
    var updatedPosts;
    console.log("like occurred");
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
  };

  return {
    // GetFriendsPosts,
    CreatePosts,

    // getTrendingPosts,

    UpdatePostLikes,
  };
};
