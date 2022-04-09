import { useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";
import { mock_posts } from "../../../../assets/MockDataBase";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../../Gallery/Firebase/config";
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

  if (localStorage.getItem("Posts")) {
    if (JSON.parse(localStorage.getItem("Posts")) !== []) {
      AllPosts = JSON.parse(localStorage.getItem("Posts"));
    } else {
      AllPosts = mock_posts.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });
      localStorage.setItem("Posts", JSON.stringify(mock_posts));
    }
  } else {
    AllPosts = mock_posts.sort(function (a, b) {
      return new Date(b.datePosted) - new Date(a.datePosted);
    });
    localStorage.setItem("Posts", JSON.stringify(mock_posts));
  }
  return AllPosts;
};
const getCurrentPost = () => {
  let CurrentPost;

  if (localStorage.getItem("CurrentPost")) {
    if (JSON.parse(localStorage.getItem("CurrentPost")) !== []) {
      CurrentPost = JSON.parse(localStorage.getItem("CurrentPost"));
    } else {
      CurrentPost = mock_posts[0];
      localStorage.setItem("CurrentPost", JSON.stringify(CurrentPost));
    }
  } else {
    CurrentPost = mock_posts[0];
    localStorage.setItem("CurrentPost", JSON.stringify(CurrentPost));
  }
  return CurrentPost;
};
//

/// function that fetches values

export const usePosts = () => {
  const { days, months } = general();
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState();

  var friendsPosts = useMemo(
    function getFriendPosts() {
      const fetchedPosts = posts.filter((post) => post.status === "friends");

      return fetchedPosts.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });
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

  const createPosts = async (PostInfo, PostID) => {
    console.log(PostInfo.PstPicture.type);

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
      time.substring(3, 11);
    var date = new Date();

    let link;
    let userFeteched = localStorage.getItem("User");
    const user = JSON.parse(userFeteched);
    console.log(PostInfo.PstPicture);
    if (PostInfo.PstPicture) {
      const storageRef = projectStorage.ref(PostInfo.PstPicture.name);

      const collectionRef = projectFirestore.collection("post-files");

      storageRef.put(PostInfo.PstPicture).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        },
        (err) => {
          console.log(err);
        },
        async () => {
          link = await storageRef.getDownloadURL();
          let newPost;
          if (PostInfo.PstPicture.type === "video/mp4") {
            newPost = {
              id: PostID,
              status: "friends",
              Poster: user.id,
              PosterName: user.nickname,
              PosterPic: user.profilePic,
              postVideo: link,
              text: PostInfo.PstText,
              date: newDate,
              comments: [],
              views: 1,
              shares: 0,
              likers: [user.id],
              datePosted: date,
            };
          } else {
            newPost = {
              id: PostID,
              status: "friends",
              Poster: user.id,
              PosterName: user.nickname,
              PosterPic: user.profilePic,
              postPic: link,
              text: PostInfo.PstText,
              date: newDate,
              comments: [],
              views: 1,
              shares: 0,
              likers: [user.id],
              datePosted: date,
            };
          }

          const newPosts = [...posts, newPost];
          const arrangedPosts = newPosts.sort(function (a, b) {
            return new Date(b.datePosted) - new Date(a.datePosted);
          });

          setPosts(arrangedPosts);

          const createdAt = timestamp();
          collectionRef.add({
            link,
            createdAt,
          });
        }
      );
    } else {
      const newPost = {
        id: PostID,
        status: "friends",
        Poster: user.id,
        PosterName: user.nickname,
        PosterPic: user.profilePic,
        text: PostInfo.PstText,
        date: newDate,
        comments: [],
        views: 1,
        shares: 0,
        likers: [user.id],
        datePosted: date,
      };
      const newPosts = [...posts, newPost];
      const arrangedPosts = newPosts.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });
      console.log(arrangedPosts);
      setPosts(arrangedPosts);
    }

    // console.log("new post was created", PostInfo);
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

  useEffect(() => {
    // console.log(getDemoStatus());
    if (getDemoStatus()) {
      setPosts(getAllPosts());
      setCurrentPost(getCurrentPost());
    }
  }, []);

  return {
    posts,
    setPosts,
    friendsPosts,
    TrendingPosts,
    createPosts,
    UpdatePostLikes,
    currentPost,
    setCurrentPost,
    UpdateViews,
  };
};
