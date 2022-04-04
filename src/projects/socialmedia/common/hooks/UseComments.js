import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../../../Context/Context";
import { mock_comments } from "../../../../assets/MockDataBase";

const getDemoStatus = () => {
  if (localStorage.getItem("token")) {
    return false;
  } else {
    return true;
  }
};

const getAllComments = () => {
  let Comments;
  if (getDemoStatus()) {
    if (localStorage.getItem("Comments-all")) {
      Comments = JSON.parse(localStorage.getItem("Comments-all"));
    } else {
      Comments = mock_comments;
      localStorage.setItem("Comments-all", JSON.stringify(mock_comments));
    }
    return Comments;
  }
};

const getCurrentComments = () => {
  let currentComments;
  if (getDemoStatus()) {
    if (localStorage.getItem("Comments")) {
      const parsed = JSON.parse(localStorage.getItem("Comments"));
      if (Array.isArray(parsed) && parsed.length > 0) {
        currentComments = parsed;
      }
    }
    if (!currentComments) {
      currentComments = [{ PostId: 0, commentList: [] }];
      localStorage.setItem("Comments", JSON.stringify(currentComments));
    }
  }

  return currentComments;
};
export const useComments = ({ setPosts }) => {
  const [comments, setComments] = useState(getCurrentComments());

  const getComments = (Post) => {
    // fetch posts for ID
    if (!Post) return null;
    if (getDemoStatus) {
      let allComments = getAllComments();
      setComments(allComments.filter((comment) => comment.PostId === Post.id));
    }
  };

  const createComment = (comment, postId, user) => {
    console.log("comment was created", comment, postId, user.name);
    let newPosts;
    const key = Math.floor(Math.random() * 1000 + 1);

    const newComment = {
      id: key,
      author: user.id,
      name: user.name,
      picture: user.profilePic,
      text: comment,
    };
    if (getDemoStatus && localStorage.getItem("Comments")) {
      let currentComments = JSON.parse(localStorage.getItem("Comments-all"));

      currentComments = currentComments.map((comment) =>
        comment.PostId === postId
          ? { ...comment, commentList: [...comment.commentList, newComment] }
          : comment
      );
      console.log(currentComments);

      let match = currentComments.find((comment) => comment.PostId === postId);
      let newCurrentComments = [];
      newCurrentComments.push(match);

      setComments(newCurrentComments);

      let fetchedPosts = localStorage.getItem("Posts");
      newPosts = JSON.parse(fetchedPosts);
      if (fetchedPosts) {
        newPosts = newPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, key] }
            : post
        );
      }

      localStorage.setItem("Comments-all", JSON.stringify(currentComments));
    }

    setPosts(newPosts);
  };

  const createCommentList = (postId) => {
    const newCommentList = {
      PostId: 1,
      commentList: [],
    };
    setComments(newCommentList);
    let Comments = JSON.parse(localStorage.getItem("Comments-all"));

    const newComments = [...Comments, newCommentList];

    localStorage.setItem("Comments-all", JSON.stringify(newComments));
  };

  return {
    getComments,
    comments,
    setComments,
    createComment,
    createCommentList,
  };
};
