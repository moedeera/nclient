import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavTop.css";

const Notices = ({
  notice,
  posts,
  setCurrentPost,
  UpdateViews,
  setPostIndex,
  page,
  setUser,
  user,
}) => {
  const [actions, showActions] = useState(false);
  const [request, setRequest] = useState(false);
  const [buttons, showButtons] = useState(true);

  const updateNotice = () => {
    let updated_user;
    updated_user = {
      ...user,

      Notices: user.Notices.map((note) =>
        note.id === notice.id ? { ...note, pending: false } : note
      ),
    };
    setUser(updated_user);
  };

  const actionHandler = (action) => {
    let updatedUser;
    const timeoutActions = setTimeout(() => {
      showActions(false);

      setUser(updatedUser);
    }, 4000);
    if (action === "accept") {
      setRequest(true);
      showButtons(false);
      updatedUser = {
        ...user,
        followers: [...user.followers, notice.user],
        Notices: user.Notices.filter((note) => note.id !== notice.id),
      };

      return () => clearTimeout(timeoutActions);
    } else {
      showButtons(false);
      updatedUser = {
        ...user,
        Notices: user.Notices.filter((note) => note.id !== notice.id),
      };
      return () => clearTimeout(timeoutActions);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRequest(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [request]);

  return (
    <>
      <div className="notification">
        <img src={notice.picture} alt="pic" />
        <div className="notification-details">
          {notice.kind === "posted" ? (
            <Link
              style={{ color: "black" }}
              key={notice.id}
              onClick={() => {
                setCurrentPost(posts.find((Post) => Post.id === notice.post));
                UpdateViews(notice.post);
                setPostIndex(notice.post);
                updateNotice();
              }}
              to={page === "main" ? "posts" : "./posts"}
            >
              <h4>{notice.from} made a post</h4>
            </Link>
          ) : notice.kind === "share" ? (
            <Link
              style={{ color: "black" }}
              key={notice.id}
              onClick={() => {
                setCurrentPost(posts.find((Post) => Post.id === notice.post));
                UpdateViews(notice.post);
                setPostIndex(notice.post);
                updateNotice();
              }}
              to={page === "main" ? "posts" : "./posts"}
            >
              <div style={{ display: "inline-block" }}>
                <h4>
                  {notice.from} shared a post by{" "}
                  <span style={{ color: "chocolate" }}>{notice.share}</span>{" "}
                </h4>
              </div>
            </Link>
          ) : notice.kind === "follow" ? (
            <div
              style={{ display: "inline-block" }}
              onClick={() => {
                showActions(true);
              }}
            >
              <h4>{notice.from} requested to follow you </h4>
              {actions && (
                <>
                  {buttons && (
                    <div className="notifications-action">
                      <button
                        className="btn btn-secondary"
                        onClick={() => actionHandler("accept")}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => actionHandler("reject")}
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {request && (
                    <div className="notifications-response">
                      <div>
                        <p style={{ color: "green", fontWeight: "500" }}>
                          Request approved
                        </p>
                      </div>

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
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            ""
          )}

          <h5>{notice.Date}</h5>
        </div>

        <i
          className="fas fa-circle"
          style={notice.pending ? { color: "green" } : { color: "navy" }}
        ></i>
      </div>
    </>
  );
};

export default Notices;
