import React from "react";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../Context/Context";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav/NavTop/Nav";
import { NavRight } from "./Nav/NavRight/NavRight";
import { NavLeft } from "./Nav/NavLeft/NavLeft";
import "./socialmedia.css";

export const SocialMedia = () => {
  var log = true;

  return (
    <UserContextProvider>
      {" "}
      <div className="nav">
        <Nav status={log} />
        <NavLeft status={log} />
        <NavRight status={log} />
      </div>
      <div>
        {log ? "You are logged in" : <>Please Log in</>}

        <Outlet />
      </div>
    </UserContextProvider>
  );
};
