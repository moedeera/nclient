import React from "react";
import "./PostPage.css";

export const Comments = ({ comment }) => {
  return (
    <div className="PostCard-Post-comment">
      <div className="PostCard-Post-comment-image">
        <img src={comment.picture} alt="" />
      </div>

      <div className="PostCard-Post-comment-info">
        <h3>{comment.name}</h3>
        <p>{comment.text}</p>
        <div className="PostCard-Post-comment-interactions">
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          Reply
        </div>
      </div>
    </div>
  );
};
