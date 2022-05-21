import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import { Comments } from "./Comments";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const PostPage = () => {
  const [formComment, setFormComment] = useState([]);

  const onCommentChange = (e) => {
    setFormComment(e.target.value);
  };

  let Posts;
  const navigate = useNavigate();
  const {
    currentPost,
    comments,
    setCurrentPost,
    friendsPosts,
    TrendingPosts,
    page,
    user,
    createComment,
  } = useContext(UserContext);

  // console.log(comments[0].commentList);
  if (page === "main") {
    Posts = friendsPosts;
  } else if (page === "trending") {
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

    // console.log(currentPost, Posts, Posts[match], match);

    if (action === "increment") {
      index = Posts.length - 1;

      if (match < index) {
        setCurrentPost(Posts[match + 1]);
      } else if (match === index) {
        setCurrentPost(Posts[0]);
      }
    }

    if (action === "decrement") {
      index = Posts.length - 1;

      if (match > 0) {
        setCurrentPost(Posts[match - 1]);
      } else if (match === 0) {
        setCurrentPost(Posts[index]);
      }
    }
  };

  useEffect(() => {
    const OutsideClick = (e) => {
      if (
        e.target.className === "PostPage" ||
        e.target.className === "social-nav-top"
      ) {
        if (page === "trending") {
          navigate("../trending");
        } else if (page === "profile") {
          navigate("../profile");
        } else {
          navigate("../");
        }
      }
    };

    document.addEventListener("click", OutsideClick);
    return () => {
      document.removeEventListener("click", OutsideClick);
    };
  }, []);

  if (!currentPost) {
    return null;
  }

  return (
    <div className="PostPage">
      <motion.div
        className="PostCard"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className="PostCard-Post">
          <div className="PostCard-Post-image">
            {currentPost.postPic && <img src={currentPost.postPic} alt="" />}
            {currentPost.postVideo && (
              <video controls src={currentPost.postVideo} alt="" />
            )}

            <div className="PostCard-arrow sm-l">
              <i
                className="fas fa-chevron-circle-left"
                onClick={() => {
                  PostCrement("decrement");
                }}
              ></i>
            </div>

            <div className="PostCard-arrow sm-r">
              <i
                className="fas fa-chevron-circle-right"
                onClick={() => {
                  PostCrement("increment");
                }}
              ></i>
            </div>

            <div className="PostCard-Post-details-post-actions">
              <div className="PostCard-arrow">
                <i
                  className="fas fa-chevron-circle-left"
                  onClick={() => {
                    PostCrement("decrement");
                  }}
                ></i>
              </div>

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
                <img src={currentPost.PosterPic} alt="" />
                <div className="postFeed-post-info-stamp">
                  <h3>{currentPost.PosterName}</h3>
                  <h5>Published {currentPost.date}</h5>
                </div>
                <div
                  className="PostCard-closeBtn"
                  onClick={() => {
                    if (page === "trending") {
                      navigate("../trending");
                    } else if (page === "profile") {
                      navigate("../profile");
                    } else {
                      navigate("../");
                    }
                  }}
                >
                  <i className="fa fa-close fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="PostCard-Post-details-post-text">
              {currentPost.text}
            </div>
            <div className="PostCard-Post-details-post-commentsHeader">
              {" "}
              <h4>Comments</h4>
            </div>
            <div className="PostCard-Post-details-post-comments">
              {comments[0]?.commentList?.length > 0 &&
                comments[0]?.commentList?.map((comment) => (
                  <Comments comment={comment} key={comment.id} />
                ))}
              {comments[0]?.commentList.length === 0 && (
                <div className="no-comments">
                  {" "}
                  <h3>No comments to show</h3>
                </div>
              )}
            </div>

            <div className="PostCard-Post-details-post-make-comment">
              <div id="comment">
                <div>Comment</div>
              </div>
              <div className="PostCard-Post-details-make-comment-input">
                <input
                  type="text"
                  value={formComment}
                  onChange={(e) => {
                    onCommentChange(e);
                  }}
                  placeholder="Say something about this post"
                />
              </div>
              <div></div>{" "}
              <div className="PostCard-buttons">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    createComment(formComment, currentPost.id, user);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
