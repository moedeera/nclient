import React, { useMemo } from "react";
import "./NavTop.css";
import OutsideClickHandler from "react-outside-click-handler";
import icon from "./icon.png";
import Messages from "./Messages";
import Notices from "./Notices";
import Settings from "./Settings";
import SearchBar1 from "../../Pages/Profiles/Searchbar";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../../Context/Context";

export const Nav = () => {
  const {
    user,
    setCurrentPost,
    UpdateViews,
    setPostIndex,
    posts,
    page,
    setUser,
    setProfiles,
    setViewedProfile,
    profiles,
  } = useContext(UserContext);
  const [notices, showNotices] = useState(false);
  const [messages, showMessages] = useState(false);
  const [settings, showSettings] = useState(false);
  const [noticeFilter, toggleNoticeFilter] = useState(true);
  let noticeCount = useMemo(
    function getNoticeCount() {
      const fetchedNotices =
        user?.Notices?.filter((notice) => notice.type === "post") ?? [];
      let count = fetchedNotices.length;
      return count;
    },
    [user]
  );

  const clear = () => {
    showMessages(false);
    showNotices(false);
    showSettings(false);
  };

  if (!user) {
    return null;
  }
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        clear();
      }}
    >
      <div className="nav-top-container">
        <div className="social-nav-top ">
          <div className="logo">
            <h3>
              {/* <i className="fab fa-pied-piper-alt fa-2x"></i> */}
              <img src={icon} alt="" style={{ width: "50px" }} />
            </h3>

            <h2
              style={{
                color: " var(--color-secondary-social)",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              BlueBear
            </h2>
          </div>

          <div className="nav-top-sb1">
            <SearchBar1
              setProfiles={setProfiles}
              setViewedProfile={setViewedProfile}
              profiles={profiles}
              page={page}
            />
            {/* <i
            className="fa fa-search fa-2x"
            style={{
              color: " var(--color-secondary-social)",
              fontSize: "25px",
            }}
          ></i> */}
          </div>
          {/* <div className="new-searchBar">Hello</div> */}

          <ul className="menu-items">
            <Link
              to="/socialmedia"
              onClick={() => {
                clear();
              }}
            >
              <li>
                <i className="fas fa-home fa-2x"></i>
                <h5>Home</h5>
              </li>
            </Link>

            <Link
              to="trending"
              onClick={() => {
                clear();
              }}
            >
              <li>
                <i className="fab fa-hotjar trending"></i>

                <h5>Trending</h5>
              </li>
            </Link>

            <Link
              to="friends"
              onClick={() => {
                clear();
              }}
            >
              <li className="nav-lg">
                <i className="fas fa-user-friends fa-2x"></i>
                <h5>Friends</h5>
              </li>
            </Link>

            <li
              className="notifications-icon"
              onClick={() => {
                showNotices(!notices);
                showMessages(false);
                showSettings(false);
              }}
            >
              <i className="fas fa-bell fa-2x"></i>
              <h5>Notifications</h5>
              <div className="notification-count">{noticeCount}</div>
            </li>

            <li
              onClick={() => {
                showMessages(!messages);
                showNotices(false);
                showSettings(false);
              }}
            >
              {" "}
              <i className="fas fa-comment-alt fa-2x"></i>
              <h5>Inbox</h5>
            </li>

            <li
              onClick={() => {
                showSettings(!settings);
                showMessages(false);
                showNotices(false);
              }}
            >
              <img src={user.profilePic} alt="" className="top-nav-img" />
            </li>
          </ul>

          {notices || messages || settings ? (
            <div className="dropDown">
              {notices && (
                <div className="dropDown-Notifications">
                  <h2>Notifications</h2>
                  <div className="notification-select">
                    {notices && (
                      <>
                        <div
                          onClick={() => {
                            toggleNoticeFilter(true);
                          }}
                          className={!noticeFilter ? "notice-select" : ""}
                        >
                          all
                        </div>
                        <div
                          onClick={() => {
                            toggleNoticeFilter(false);
                          }}
                          className={noticeFilter ? "notice-select" : ""}
                        >
                          unread
                        </div>
                      </>
                    )}
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
                              setUser={setUser}
                              user={user}
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
                            setUser={setUser}
                            user={user}
                          />
                        ) : (
                          ""
                        )
                      )}
                </div>
              )}
              {messages && (
                <div className="dropDown-Notifications">
                  <h2>Messages</h2>
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
                  {user.Notices.map(
                    (notice) =>
                      notice.type === "message" && (
                        <Messages
                          message={notice}
                          user={user}
                          key={notice.id}
                        />
                      )
                  )}
                </div>
              )}

              {settings && (
                <div className="dropDown-Notifications">
                  <h2>Profile</h2>
                  <div style={{ padding: "0 20px 0 5px" }}>
                    {" "}
                    <h3
                      style={{
                        color: "grey",
                        borderBottom: "2px solid grey",
                      }}
                    >
                      {user.name}
                    </h3>
                  </div>

                  <Settings />
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>{" "}
    </OutsideClickHandler>
  );
};
