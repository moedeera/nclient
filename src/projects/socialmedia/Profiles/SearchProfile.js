import React from "react";
import "./Profiles.css";

export const SearchProfile = ({ profile, selected, setSelected, index }) => {
  return (
    <>
      <div
        key={profile.id}
        className={selected ? "CProfile  PSelected" : "CProfile"}
        onClick={() => setSelected(index)}
      >
        <img src={profile.profilePic} alt="" className="images" />
        <div className="SB-Info" style={{ color: "black" }}>
          <h3>{profile.nickname}</h3>
          <h5>{profile.location}</h5>
          <p
            className="tag"
            style={{ background: "green", color: "white", padding: "5px" }}
          >
            Message
          </p>
        </div>
      </div>
    </>
  );
};
