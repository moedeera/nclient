import React, { useEffect } from "react";
import "./PostsFeed.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../../Context/Context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PostFeedComments = ({ showComment, PostId, Post, index }) => {
  const {
    user,
    createComment,
    setCurrentPost,
    UpdateViews,
    setPostIndex,
    Page,
  } = useContext(UserContext);

  const [formComment, setFormComment] = useState("");
  const [request, setRequest] = useState(false);
  const [listedComments, setListedComments] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRequest(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [request]);

  const onCommentChange = (e) => {
    if (e.target.value.length > 0) {
      document.addEventListener("click", (e) => {
        if (e.target.className !== "btn-secondary") {
          setFormComment("");
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
  // console.log(user.profilePic);
  if (user && user.profilePic) {
    return (
      <motion.div
        className="post-feed-comment"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
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
              console.log(formComment);
              if (formComment === "") {
                console.log("please enter a comment");
              } else {
                createComment(formComment, PostId, user);
                setListedComments([...listedComments, formComment]);
                setRequest(true);
              }
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
        </div>{" "}
        {request ? (
          <motion.div
            className="request-submission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="animation-check">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#73AF55"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  className="path check"
                  fill="none"
                  stroke="#73AF55"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
              </svg>
            </div>
            <h4>Comment successfully posted</h4>
          </motion.div>
        ) : (
          ""
        )}
        {listedComments.length > 0 && (
          <div className="latest-comment-list">
            <Link
              onClick={() => {
                setCurrentPost(Post);
                UpdateViews(PostId);
                setPostIndex(index);
              }}
              to={Page === "main" ? "posts" : "../posts"}
            >
              <h4>View all Comments</h4>
            </Link>
            {listedComments.map((comment) => (
              <div className="post-feed-latest-comment">
                <img src={user.profilePic} alt="" />
                <div className="latest-comment-info">
                  <h5>Your latest comment</h5>
                  <p> {comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  }
};
