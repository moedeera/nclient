import React from "react";

import "./PostsFeed.css";
export const PostsFeed = ({ Posts }) => {
  return (
    <div className="Feed">
      <div className="Post-Feed">
        {Posts.map((Post) => (
          <div className="postFeed-post" key={Post.id}>
            <div className="postFeed-post-info">
              <img src={Post.PosterPic} alt="" />
              <div className="postFeed-post-info-stamp">
                <h3>{Post.PosterName}</h3>
                <h5>Published {Post.date}</h5>
              </div>
            </div>
            <div className="postFeed-post-image">
              {" "}
             {Post} <img src={Post.postPic} alt="" />
            </div>
            <div className="postFeed-post-stats">
              <div>
                <i className="fas fa-eye " style={{ color: "teal" }}></i>
                <small>{Post.views}</small>
              </div>
              <div>
                <i className="far fa-heart" style={{ color: "crimson" }}></i>
                <small>{Post.likers.length}</small>
              </div>
              <div>
                <i
                  className="fas fa-comment"
                  style={{ color: "steelblue" }}
                ></i>
                <small>{Post.comments.length}</small>
              </div>
              <div>
                <i className="fas fa-share" style={{ color: "navy" }}></i>
                <small>8</small>
              </div>
            </div>
            <div className="postFeed-post-text">{Post.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
