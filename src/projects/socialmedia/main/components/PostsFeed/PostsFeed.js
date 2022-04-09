import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../../../Context/Context";
import { PostFeedComments } from "./PostFeedComments";

import "./PostsFeed.css";

export const PostsFeed = ({ Posts, LikeCounter, Page }) => {
  const {
    setCurrentPost,
    UpdateViews,
    setPostIndex,

    setViewedProfile,
    profiles,
  } = useContext(UserContext);
  const [commentBox, showCommentBox] = useState(false);
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(0);

  const CommentBoxToggle = () => {
    showCommentBox(!commentBox);
  };

  return (
    <div className="Feed">
      <div className="Post-Feed">
        {Posts.map((Post, index) => (
          <div className="postFeed-post" key={Post.id}>
            <div className="postFeed-post-info">
              <Link
                onClick={() => {
                  setViewedProfile(
                    profiles.find((person) => person.id === Post.Poster)
                  );
                }}
                to={"./profile"}
              >
                <img src={Post.PosterPic} alt="" />
              </Link>

              <Link
                onClick={() => {
                  setViewedProfile(
                    profiles.find((person) => person.id === Post.Poster)
                  );
                }}
                to={"./profile"}
              >
                <div className="postFeed-post-info-stamp">
                  <h3>{Post.PosterName}</h3>
                  <h5 style={{ color: "black" }}>Published {Post.date}</h5>
                </div>
              </Link>
            </div>

            <Link
              onClick={() => {
                setCurrentPost(Post);
                UpdateViews(Post.id);
                setPostIndex(index);
              }}
              to={Page === "main" ? "posts" : "../posts"}
            >
              {Post.postVideo && (
                <div className="postFeed-post-image">
                  <video controls src={postId.postVideo} />
                </div>
              )}
              {Post.postPic && (
                <div className="postFeed-post-image">
                  <img src={Post.postPic} alt="" />
                </div>
              )}
            </Link>

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
              <div
                style={{ color: "var(--color-primary-social)" }}
                onClick={() => {
                  if (postId !== Post.id) {
                    showCommentBox(true);
                    setPostId(Post.id);
                  } else {
                    showCommentBox(!commentBox);
                    setPostId(Post.id);
                  }
                }}
              >
                <i className="fas fa-comment-alt "></i>
              </div>

              {/* <div style={{ color: "var(--color-primary-social)" }}>
                <i className="fas fa-share-alt"></i>
              </div> */}
            </div>
            {commentBox && Post.id === postId ? (
              <PostFeedComments
                showComment={CommentBoxToggle}
                PostId={Post.id}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
