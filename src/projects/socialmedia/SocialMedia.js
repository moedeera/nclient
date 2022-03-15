import React from "react";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../Context/Context";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SocialMedia = () => {
  const [log, setLog] = useState(true);
  const navigate = useNavigate();

  return (
    <UserContextProvider>
      {" "}
      <div>
        {log ? <>logged Navbar</> : <>Please Log in</>}

        <button
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
        </button>

        <Outlet />
      </div>
    </UserContextProvider>
  );
};
