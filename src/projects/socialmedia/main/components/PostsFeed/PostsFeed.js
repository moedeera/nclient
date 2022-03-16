import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./PostsFeed.css";
export const PostsFeed = ({ LikeUpdate, CommentUpdate }) => {
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
  var Posts = [
    {
      id: 1,
      Poster: 4,
      PosterName: "Jamie",
      PosterPic:
        "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

      postPic:
        "https://cdn.pixabay.com/photo/2017/11/25/21/34/teddy-2977694_960_720.jpg",
      text: "Teddy was just enjoying the sun",
      date: "March 1 2022 at 3:45pm",
      comments: [3],
      likes: 2,
      likers: [1, 2],
      datePosted: new Date("2022-03-01"),
    },
    {
      id: 2,
      Poster: 7,
      PosterName: "Dr Silva",
      PosterPic:
        "https://cdn.pixabay.com/photo/2021/02/09/06/45/doctor-5997504_960_720.jpg",

      postPic:
        "https://cdn.pixabay.com/photo/2020/12/15/14/38/covid-19-5833844_960_720.png",
      text: "Booster shots now available across Canada",
      date: "Jan 10 2022 at 1:35pm",
      comments: [],
      likes: 2,
      likers: [1, 2],
      datePosted: new Date("2022-01-10"),
    },
    {
      id: 5,
      Poster: 3,
      PosterName: "Matt",
      PosterPic:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

      postPic:
        "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Enjoying some quite time at the cabin",
      comments: [1, 5],
      date: "March 2 2022 at 7:20am",
      likes: 2,
      likers: [2, 5],
      datePosted: new Date("2022-03-02"),
    },
    {
      id: 6,
      Poster: 6,
      PosterName: "Mitch Wiz",
      PosterPic:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
      postPic:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
      text: "Happy Anniversary Babe",
      date: "Feb 22 2022 at 10:25pm",
      comments: [2, 4],
      likes: 4,
      likers: [1, 2, 3, 4],
      datePosted: new Date("2022-02-22"),
    },
  ];
  const [formComment, setFormComment] = useState([]);
  const [postID] = useState([]);

  return (
    <div className="Feed">
      <div className="Post-Feed">
        {Posts.map((Post) => (
          <>
            <div className="postFeed-post" key={Post.id}>
              <div className="postFeed-post-info">
                <img src={Post.PosterPic} alt="" />
                <div className="postFeed-post-info-stamp">
                  <h3>{Post.PosterName}</h3>
                  <h5>Published {Post.date}</h5>
                </div>
              </div>
              <div className="postFeed-post-image">
                {" "}
                <img src={Post.postPic} alt="" />
              </div>
              <div className="postFeed-post-stats">
                <div>
                  <i class="fas fa-eye " style={{ color: "teal" }}></i>
                  <small>12</small>
                </div>
                <div>
                  <i class="far fa-heart" style={{ color: "crimson" }}></i>
                  <small>{Post.likers.length}</small>
                </div>
                <div>
                  <i class="fas fa-comment" style={{ color: "steelblue" }}></i>
                  <small>{Post.comments.length}</small>
                </div>
                <div>
                  <i class="fas fa-share" style={{ color: "navy" }}></i>
                  <small>8</small>
                </div>
              </div>
              <div className="postFeed-post-text">{Post.text}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
