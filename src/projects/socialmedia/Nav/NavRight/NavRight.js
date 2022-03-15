import React from "react";

export const NavRight = ({ status }) => {
  if (status) {
    return (
      <div className="nav-right">
        <div className="searchbox">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search" />
        </div>

        <div className="nav-user-icon"></div>
      </div>
    );
  } else {
    return (
      <div className="nav-right">
        <div className="searchbox">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search" />
        </div>

        <div className="nav-user-icon"></div>
      </div>
    );
  }
};
