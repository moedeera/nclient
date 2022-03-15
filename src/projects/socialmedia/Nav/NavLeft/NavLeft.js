import React from "react";
import "./Navleft.css";
import pic from "./blank-avatar.png";

import "./Navleft.css";

export const NavLeft = ({ status }) => {
  if (status) {
    return (
      <div className="nav-left">
        <div className="nav-left-profile">
          <div className="nav-left-profile-image">
            <div className="nav-left-img">
              {" "}
              <img src={pic} alt="" />
              <h2>John Doe</h2>
              <p>Web Designer</p>
            </div>

            <div className="nav-left-profile-image-color1"></div>
            <div className="nav-left-profile-image-color2"></div>
          </div>
          <div className="nav-left-follow">
            {" "}
            <h3>Following</h3>
            <p>10</p>
          </div>
          <div className="nav-left-follow">
            <h3>Followers</h3>
            <p>15</p>
          </div>
          <div className="nav-left-view">
            <h4>View Profile</h4>
          </div>
        </div>
        <div className="nav-left-suggestions"></div>
      </div>
    );
  } else {
    return <div className="nav-left"> Logged out</div>;
  }
};
