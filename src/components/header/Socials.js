import React from "react";
import "./header.css";

export const Socials = () => {
  return (
    <div className="header_social">
      <a href="/">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>

      <a href="/">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>

      <a href="/">
        <i class="fa fa-twitch" aria-hidden="true"></i>
      </a>
    </div>
  );
};
