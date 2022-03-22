import React from "react";

import "./PostsFeed.css";
export const PostsFeed = ({ Posts, LikeCounter }) => {
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
              <img src={Post.postPic} alt="" />
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
                <small>{Post.shares}</small>
              </div>
            </div>
            <div className="postFeed-post-text">{Post.text}</div>
            <div className="post-feed-action">
              <div
                style={{ color: "var(--color-primary-social)" }}
                onClick={() => {
                  LikeCounter(Post.id);
                }}
              >
                <i className="fas fa-thumbs-up "></i>
              </div>
              <div style={{ color: "var(--color-primary-social)" }}>
                <i className="fas fa-comment-alt "></i>
              </div>

              <div style={{ color: "var(--color-primary-social)" }}>
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
