import { createContext } from "react";

export const UserContext = createContext({});
var user = {
  id: 1,
  status: "public",
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
      picture:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
      picture:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",

      pending: true,
    },
  ],

  Friends: [2, 3, 4, 6],
  followers: [5, 6, 9],
  following: [5, 7, 9],
  Posts: [6, 5, 1],
};
export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
