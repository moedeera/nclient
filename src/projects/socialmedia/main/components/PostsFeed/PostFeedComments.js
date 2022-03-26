import React from "react";
import "./PostsFeed.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../../../Context/Context";

export const PostFeedComments = ({ showComment }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="post-feed-comment">
      <div className="post-feed-comment-post">
        <img src={user.profilePic} alt="" />
        <input
          type="textarea"
          placeholder="Say something about this post"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
      <div className="post-feed-comment-buttons">
        <button className="btn btn-secondary">Submit</button>
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
