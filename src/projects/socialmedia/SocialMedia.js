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
  var log = true;
  var show = true;
  const location = useLocation();

  if (location.pathname === "/socialmedia/profile") {
    show = false;
  }

  return (
    <UserContextProvider>
      {" "}
      <div className="nav">
        <Nav status={log} />
        {show && (
          <>
            <NavLeft status={log} />
            <NavRight status={log} />
          </>
        )}
      </div>
      <div>
        {log ? "You are logged in" : <>Please Log in</>}

        <Outlet />
      </div>
    </UserContextProvider>
  );
};
