import React from "react";

const SuggestionsOption = ({ pic1 }) => {
  return (
    <div className="fr-search-grid">
      <div className="fr-request">
        <h3>Follow Suggestions</h3>
        <div className="fr-request-list">
          <div className="fr-request-profile">
            <img src={pic1} alt="" />
            <h5>Tyrone Kingston</h5>
            <div className="fr-action">
              <button
                className="btn btn-secondary"
                style={{
                  width: "10rem",
                }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-request">
        <h3>Friend Suggestions</h3>
        <div className="fr-request-list">
          <div className="fr-request-profile">
            <img src={pic1} alt="" />
            <h5>Andreas Kollman</h5>
            <div className="fr-action">
              <button className="btn btn-secondary">Request</button>
              <button
                className="btn btn-secondary"
                style={{ backgroundColor: "green" }}
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsOption;
