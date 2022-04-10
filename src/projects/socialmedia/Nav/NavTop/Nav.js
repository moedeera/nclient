import React from "react";
import "./NavTop.css";
import { Searchbar } from "./Searchbar.js";
import Notices from "./Notices";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../../Context/Context";

export const Nav = () => {
  const { user, setCurrentPost, UpdateViews, setPostIndex, posts, page } =
    useContext(UserContext);
  const [notices, showNotices] = useState(false);
  const [messages, showMessages] = useState(false);
  const [noticeFilter, toggleNoticeFilter] = useState(true);

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
                  <div
                    onClick={() => {
                      toggleNoticeFilter(true);
                    }}
                  >
                    all
                  </div>
                  <div
                    onClick={() => {
                      toggleNoticeFilter(false);
                    }}
                    className="notice-select"
                  >
                    unread
                  </div>
                </div>
                {noticeFilter
                  ? user.Notices.map(
                      (notice) =>
                        notice.type === "post" && (
                          <Notices
                            key={notice.id}
                            notice={notice}
                            setCurrentPost={setCurrentPost}
                            UpdateViews={UpdateViews}
                            setPostIndex={setPostIndex}
                            page={page}
                            posts={posts}
                            statusPend={noticeFilter}
                          />
                        )
                    )
                  : user.Notices.map((notice) =>
                      notice.type === "post" && notice.pending === true ? (
                        <Notices
                          key={notice.id}
                          notice={notice}
                          setCurrentPost={setCurrentPost}
                          UpdateViews={UpdateViews}
                          setPostIndex={setPostIndex}
                          page={page}
                          posts={posts}
                          statusPend={noticeFilter}
                        />
                      ) : (
                        ""
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
