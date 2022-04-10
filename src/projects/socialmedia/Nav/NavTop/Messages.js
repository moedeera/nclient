import React from "react";

const Messages = ({ message }) => {
  return (
    <>
      <div className="notification">
        <img src={message.picture} alt="pic" />
        <div className="notification-details">
          {message.kind === "sent" ? (
            <h4>{message.from} sent you a message</h4>
          ) : (
            <div style={{ display: "inline-block" }}>
              <h4>{message.from} replied to you </h4>
            </div>
          )}

          <h5>{message.Date}</h5>
        </div>

        <i
          className="fas fa-circle"
          style={message.pending ? { color: "green" } : { color: "navy" }}
        ></i>
      </div>
    </>
  );
};

export default Messages;
