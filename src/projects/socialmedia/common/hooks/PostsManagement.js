import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";

export const PostsManagement = () => {
  const {days,months}= general()
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  var postImage ='http://localhost:8080/images/'

  //GetsAllposts
  const GetAllPosts = async () => {
    let newPosts;

    if (process.env)
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log(user);

        const testvar = await axios.get("http://localhost:8080/posts", config);
        console.log("retrieved all public posts", testvar.data);
        newPosts = testvar.data;
      } catch (error) {
        const testvar = await axios.get(
          "https://deercoded.herokuapp.com/posts"
        );

        console.log("got all public posts", testvar.data);
        newPosts = testvar.data;
      }
    setPosts(newPosts);
    return newPosts;
  };
  // GetsPersonalPosts
  const GetPosts = async () => {
    if (user) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = user;

      try {
        const res = await axios.post(
          "http://localhost:8080/posts",
          body,
          config
        );

        setFriendsPosts(res.data);
        console.log("retrieved posts", res.data);
        return res.data;
      } catch (error) {
        console.log(error);
        const res = await axios.post(
          "https://deercoded.herokuapp.com/posts",
          body,
          config
        );

        setFriendsPosts(res.data);
        console.log("retrieved posts", res.data);
        return res.data;
      }
    } else {
      GetAllPosts();
    }
  };
  // Get Trending Posts
  const getTrendingPosts = async () => {
    var allPosts = await GetAllPosts();

    setTrendingPosts(
      allPosts.sort(function (a, b) {
        return b.views - a.views;
      })
    );
  };
  //Create Posts
  const CreatePosts = async (PostInfo) => {
    console.log("new post was created", PostInfo);
    var PostID = Math.floor(Math.random() * 1000 + 1);
    var CurrentDate = new Date();
    var day = JSON.stringify(days[CurrentDate.getDay()]);
    var month = JSON.stringify(months[CurrentDate.getMonth()]);
    var Year = JSON.stringify(CurrentDate.getUTCFullYear());
    var time = CurrentDate.toLocaleTimeString()
console.log(time);
    const newDate =
      day.substring(1, 4) +
      " " +
      month.substring(1, 4) +
      " " +
      Year.substring(2, 4)+
      " " +
      "at" +
      time.substring(2, 10)
      ;


      var date = new Date();
      const newPost = {
        id: PostID,
        status: "public",
        Poster: user.id,
        PosterName: user.nickname,
        PosterPic: user.profilePic,
        postPic:postImage.concat(PostInfo.PstPicture.name),
        text: PostInfo.textPstText,
        date: newDate,
        comments: [],
       views:1,
       shares:0,
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
        "Content-Type":  "application/json",
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

      setPosts({ ...posts, newPost });
      console.log("post sent, filename:", PostInfo.PstPicture.name);
    } catch (error) {
      console.log(error);
      const res = await axios.post(
        "http://https://deercoded.herokuapp.com/upload",
        data,
        config
      );
      const response = await axios.post(
        "http://https://deercoded.herokuapp.com/create",
        body,
        configuration
      );

      setPosts(res.data);
      console.log("new post was successful",response);
    }
  };
  // Fetch Trending Posts

  return {
    posts,
    GetAllPosts,
    GetPosts,
    CreatePosts,
    trendingPosts,
    getTrendingPosts,
    friendsPosts,
    setFriendsPosts,
  };
};
