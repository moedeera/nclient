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
  // const [log, setLog] = useState(true);
  var log = true;
  // const navigate = useNavigate();

  return (
    <UserContextProvider>
      {" "}
      {/* <button
        onClick={() => {
          setLog(!log);
          if (log) {
            navigate("/socialmedia/login");
          } else {
            navigate("/socialMedia");
          }
        }}
      >
        toggle Login
      </button> */}
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
