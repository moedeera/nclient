import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";

export const PostsManagement = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);

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
  const CreatePosts = async (newPost) => {
    console.log("new post was created", newPost);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("text", newPost.PstText);
    data.append("file", newPost.PstPicture);

    try {
      const res = await axios.post(
        "http://localhost:8080/posts/create",
        data,
        config
      );

      setPosts({ ...posts, newPost });
      console.log("retrieved posts", res.data);
    } catch (error) {
      console.log(error);
      const res = await axios.post(
        "http://https://deercoded.herokuapp.com/create",
        data,
        config
      );

      setPosts(res.data);
      console.log("new post was successful");
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
