import { shallowCopy } from "ejs/lib/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavTop.css";
import "./Settings.css";

const Settings = () => {
  const [card, showCard] = useState(false);
  const [title, setTitle] = useState("Settings");
  return (
    <div className="settings">
      <div className="settings-select">
        <ul>
          <li>
            <div className="settings-title">
              <i className="fas fa-cog"></i> Settings{" "}
            </div>{" "}
            <i
              className="fas fa-chevron-right"
              onClick={() => {
                showCard(!card);
                setTitle("Settings");
              }}
            ></i>
          </li>
          <li>
            <div className="settings-title">
              <i className="fas fa-phone-alt"></i> Support-line{" "}
            </div>
            <i
              className="fas fa-chevron-right"
              onClick={() => {
                showCard(!card);
                setTitle("Support");
              }}
            ></i>
          </li>
          <li>
            {" "}
            <div className="settings-title">
              <i className="fas fa-sign-out-alt"></i>
              <Link to="./login" style={{ color: "black" }}>
                Logout{" "}
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="settings-show"
        style={card ? { left: "0" } : { left: "100%" }}
      >
        <div className="settings-show-title">
          {" "}
          <i
            className="fas fa-chevron-left fa-2x"
            onClick={() => {
              showCard(!card);
            }}
          ></i>
          <h3>{title}</h3>
        </div>
        {title === "Settings" && (
          <ul className="settings-ul">
            <li>
              <div>
                <i className="fas fa-cog"></i> Settings
              </div>
            </li>
            <li>
              {" "}
              <div>
                <i className="fas fa-lock"></i>Privacy
              </div>
            </li>
            <li>
              <div>
                {" "}
                <i className="fas fa-globe"></i>Language
              </div>
            </li>
          </ul>
        )}
        {title === "Support" && (
          <ul className="settings-ul">
            <li>
              <div>
                <i className="fas fa-life-ring"></i> Report Harrassment
              </div>
            </li>
            <li>
              {" "}
              <div>
                <i className="fas fa-user-secret"></i>Privacy
              </div>
            </li>
            <li>
              <div>
                {" "}
                <i className="fas fa-key"></i>Password Reset
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Settings;
