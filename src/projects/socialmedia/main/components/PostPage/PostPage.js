import React from "react";
import "./PostPage.css";
import { useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const PostPage = ({ post }) => {
  const { posts, currentPost } = useContext(UserContext);
  console.log(currentPost);

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
            <div className="PostCard-Post-details-post-comments">
              <h5>Comments</h5>
              <div className="PostCard-Post-comment"></div>
            </div>
            <div className="PostCard-Post-details-post-actions"></div>
            <div className="PostCard-Post-details-post-make-comment"></div>
          </div>
        </div>
        <div className="PostCard-arrow">
          <i className="fas fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>
  );
};
