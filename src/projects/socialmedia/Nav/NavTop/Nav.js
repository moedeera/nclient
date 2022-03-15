import React from "react";
import "./NavTop.css";
import blank from "./blank-avatar.png";

export const Nav = () => {
  return (
    <>
      <div className="social-nav-top ">
        <div className="logo">
          <h3>
            <i class="fab fa-pied-piper-alt fa-2x"></i>
          </h3>
          <i class="fab fa-pied-piper-alt fa-2x sm-icon"></i>

          <div className="search">
            <input type="text" placeholder="search" />
            <div className="search-bar">
              {" "}
              <i class="fas fa-search "></i>
            </div>
          </div>
        </div>

        <ul className="menu-items">
          <li>
            <i class="fas fa-home fa-2x"></i>
          </li>
          <li>
            <i class="fas fa-bell fa-2x"></i>
          </li>
          <li>
            {" "}
            <i class="fas fa-comment-alt fa-2x"></i>
          </li>

          <li className="nav-lg">
            <i class="fas fa-user-friends fa-2x"></i>
          </li>

          <li>
            <img src={blank} alt="" className="top-nav-img" />
          </li>
        </ul>
        <div className="menu-bar">
          {" "}
          <i class="fas fa-bars fa-2x"></i>
        </div>
      </div>
    </>
  );
};
