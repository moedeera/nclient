import React from "react";
import "./NavTop.css";
import blank from "./blank-avatar.png";
import { Link } from "react-router-dom";

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
          <Link to="/socialmedia">
            <li>
              <i class="fas fa-home fa-2x"></i>
              <h5>Home</h5>
            </li>
          </Link>

          <li>
            <i class="fas fa-bell fa-2x"></i>
            <h5>Notifications</h5>
          </li>

          <Link to="trending">
            <li>
              <i class="fab fa-hotjar trending"></i>
              <h5>Trending</h5>
            </li>
          </Link>

          <li>
            {" "}
            <i class="fas fa-comment-alt fa-2x"></i>
            <h5>Inbox</h5>
          </li>

          <li className="nav-lg">
            <i class="fas fa-user-friends fa-2x"></i>
            <h5>Friends</h5>
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
