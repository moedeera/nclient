import React from "react";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../Context/Context";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav/NavTop/Nav";
import { NavRight } from "./Nav/NavRight/NavRight";
import { NavLeft } from "./Nav/NavLeft/NavLeft";
import "./socialmedia.css";
import { useLocation } from "react-router-dom";

export const SocialMedia = () => {
  let log = true;
  let show = true;
  let showNavLeft = true;
  let friendsPage = false;
  const location = useLocation();
  if (location.pathname === "/socialmedia/friends") {
    friendsPage = true;
  } else {
    friendsPage = false;
  }

  if (
    location.pathname === "/socialmedia/profile" ||
    location.pathname === "/socialmedia/friends"
  ) {
    show = false;
  }

  if (location.pathname === "/socialmedia/profile") {
    showNavLeft = false;
  }

  return (
    <UserContextProvider>
      {" "}
      <div className="nav">
        <Nav status={log} />
        {show && (
          <>
            {" "}
            <NavRight status={log} />
          </>
        )}
        {showNavLeft && <NavLeft status={log} friendsPage={friendsPage} />}
      </div>
      <div>
        {log ? "You are logged in" : <>Please Log in</>}

        <Outlet />
      </div>
    </UserContextProvider>
  );
};
