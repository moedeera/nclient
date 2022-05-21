import React, { useContext } from "react";
import { UserContext } from "../../../../Context/Context";
const MainOption = ({ pic1 }) => {
  const { user } = useContext(UserContext);
  // console.log(user.Requests);
  return (
    <div className="fr-search-grid">
      <div className="fr-request">
        <h3>Follow requests</h3>
        <div className="fr-request-list">
          {user?.Requests?.map(
            (request) =>
              request.kind === "follow" && (
                <div className="fr-request-profile" key={request.id}>
                  <img src={request.picture} alt="" />
                  <h5>{request.from}</h5>
                  <div className="fr-action">
                    <button
                      className="btn btn-secondary"
                      style={{ backgroundColor: "green" }}
                    >
                      Accept
                    </button>
                    <button className="btn btn-secondary">Decline</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="fr-request">
        <h3>Friend requests</h3>
        <div className="fr-request-list">
          {user?.Requests?.map(
            (request) =>
              request.kind === "friend" && (
                <div className="fr-request-profile" key={request.id}>
                  <img src={request.picture} alt="" />
                  <h5>{request.from}</h5>
                  <div className="fr-action">
                    <button
                      className="btn btn-secondary"
                      style={{ backgroundColor: "green" }}
                    >
                      Accept
                    </button>
                    <button className="btn btn-secondary">Decline</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="fr-request">
        <h3>Your friend requests</h3>
        <div className="fr-request-list">
          {user?.Requests?.map(
            (request) =>
              request.kind === "friend" && (
                <div className="fr-request-profile" key={request.id}>
                  <img src={request.picture} alt="" />
                  <h5>{request.from}</h5>
                  <div className="fr-action">
                    <button
                      className="btn btn-secondary"
                      style={{ backgroundColor: "green" }}
                    >
                      Accept
                    </button>
                    <button className="btn btn-secondary">Decline</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="fr-request">
        <h3>Your follow requests</h3>
        <div className="fr-request-list">
          {user?.Requests?.map(
            (request) =>
              request.kind === "friend" && (
                <div className="fr-request-profile" key={request.id}>
                  <img src={request.picture} alt="" />
                  <h5>{request.from}</h5>
                  <div className="fr-action">
                    <button
                      className="btn btn-secondary"
                      style={{ backgroundColor: "green" }}
                    >
                      Accept
                    </button>
                    <button className="btn btn-secondary">Decline</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MainOption;
