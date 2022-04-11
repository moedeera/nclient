import React from "react";
import Messages from "./Messages";

const ChatBox = ({ message, user }) => {
  return (
    <div className="notice-msg-box">
      <div className="notices-messages">
        {message?.previous?.length > 0 &&
          message.previous.map((msg) => (
            <div className="messages-msg" key={msg.id}>
              <div>
                {" "}
                {msg.messenger === user.id ? (
                  <img src={user.profilePic} alt="pic" />
                ) : (
                  <img src={message.picture} alt="pic" />
                )}
                {msg.messenger === user.id ? (
                  <small>You</small>
                ) : (
                  <small>{message.from}</small>
                )}
              </div>

              <div className="message-msg-text">
                <p>{msg.text}</p>
              </div>
            </div>
          ))}

        {message?.previous?.length === 0 && (
          <div className="messages-msg" key={message.id}>
            <div>
              {" "}
              <img src={message.picture} alt="pic" />
              <small>{message.from}</small>
            </div>

            <div className="message-msg-text">
              <p>{message.text}</p>
            </div>
          </div>
        )}
      </div>

      <div className="message-reply">
        <input type="text" placeholder="Send a message" />
        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
