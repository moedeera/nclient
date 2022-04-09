import React from "react";
import "./NavTop.css";
import { Searchbar } from "./Searchbar.js";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../../Context/Context";

export const Nav = () => {
  const { user, setCurrentPost, UpdateViews, setPostIndex, posts, page } =
    useContext(UserContext);
  const [notices, showNotices] = useState(false);
  const [messages, showMessages] = useState(false);

  return (
    <>
      <div className="social-nav-top ">
        <div className="logo">
          <h3>
            <i className="fab fa-pied-piper-alt fa-2x"></i>
          </h3>
          <i className="fab fa-pied-piper-alt fa-2x sm-icon"></i>

          <Searchbar />
        </div>

        {/* <div className="new-searchBar">Hello</div> */}

        <ul className="menu-items">
          <Link to="/socialmedia">
            <li>
              <i className="fas fa-home fa-2x"></i>
              <h5>Home</h5>
            </li>
          </Link>

          <Link to="trending">
            <li>
              <i className="fab fa-hotjar trending"></i>
              <h5>Trending</h5>
            </li>
          </Link>

          <Link to="friends">
            <li className="nav-lg">
              <i className="fas fa-user-friends fa-2x"></i>
              <h5>Friends</h5>
            </li>
          </Link>

          <li
            onClick={() => {
              showNotices(!notices);
            }}
          >
            <i className="fas fa-bell fa-2x"></i>
            <h5>Notifications</h5>
          </li>

          <li>
            {" "}
            <i className="fas fa-comment-alt fa-2x"></i>
            <h5>Inbox</h5>
          </li>

          <li>
            <img src={user.profilePic} alt="" className="top-nav-img" />
          </li>
        </ul>
        {notices || messages ? (
          <div className="dropDown">
            {notices && (
              <div className="dropDown-Notifications">
                <h2>Notifications</h2>
                <div className="notification-select">
                  <div>all</div>
                  <div className="notice-select">unread</div>
                </div>

                {user.Notices.map(
                  (notice) =>
                    notice.type === "post" && (
                      <Link
                        style={{ color: "black" }}
                        key={notice.id}
                        onClick={() => {
                          setCurrentPost(
                            posts.find((Post) => Post.id === notice.post)
                          );
                          UpdateViews(notice.post);
                          setPostIndex(notice.post);
                          console.log(
                            posts.filter((Post) => Post.id === notice.post)
                          );
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
                                  {notice.from} Shared a post by{" "}
                                  <span style={{ color: "chocolate" }}>
                                    {notice.share}
                                  </span>{" "}
                                </h4>
                              </div>
                            )}

                            <h5>{notice.Date}</h5>
                          </div>

                          <i
                            className="fas fa-circle"
                            style={{
                              color: "navy",
                            }}
                          ></i>
                        </div>
                      </Link>
                    )
                )}
              </div>
            )}

            <div className="Inbox"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
