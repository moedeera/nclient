import React from "react";
import "./ProfilePage.css";
import pic from "./blank-avatar.png";
import { PostsFeed } from "../PostsFeed/PostsFeed";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../../../Context/Context";
import { useProfiles } from "../../../common/hooks/useProfiles";
export const ProfilePage = () => {
  const { profiles } = useProfiles();
  const { UpdatePostLikes, page, user, friendsPosts, viewedProfile, setPage } =
    useContext(UserContext);

  useEffect(() => {
    setPage("profile");
  }, []);
  return (
    <div className="profile-page-main">
      <div
        className="profile-page-upper-new"
        style={{
          backgroundImage: `url(${viewedProfile.banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="profile-page-upper-top-new">
          <img src={viewedProfile.profilePic} alt="" />
        </div>
        <div className="profile-page-upper-bottom-new">
          <div className="profile-page-info" style={{ paddingTop: "10px" }}>
            <div className="profile-name">
              <h1 style={{ fontWeight: "700", marginTop: "5px" }}>
                {viewedProfile.name}
              </h1>
            </div>
            <div className="profile-page-buttons">
              <div className="profile-page-lower-btn" id="message-lg">
                <button className="btn btn-secondary profile-page">
                  {" "}
                  Follow
                  <i className="fas fa-bell"></i>
                </button>
              </div>
              <div className="profile-page-lower-btn" id="message-lg">
                <button className="btn btn-secondary  profile-page">
                  {" "}
                  Message <i className="fas fa-comment"></i>
                </button>
              </div>
              <div className="profile-page-lower-btn" id="message-lg">
                <button className="btn btn-secondary  profile-page">
                  {" "}
                  Like
                  <i className="fas fa-thumbs-up"></i>
                </button>
              </div>
            </div>
            <div className="profile-page-lower-buttons">
              <div>
                <i className="fas fa-user-friends fa-2x"></i>
                <h3>{viewedProfile.Friends.length}</h3>
              </div>
              <div>
                <i className="fas fa-street-view fa-2x"></i>
                <h3>{viewedProfile.followers.length}</h3>
              </div>
              <div>
                {" "}
                <i className="fas fa-eye fa-2x"></i>
                <h3>{viewedProfile.views ? viewedProfile.views : 239}</h3>
              </div>
              <div>
                <i className="fab fa-gratipay fa-2x"></i>
                <h3>{viewedProfile.likes ? viewedProfile.likes : 113}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-page-lower">
        <div className="profile-page-lower-top-side">
          <div className="profile-page-lower-bio">
            <ul>
              <li>
                <h3 style={{ color: "white" }}>Bio:</h3>
              </li>
              {viewedProfile.description !== "" && (
                <li>"{viewedProfile.description}"</li>
              )}
              {viewedProfile.header !== "" && <li>'{viewedProfile.header}'</li>}
              <li>
                <i className="fas fa-map-pin"></i> Toronto Ontario
              </li>
              <li>
                <i className="fab fa-pagelines"></i>25 years old
              </li>
            </ul>
          </div>

          <div className="profile-page-lower-friends">
            <h3 style={{ color: "white" }}>Friends</h3>
            <div className="profile-page-friendList">
              {profiles.map((profile) => (
                <div key={profile.id} className="profile-page-friend">
                  <img src={profile.profilePic} alt="" />
                  <p>{profile.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-page-photos">
            <h2>{viewedProfile.nickname}'s Photos</h2>
            <div className="profile-photo-grid">
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2022/04/06/20/30/big-ben-7116305_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/07/02/34/people-2598902_960_720.jpg"
                  alt=""
                />
              </div>

              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2021/09/10/11/19/camping-6612823_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2021/05/31/12/47/hiking-6298742_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2017/07/31/18/52/tent-2559999_960_720.jpg"
                  alt=""
                />
              </div>

              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2017/07/31/22/54/night-2561809_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2021/11/05/17/31/oil-lamp-6771785_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="profile-photo">
                <img
                  src="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"
                  alt=""
                />
              </div>
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
            {viewedProfile.name}'s Posts
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
