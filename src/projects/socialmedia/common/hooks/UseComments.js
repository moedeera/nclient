import React from "react";
import { useState } from "react";

export const UseComments = () => {
  const [comments, setComments] = useState([]);
  var Comments = [
    {
      id: 1,
      author: 6,
      name: "Mitch Wiz",
      picture:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
      date: "Feb 1",
      post: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 2,
      author: 5,
      name: "Jimmy",
      picture:
        "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Feb 11",
      post: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },

    {
      id: 3,
      author: 1,
      name: "Jenny",
      picture:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Jan 1",
      post: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 4,
      author: 4,
      name: "James",
      picture:
        "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Feb 11",
      post: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 5,
      author: 4,
      name: "Matt",
      picture:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Feb 4",
      post: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 6,
      author: 4,
      name: "Matt",
      picture:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Feb 4",
      post: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 7,
      author: 4,
      name: "Matt",
      picture:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      date: "Feb 4",
      post: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 8,
      author: 4,
      name: "Amanda Busch",
      picture:
        "https://pixabay.com/photos/family-love-parenthood-vacation-6475821/",
      date: "Feb 4 ",
      post: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 8,
      author: 4,
      name: "Amanda Busch",
      picture:
        "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
      date: "Feb 4 ",
      post: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  const GetComments = (PostId) => {
    // fetch posts for ID
    setComments(Comments.filter((comment) => comment.post === PostId));
  };

  return {
    GetComments,
    comments,
    setComments,
  };
};
