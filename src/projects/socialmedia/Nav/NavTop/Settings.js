import { shallowCopy } from "ejs/lib/utils";
import React, { useState } from "react";
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
              <i class="fas fa-cog"></i> Settings{" "}
            </div>{" "}
            <i
              class="fas fa-chevron-right"
              onClick={() => {
                showCard(!card);
              }}
            ></i>
          </li>
          <li>
            <div className="settings-title">
              <i class="fas fa-phone-alt"></i> Support-line{" "}
            </div>
            <i
              class="fas fa-chevron-right"
              onClick={() => {
                showCard(!card);
                setTitle("Support");
              }}
            ></i>
          </li>
          <li>
            {" "}
            <div className="settings-title">
              <i class="fas fa-sign-out-alt"></i> Logout{" "}
            </div>
          </li>
        </ul>
      </div>

      <div
        className="settings-show"
        style={card ? { left: "0" } : { left: "100%" }}
      >
        <i
          class="fas fa-chevron-left fa-2x"
          onClick={() => {
            showCard(!card);
          }}
        ></i>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Settings;
