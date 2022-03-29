import React from "react";
import "./Suggestions.css";
import { useState, useEffect } from "react";

export const Suggestions = ({ profile }) => {
  const [request, setRequest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRequest(false);
    }, 4000);
  }, [request]);

  return (
    <div className="nav-left-suggested-profile" key={profile.id}>
      <div>
        <img src={profile.profilePic} alt="" />
      </div>
      <div className="nav-left-info">
        {" "}
        <h4 style={{ fontSize: "14px", color: "navy" }}>{profile.name}</h4>
        <h5 style={{ fontSize: "12px" }}>{profile.location}</h5>
      </div>
      <div className="nav-left-add">
        <i
          className="fas fa-plus"
          onClick={() => {
            setRequest(!request);
          }}
        ></i>
      </div>

      {request ? <div></div> : ""}
      {request ? (
        <div>
          <p style={{ color: "green", fontWeight: "500" }}>Request made</p>
        </div>
      ) : (
        ""
      )}
      {request ? (
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
      ) : (
        ""
      )}
    </div>
  );
};
