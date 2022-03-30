import React, { useEffect } from "react";
import "./PostsFeed.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../../../Context/Context";

export const PostFeedComments = ({ showComment, PostId }) => {
  const { user, createComment } = useContext(UserContext);

  const [formComment, setFormComment] = useState([]);

  const onCommentChange = (e) => {
    if (e.target.value.length > 0) {
      document.addEventListener("click", (e) => {
        if (e.target.className !== "btn-secondary") {
          setFormComment([]);
        }
      });
    }
    setFormComment(e.target.value);
  };

  // useEffect(() => {
  //   return (e) = {
  //     document.removeEventListener("click",())

  //   }

  // },[])

  return (
    <div className="post-feed-comment">
      <div className="post-feed-comment-post">
        <img src={user.profilePic} alt="" />
        <input
          type="textarea"
          value={formComment}
          onChange={(e) => {
            onCommentChange(e);
          }}
          placeholder="Say something about this post"
        />
      </div>

      <div className="post-feed-comment-buttons">
        <button
          className="btn btn-secondary"
          onClick={() => {
            createComment(formComment, PostId, user);
          }}
        >
          Submit
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            showComment();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
