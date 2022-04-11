import React from "react";

const MainOption = ({ pic1 }) => {
  return (
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

          <div className="fr-request-profile">
            <img src={pic1} alt="" />
            <h5>Stacey Baker</h5>
            <div className="fr-action">
              <button className="btn btn-secondary">Accept</button>
              <button className="btn btn-secondary">Decline</button>
            </div>
          </div>

          <div className="fr-request-profile">
            <img src={pic1} alt="" />
            <h5>Stacey Baker</h5>
            <div className="fr-action">
              <button className="btn btn-secondary">Accept</button>
              <button className="btn btn-secondary">Decline</button>
            </div>
          </div>

          <div className="fr-request-profile">
            <img src={pic1} alt="" />
            <h5>Nolan Smithson</h5>
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
  );
};

export default MainOption;
