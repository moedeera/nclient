import React from "react";
import "./Suggestions.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import { Link } from "react-router-dom";

export const Suggestions = ({ profile, onView }) => {
  const [request, setRequest] = useState(false);
  const { viewedProfile, setViewedProfile } = useContext(UserContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRequest(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [request]);

  return (
    <div className="nav-left-suggested-profile" key={profile.id}>
      <Link
        onClick={() => {
          setViewedProfile(profile);
        }}
        to={"./profile"}
      >
        <div
          onClick={() => {
            setViewedProfile(profile);
            console.log(profile);
          }}
        >
          <img src={profile.profilePic} alt="" />
        </div>
      </Link>

      <Link
        onClick={() => {
          setViewedProfile(profile);
        }}
        to={"./profile"}
      >
        <div className="nav-left-info">
          {" "}
          <h4 style={{ fontSize: "14px", color: "navy" }}>{profile.name}</h4>
          <h5 style={{ fontSize: "12px" }}>{profile.location}</h5>
        </div>
      </Link>

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
