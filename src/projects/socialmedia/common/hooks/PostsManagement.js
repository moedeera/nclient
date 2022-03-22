import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";

export const PostsManagement = () => {
  const { days, months, allPosts } = general();
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  var postImage = "http://localhost:8080/images/";
  // var productionImage ='http://deeracode.com/images/'

  //GetsAllposts
  const GetAllPosts = () => {
    let AllPosts;

    if (localStorage.getItem("Posts")) {
      AllPosts = JSON.parse(localStorage.getItem("Posts"));
    } else {
      AllPosts = JSON.stringify(allPosts);
      localStorage.setItem("Posts", AllPosts);
    }

    setPosts(AllPosts);
    setFriendsPosts(AllPosts.filter((post) => post.status === "friends"));
    setTrendingPosts(
      AllPosts.sort(function (a, b) {
        return b.views - a.views;
      })
    );
  };
  // GetsPersonalPosts
  // const GetFriendsPosts = () => {
  //   setFriendsPosts(posts.filter((post) => post.status === "friends"));
  // };

  // Get Trending Posts
  // const getTrendingPosts = () => {
  //   setTrendingPosts(
  //     posts.sort(function (a, b) {
  //       return b.views - a.views;
  //     })
  //   );
  // };

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
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likers: [...post.likers, user.id] } : post
      )
    );
    localStorage.setItem("Posts", "posts");
  };

  useEffect(() => {
    GetAllPosts();
    // GetFriendsPost()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    posts,
    GetAllPosts,
    // GetFriendsPosts,
    CreatePosts,
    trendingPosts,
    // getTrendingPosts,
    friendsPosts,
    setFriendsPosts,
    UpdatePostLikes,
  };
};
