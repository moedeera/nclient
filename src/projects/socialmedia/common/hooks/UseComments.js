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
      setComments(
        mock_comments.filter((comment) => comment.PostId === Post.id)
      );
    }
  };

  const CreateComment = (comment) => {
    console.log("comment was created");
  };

  return {
    GetComments,
    comments,
    setComments,
    CreateComment,
  };
};
