import React from "react";
import "./AppHeader.css";

export const AppHeader = () => {
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="logo">
          {/* <img src={icon} alt="" /> */}
          <h2>
            DeeraCode<span style={{ color: "goldenrod" }}>.dev</span>
          </h2>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="https://github.com/moedeera">
                Github
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            <li>
              <a href="#portfolio" className="menu-md">
                Portfolio
              </a>
            </li>
            {/* <li>
              <button className="btn btn-primary">Login</button>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-container-sm">
        <div className="logo">
          {/* <img src={icon} alt="" /> */}
          {/* <h2>
            DeeraCode<span style={{ color: "goldenrod" }}>.dev</span>
          </h2> */}
          {/* <i className="fa fa-bars fa-2x" aria-hidden="true" ></i> */}
        </div>
      </div>
    </div>
  );
};
