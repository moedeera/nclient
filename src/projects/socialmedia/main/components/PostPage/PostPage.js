import React from "react";
import "./PostPage.css";
import { useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import { Comments } from "./Comments";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const PostPage = ({ post, previous }) => {
  const navigate = useNavigate();
  const { currentPost, comments } = useContext(UserContext);
  console.log(comments, currentPost.id);

  document.addEventListener("click", (e) => {
    if (
      e.target.className === "PostPage" ||
      e.target.className === "social-nav-top"
    ) {
      console.log("outside");
      navigate("../");
    }
  });

  return (
    <div className="PostPage">
      <div className="PostCard">
        <div className="PostCard-arrow">
          <i className="fas fa-chevron-circle-left"></i>
        </div>
        <div className="PostCard-Post">
          <div className="PostCard-Post-image">
            <img src={currentPost.postPic} alt="" />
          </div>
          <div className="PostCard-Post-details">
            <div className="PostCard-Post-details-poster">
              <div className="postFeed-post-info">
                <img src={currentPost.PosterPic} alt="" />
                <div className="postFeed-post-info-stamp">
                  <h3>{currentPost.PosterName}</h3>
                  <h5>Published {currentPost.date}</h5>
                </div>
              </div>
            </div>
            <div className="PostCard-Post-details-post-text">
              {currentPost.text}
            </div>
            <h5>Comments</h5>
            <div className="PostCard-Post-details-post-comments">
              {comments.map((comment) => (
                <Comments comment={comment} key={comment.id} />
              ))}
            </div>

            <div className="PostCard-Post-details-post-actions">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <i className="fa fa-share " aria-hidden="true"></i>
            </div>
            <div className="PostCard-Post-details-post-make-comment">
              <div></div>
              <div>Make Comment</div>
            </div>
          </div>
        </div>
        <div className="PostCard-arrow">
          <i className="fas fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>
  );
};
