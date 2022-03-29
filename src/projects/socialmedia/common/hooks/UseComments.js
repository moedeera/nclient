import React from "react";
import { useState } from "react";
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

const GetCurrentComments = () => {
  let CurrentsComments;
  if (getDemoStatus()) {
    if (localStorage.getItem("Comments")) {
      CurrentsComments = JSON.parse(localStorage.getItem("Comments"));
    } else {
      CurrentsComments = [{ PostId: 0, commentList: [] }];
      localStorage.setItem("Comments", JSON.stringify(CurrentsComments));
    }
  }

  return CurrentsComments;
};

export const useComments = () => {
  const [comments, setComments] = useState(GetCurrentComments());

  const GetComments = (Post) => {
    // fetch posts for ID

    if (getDemoStatus) {
      let allComments = getAllComments();
      setComments(allComments.filter((comment) => comment.PostId === Post.id));
    }
  };

  const CreateComment = (comment, postId, user) => {
    console.log("comment was created", comment, postId, user.name);
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
      console.log(newCurrentComments, comments);
      setComments(newCurrentComments);
      localStorage.setItem("Comments-all", JSON.stringify(currentComments));
    }
  };

  return {
    GetComments,
    comments,
    setComments,
    CreateComment,
  };
};
