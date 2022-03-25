import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import { Comments } from "./Comments";
import { useNavigate, useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const PostPage = () => {
  const location = useLocation();

  let Posts;
  const navigate = useNavigate();
  var {
    currentPost,
    comments,
    setCurrentPost,
    friendsPosts,
    TrendingPosts,
    page,
    postIndex,
    setPostIndex,
  } = useContext(UserContext);

  const [RenderedPost, setRenderedPost] = useState(currentPost);

  if (page === "main") {
    console.log("condition previous main");
    Posts = friendsPosts;
  } else if (page === "trending") {
    console.log("condition previous trending");
    Posts = TrendingPosts;
  }

  const PostCrement = (action) => {
    var match = 0;
    var index;
    for (var j = 0; j < Posts.length; j++) {
      if (Posts[j].id === currentPost.id) {
        match = j;
      }
    }
    console.log(match);
    // console.log(currentPost, Posts, Posts[match], match);

    if (action === "increment") {
      index = Posts.length - 1;
      console.log("increment", match, index, Posts.length);

      if (match < index) {
        setCurrentPost(Posts[match + 1]);
        setRenderedPost(Posts[match + 1]);
      } else if (match === index) {
        setCurrentPost(Posts[0]);
        setRenderedPost(Posts[0]);
      }
      console.log(Posts, match);
    }

    if (action === "decrement") {
      index = Posts.length - 1;
      console.log("decrement", match, Posts.length);

      if (match > 0) {
        setCurrentPost(Posts[match - 1]);
        setRenderedPost(Posts[match - 1]);
      } else if (match === 0) {
        setCurrentPost(Posts[index]);
        setRenderedPost(Posts[index]);
      }
      console.log(Posts, match);
    }

    console.log(RenderedPost);
  };

  useEffect(() => {
    const OutsideClick = () => {
      document.addEventListener("click", (e) => {
        if (
          e.target.className === "PostPage" ||
          e.target.className === "social-nav-top"
        ) {
          console.log("outside");

          if (page === "main") {
            navigate("../");
          } else {
            navigate("../trending");
          }
        }
      });
    };

    OutsideClick();
    return () => {
      document.removeEventListener("click", OutsideClick);
    };
  }, []);

  return (
    <div className="PostPage">
      <div className="PostCard">
        <div className="PostCard-Post">
          <div className="PostCard-Post-image">
            <img src={RenderedPost.postPic} alt="" />

            <div className="PostCard-Post-details-post-actions">
              <div className="PostCard-arrow">
                <i
                  className="fas fa-chevron-circle-left"
                  onClick={() => {
                    PostCrement("decrement");
                  }}
                ></i>
              </div>
              <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
              <i className="fa fa-share fa-2x" aria-hidden="true"></i>
              <div className="PostCard-arrow">
                <i
                  className="fas fa-chevron-circle-right"
                  onClick={() => {
                    PostCrement("increment");
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div className="PostCard-Post-details">
            <div className="PostCard-Post-details-poster">
              <div className="postFeed-post-info">
                <img src={RenderedPost.PosterPic} alt="" />
                <div className="postFeed-post-info-stamp">
                  <h3>{RenderedPost.PosterName}</h3>
                  <h5>Published {RenderedPost.date}</h5>
                </div>
              </div>
            </div>
            <div className="PostCard-Post-details-post-text">
              {RenderedPost.text}
            </div>
            <h4>Comments</h4>
            <div className="PostCard-Post-details-post-comments">
              {comments.map((comment) => (
                <Comments comment={comment} key={comment.id} />
              ))}
            </div>

            <div className="PostCard-Post-details-post-make-comment">
              <div>Make Comment</div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
