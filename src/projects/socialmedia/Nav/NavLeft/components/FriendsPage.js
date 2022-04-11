import React from "react";
import "./FriendsPage.css";
import ad1 from "./ad1.jpg";
import ad2 from "./ad2.jpg";

const FriendsPage = () => {
  return (
    <>
      <div className="fp-navigator">
        <h2>
          Settings
          <i className="fa fa-cog" aria-hidden="true"></i>
        </h2>
        <div className="fp-navigate">
          <div className="fp-selected">
            {" "}
            <i className="fas fa-user-circle"></i> Main
          </div>
          <div>
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

export default FriendsPage;
