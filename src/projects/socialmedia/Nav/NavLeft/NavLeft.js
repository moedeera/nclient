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
            <h4>Following</h4>
            <p>10</p>
          </div>
          <div className="nav-left-follow">
            <h4>Followers</h4>
            <p>15</p>
          </div>
          <div className="nav-left-view">
            <h4>View Profile</h4>
          </div>
        </div>
        <div className="nav-left-suggestions">
          <div className="nav-left-header">
            <h4>Suggestions</h4>
            <i class="fas fa-ellipsis-v"></i>
          </div>
          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>Jessica Swanson</h4>
              <h5>Saskatoon,Sk</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>

          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>David Smith</h4>
              <h5>Weston,Sk</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>

          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>Martin Lee</h4>
              <h5>Madison,WI</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>

          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>Amanda Busch</h4>
              <h5>Edmonton,AB</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>

          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>Larry Van Holt</h4>
              <h5>Seattle,WSH</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>

          <div className="nav-left-suggested-profile">
            <div>
              <img src={pic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4>Kent Holt</h4>
              <h5>Seattle,WSH</h5>
            </div>
            <div className="nav-left-add">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div className="nav-left-profile-image-colord"></div>
          <div className="nav-left-dummy"></div>
          <div className="md-suggestion-icons">
            <i class="fas fa-cog fa-2x"></i>
            <i class="fas fa-user-edit fa-2x"></i>
            <i class="fas fa-comment fa-2x"></i>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="nav-left"> Logged out</div>;
  }
};
