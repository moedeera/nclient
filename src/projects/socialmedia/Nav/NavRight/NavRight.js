import React from "react";
import "./NavRight.css";
import pic from "./blank-avatar.png";
import pic0 from "./pic0.svg";
import { useState, useEffect } from "react";

export const NavRight = ({ status }) => {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const [viewStats, setViewStats] = useState(true);

  useEffect(() => {
    const obj = document.getElementById("value");
    const obj2 = document.getElementById("value2");
    const obj3 = document.getElementById("value3");
    if (obj) {
      animateValue(obj, 0, 10, 500);
      animateValue(obj2, 0, 100, 500);
      animateValue(obj3, 0, 56, 500);
    }
  }, [viewStats]);

  if (status) {
    return (
      <div className="nav-right">
        {viewStats ? (
          <div className="nav-right-stats">
            <div className="nav-right-stats-header">
              <h3>Your Page</h3>
              <div className="border"></div>
            </div>
            <div className="nav-right-stats-weekly">
              <img src={pic} alt="" className="nav-right-img" />
              <div className="nav-right-stats-weekly-info">
                {" "}
                <h4>Weekly overview </h4>
                <h5>107 Visits</h5>
                <h5>56 New Followers</h5>
              </div>
            </div>
            <div className="nav-right-like-count">
              <i className="far fa-heart fa-2x"> </i>107 Likes
            </div>
            <div>
              <button
                onClick={() => {
                  setViewStats(!viewStats);
                }}
                className="btn btn-social-primary"
              >
                View Stats
              </button>
            </div>
          </div>
        ) : (
          <div className="nav-right-stats show">
            <div className="nav-right-stats-header">
              <h3>Stats</h3>
              <div className="border alternate"></div>
            </div>
            <div className="nav-right-stats-weekly">
              <img src={pic} alt="" className="nav-right-img" />
              <div className="nav-right-stats-weekly-info">
                {" "}
                <h4 style={{ color: "white" }}>Weekly overview </h4>
                <h5>You made</h5>
                <h5> gains</h5>
              </div>
            </div>
            <div className="nav-right-like-count secondary-like-count">
              <i className="fas fa-user-friends fa-2x"></i>
              <div className="stat-count">
                <div id="value"> 10</div>+ Followers
              </div>
            </div>

            <div className="nav-right-like-count secondary-like-count">
              <i className="fas fa-eye fa-2x"></i>
              <div className="stat-count">
                <div id="value2"> 107</div>+ Views
              </div>
            </div>

            <div className="nav-right-like-count secondary-like-count">
              <i className="far fa-heart fa-2x"> </i>
              <div className="stat-count">
                <div id="value3"> 100</div>+ Likes
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setViewStats(!viewStats);
                }}
                className="btn btn-social-primary"
              >
                Hide Stats
              </button>
            </div>
          </div>
        )}

        <div className="nav-right-ads">
          <h5>Ad</h5>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    );
  } else {
    return <div className="nav-right"></div>;
  }
};
