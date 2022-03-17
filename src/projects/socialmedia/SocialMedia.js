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

  const user = {
    id: 1,
    name: "Jennifer Smith",
    nickname: "Jenny",
    location: "Toronto, ON",
    description: "Night Owl Queen",
    age: 25,
    scores: [125, 102, 55],
    header: "Mom to 2 cats and a Dog",
    about:
      "Photography aficionado, GamerGirl, Outdoorsy-gal, solo-traveler. Vlogger...pretty much your average millennial",

    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "Matt Russo", type: "request", id: 3 },
      { name: "James Santos", type: "request", id: 4 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 26,
    login: false,
    Notifications: 2,
    Notices: [
      {
        id: 50,
        type: "message",
        user: 2,
        from: "Connie",
        date: new Date("2022-03-01"),
        text: "Hey do you wanna go skiing tomorrow?",
        pending: true,
      },
      {
        id: 20,
        type: "message",
        user: 6,
        from: "Mitch Wiz",
        date: new Date("2022-02-25"),
        text: "Thanks for the gift yo sent!",
        pending: true,
      },
    ],

    Posts: [6, 5, 1],
  };

  return (
    <UserContextProvider value={{ user }}>
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
