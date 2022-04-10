import React, { useState } from "react";
import ChatBox from "./ChatBox";

const Messages = ({ message, user }) => {
  const [msgHistory, showMsgHistory] = useState(false);
  return (
    <>
      <div
        className="notification"
        onClick={() => {
          showMsgHistory(!msgHistory);
        }}
      >
        <img src={message.picture} alt="pic" />
        <div className="notification-details">
          {message.kind === "sent" ? (
            <>
              <h4>{message.from} sent you a message</h4>
            </>
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
      {msgHistory && <ChatBox message={message} user={user} key={message.id} />}
    </>
  );
};

export default Messages;
