import React, { useEffect } from "react";
import "./Profiles.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/Context";
// import { SearchProfile } from "./SearchProfile";
// import SearchBar from "./Searchbar";
import pic1 from "./blank-avatar.png";

export const Profiles = () => {
  const {
    profiles,
    filter,
    filteredProfiles,
    setProfiles,
    user,
    setPage,
    setViewedProfile,
  } = useContext(UserContext);

  // setPage("profile");
  if (!profiles) {
    return null;
  }

  return (
    <div className="content friendsSearch">
      <div className="fr-search-main">
        <h2>Requests</h2>
        <div className="fr-search-grid">
          <div className="fr-request">
            <h3>Follow requests</h3>
            <div className="fr-request-list">
              <div className="fr-request-profile">
                <img src={pic1} alt="" />
                <h5>James Vitto</h5>
                <div className="fr-action">
                  <button className="btn btn-secondary">Accept</button>
                  <button className="btn btn-secondary">Decline</button>
                </div>
              </div>
            </div>
          </div>

          <div className="fr-request">
            <h3>Friend requests</h3>
            <div className="fr-request-list">
              <div className="fr-request-profile">
                <img src={pic1} alt="" />
                <h5>James Vitto</h5>
                <div className="fr-action">
                  <button className="btn btn-secondary">Accept</button>
                  <button className="btn btn-secondary">Decline</button>
                </div>
              </div>
            </div>
          </div>

          <div className="fr-request">
            <h3>Your friend requests</h3>
            <div className="fr-request-list">
              <div className="fr-request-profile">
                <img src={pic1} alt="" />
                <h5>James Vitto</h5>
                <div className="fr-action">
                  <h3>Pending</h3>
                  <button className="btn btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <div className="fr-request">
            <h3>Your follow requests</h3>
            <div className="fr-request-list">
              <div className="fr-request-profile">
                <img src={pic1} alt="" />
                <h5>James Vitto</h5>
                <div className="fr-action">
                  <h3>Pending</h3>
                  <button className="btn btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
