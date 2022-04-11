import React, { useState } from "react";
import "./FriendsPage.css";
import ad1 from "./ad1.jpg";
import ad2 from "./ad2.jpg";

const FriendsNav = ({ fsSettings, setFsSettings }) => {
  const [navOption, setNavOption] = useState("main");

  const handleNavigate = (action) => {
    setFsSettings(action);
    setNavOption(action);
  };
  return (
    <>
      <div className="fp-navigator">
        <h2>
          Settings
          <i className="fa fa-cog" aria-hidden="true"></i>
        </h2>
        <div className="fp-navigate">
          <div
            style={
              navOption === "main"
                ? {
                    backgroundColor: "rgba(128, 128, 128, 0.179)",
                  }
                : { backgroundColor: "white" }
            }
            onClick={() => handleNavigate("main")}
          >
            {" "}
            <i className="fas fa-user-circle"></i> Main
          </div>
          <div
            style={
              navOption === "suggestions"
                ? {
                    backgroundColor: "rgba(128, 128, 128, 0.179)",
                  }
                : { backgroundColor: "white" }
            }
            onClick={() => handleNavigate("suggestions")}
          >
            {" "}
            <i className="fas fa-lightbulb"></i>Suggestions
          </div>
          <div>
            {" "}
            <i className="fas fa-calendar-check"></i> Events
          </div>
          <div>
            <i className="fas fa-globe-europe"></i>Public Figures
          </div>
          <div>
            <i className="fas fa-search"></i> Search
          </div>
        </div>
      </div>
      <div className="fp-advertisement">
        <img src={ad1} alt="" />
        <h5>Ad</h5>
      </div>
    </>
  );
};

export default FriendsNav;
