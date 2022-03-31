import React from "react";
import "./ProfilePage.css";
import pic from "./blank-avatar.png";
import { PostsFeed } from "../PostsFeed/PostsFeed";
import { useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import { useProfiles } from "../../../common/hooks/useProfiles";
export const ProfilePage = () => {
  const { profiles } = useProfiles();
  const { UpdatePostLikes, page, user, friendsPosts } = useContext(UserContext);

  return (
    <div className="profile-page-main">
      <div className="profile-page-upper">
        <div className="profile-page-upper-top">
          {/* <div className="profile-page-upper-top-overlay">
         <img src={'https://cdn.pixabay.com/photo/2018/11/19/15/06/bridge-3825439_960_720.jpg'} alt=''/>
       </div> */}
          <div className="profile-page-upper-top-status">
            <i className="fas fa-circle"></i>
            {/* <li> <i className="fas fa-heart fa-2x"></i><h4>18</h4></li>
           <li> <i className="fas fa-user-friends fa-2x"></i><h4>18</h4></li>
            */}
          </div>
          <div className="profile-page-upper-top-name">
            <h1>{user.name}</h1>
          </div>
        </div>

        <div className="profile-page-upper-bottom">
          <h2 className="header-sm">Jennifer Smith</h2>
          <div className="profile-page-upper-bottom-list">
            <div className="profile-page-upper-bottom-list-actions">
              <div className="profile-page-lower-btn" id="message-lg">
                <button className="btn btn-secondary"> Befriend</button>
              </div>

              <div className="profile-page-lower-btn" id="msg">
                <button className="btn btn-secondary">Message</button>
              </div>
              <div className="profile-page-lower-btn" id="msg">
                <button className="btn btn-secondary">Follow</button>
              </div>
            </div>
            <ul>
              <li>
                <small>From</small>
                <h4>{user.location}</h4>
              </li>
              <li>
                <small>Works at</small>
                <h4>BV Engineering</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-page-upper-image">
          <img src={user.profilePic} alt="" />
        </div>
      </div>
      <div className="profile-page-lower">
        <div className="profile-page-lower-top-side">
          <div className="profile-page-lower-buttons">
            <div>
              <i
                className="fas fa-user-friends fa-2x"
                style={{ color: "green" }}
              ></i>
              <h3>{user.Friends.length}</h3>
            </div>
            <div>
              <i
                className="fas fa-street-view fa-2x"
                style={{ color: "var(--color-primary-social)" }}
              ></i>
              <h3>{user.followers.length}</h3>
            </div>
            <div>
              {" "}
              <i
                className="fas fa-eye fa-2x"
                style={{ color: "var(--color-secondary-social)" }}
              ></i>
              <h3>{user.views ? user.views : 239}</h3>
            </div>
            <div>
              <i
                className="fab fa-gratipay fa-2x"
                style={{ color: "crimson" }}
              ></i>
              <h3>{user.likes ? user.likes : 113}</h3>
            </div>
          </div>

          <div className="profile-page-lower-bio">
            <ul>
              <li>
                <h3>Bio:</h3>
              </li>
              {user.description !== "" && <li>"{user.description}"</li>}
              {user.header !== "" && <li>'{user.header}'</li>}
              <li>
                <i className="fas fa-map-pin"></i> Toronto Ontario
              </li>
              <li>
                <i className="fab fa-pagelines"></i>25 years old
              </li>
            </ul>
          </div>

          <div className="profile-page-lower-friends">
            <h3>Friends</h3>
            <div className="profile-page-friendList">
              {profiles.map((profile) => (
                <div key={profile.id} className="profile-page-friend">
                  <img src={profile.profilePic} alt="" />
                  <p>{profile.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-page-footer">
            <small>Privacy Policy</small>
            <small>Terms</small>
            <small>2021 Copyright</small>
          </div>
        </div>

        <div className="profile-page-lower-posts">
          <div className="postFeed-post" style={{ fontWeight: "bold" }}>
            {user.name}'s Posts
          </div>
          <PostsFeed
            Posts={friendsPosts}
            LikeCounter={UpdatePostLikes}
            Page={page}
          />
        </div>
      </div>
    </div>
  );
};
