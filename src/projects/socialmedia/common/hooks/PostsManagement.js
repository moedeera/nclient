import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";

export const PostsManagement = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  //GetsAllposts
  const GetAllPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(user);

      // const testvar = await axios.get("https://deercoded.herokuapp.com/posts");
      const testvar = await axios.get("http://localhost:8080/posts", config);
      console.log("got all public posts", testvar.data);
    } catch (error) {
      const testvar = await axios.get("https://deercoded.herokuapp.com/posts");

      console.log("got all public posts", testvar.data);
    }
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

        setPosts(res.data);
        console.log("retrieved posts", res.data);
        return res.data;
      } catch (error) {
        console.log(error);
        const res = await axios.post(
          "http://https://deercoded.herokuapp.com/posts",
          body,
          config
        );

        setPosts(res.data);
        console.log("retrieved posts", res.data);
        return res.data;
      }
    } else {
      GetAllPosts();
    }
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return {
    posts,
    GetAllPosts,
    GetPosts,
  };
};
