import React from "react";
import { useContext } from "react";
import "./Navleft.css";

import { UserContext } from "../../../../Context/Context";
import { ProfileManagement } from "../../common/hooks/ProfileManagement";

export const NavLeft = ({ status }) => {
  const { user } = useContext(UserContext);
  const { suggestedProfiles } = ProfileManagement();

  return (
    <div className="nav-left">
      <div className="nav-left-profile">
        <div className="nav-left-profile-image">
          <div className="nav-left-img">
            {" "}
            <img src={user.profilePic} alt="" />
            <h2>{user.name}</h2>
            <p>{user.location}</p>
          </div>

          <div className="nav-left-profile-image-color1"></div>
          <div className="nav-left-profile-image-color2"></div>
        </div>
        <div className="nav-left-follow">
          {" "}
          <h4>Following</h4>
          <p>{user.following.length}</p>
        </div>
        <div className="nav-left-follow">
          <h4>Followers</h4>
          <p>{user.followers.length}</p>
        </div>
        <div className="nav-left-view">
          <h4>View Profile</h4>
        </div>
      </div>

      <div className="nav-left-suggestions">
        <div className="nav-left-header">
          <h4>Friend Suggestions</h4>
        </div>

        {suggestedProfiles.map((profile) => (
          <div className="nav-left-suggested-profile" key={profile.id}>
            <div>
              <img src={profile.profilePic} alt="" />
            </div>
            <div className="nav-left-info">
              {" "}
              <h4 style={{ fontSize: "14px", color: "navy" }}>
                {profile.nickname}
              </h4>
              <h5 style={{ fontSize: "12px" }}>{profile.location}</h5>
            </div>
            <div className="nav-left-add">
              <i className="fas fa-plus"></i>
            </div>
          </div>
        ))}

        <div className="nav-left-profile-image-colord"></div>

        <div className="md-suggestion-icons">
          <i className="fas fa-cog fa-2x"></i>
          <i className="fas fa-user-edit fa-2x"></i>
          <i className="fas fa-comment fa-2x"></i>
        </div>
      </div>
    </div>
  );
};
