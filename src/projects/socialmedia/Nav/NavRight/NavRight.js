import React from "react";
import "./NavRight.css";
import pic from "./blank-avatar.png";

export const NavRight = ({ status }) => {
  if (status) {
    return (
      <div className="nav-right">
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
            <i class="far fa-heart fa-2x"> </i>107 Likes
          </div>
          <div>
            <button className="btn btn-social-primary">View Stats</button>
          </div>
        </div>
        <div className="nav-right-ads">
          <h3>Ad</h3>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    );
  } else {
    return <div className="nav-right"></div>;
  }
};
