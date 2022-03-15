import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
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
        "https://images.pexels.com/photos/1842182/pexels-photo-1842182.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      text: "Teddy was just enjoying the sun",
      date: "March 1",
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
      date: "Jan 10",
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
      date: "March 2",
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
      date: "Feb 22",
      comments: [2, 4],
      likes: 4,
      likers: [1, 2, 3, 4],
      datePosted: new Date("2022-02-22"),
    },
  ];
  const [formComment, setFormComment] = useState([]);
  const [postID, setPostID] = useState([]);

  return (
    <div className="Feed">
      <div className="Post-Feed">
        {Posts.map((Post) => (
          <>
            <div key={Post && Post.id} className="Posts">
              <div className=" Poster">
                <div className="PosterInfo">
                  <img
                    src={Post && Post.PosterPic}
                    alt=""
                    className="PostFeed-img "
                  />
                  {Post.PosterName}
                </div>

                <Link to="/Posts" style={{ color: "black" }}>
                  {Post.text}
                </Link>
              </div>
              <Link style={{ color: "black" }} to="/Posts">
                {Post && Post.postPic !== "" ? (
                  <img src={Post.postPic} alt="" className="PostPic" />
                ) : (
                  ""
                )}
              </Link>

              <div className="Interactions" style={{ color: "black" }}>
                <div>{Post && Post.date}</div>
                <div>
                  {Post.likers.length}{" "}
                  <i className="fas fa-heart" style={{ color: "red" }}></i>
                </div>

                <div>
                  {" "}
                  {Post.comments.length}
                  <i className="fas fa-comment" style={{ color: "grey" }}></i>
                </div>
              </div>
              <div className="Create-Post">
                {" "}
                <img src={user.profilePic} alt="" className="PostFeed-img " />
                <input
                  type="textarea"
                  name="comment"
                  className="PostComment"
                  value={postID === Post.id ? formComment : ""}
                />
                <div></div>
                {formComment.length > 0 && postID === Post.id ? (
                  <div className="SubmitComment">
                    <button
                      className="SCButton"
                      onClick={() => {
                        CommentUpdate(formComment, user, Post.id);
                        setFormComment("");
                      }}
                    >
                      Post
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
