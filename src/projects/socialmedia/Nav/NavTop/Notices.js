import React from "react";
import { Link } from "react-router-dom";
import "./NavTop.css";

const Notices = ({
  notice,
  posts,
  setCurrentPost,
  UpdateViews,
  setPostIndex,
  page,
  statusPend,
}) => {
  return (
    <>
      <Link
        style={{ color: "black" }}
        key={notice.id}
        onClick={() => {
          setCurrentPost(posts.find((Post) => Post.id === notice.post));
          UpdateViews(notice.post);
          setPostIndex(notice.post);
          console.log(posts.find((Post) => Post.id === notice.post));
        }}
        to={page === "main" ? "posts" : "./posts"}
      >
        <div className="notification">
          <img src={notice.picture} alt="pic" />
          <div className="notification-details">
            {notice.kind === "posted" ? (
              <h4>{notice.from} made a post</h4>
            ) : (
              <div style={{ display: "inline-block" }}>
                <h4>
                  {notice.from} shared a post by{" "}
                  <span style={{ color: "chocolate" }}>{notice.share}</span>{" "}
                </h4>
              </div>
            )}

            <h5>{notice.Date}</h5>
          </div>

          <i
            className="fas fa-circle"
            style={notice.pending ? { color: "green" } : { color: "navy" }}
          ></i>
        </div>
      </Link>
    </>
  );
};

export default Notices;
