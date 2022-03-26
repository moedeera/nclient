import React from "react";
import "./ProfilePage.css";
import pic from "./blank-avatar.png";
import {PostsFeed} from "../PostsFeed/PostsFeed"
import {useContext} from "react"
import {UserContext} from "../../../../../Context/Context"
import { ProfileManagement } from "../../../common/hooks/ProfileManagement";
export const ProfilePage = () => {
  const {profiles}=ProfileManagement()
  const {
    UpdatePostLikes,
    page,user,friendsPosts
  } = useContext(UserContext);
  return <div className="profile-page-main">
       
<div className="profile-page-upper">
     <div className="profile-page-upper-top">
       {/* <div className="profile-page-upper-top-overlay">
         <img src={'https://cdn.pixabay.com/photo/2018/11/19/15/06/bridge-3825439_960_720.jpg'} alt=''/>
       </div> */}
         <div className="profile-page-upper-top-status">
                  <i class="fas fa-circle"></i>
                  {/* <li> <i className="fas fa-heart fa-2x"></i><h4>18</h4></li>
           <li> <i className="fas fa-user-friends fa-2x"></i><h4>18</h4></li>
            */}



          </div>
         <div className="profile-page-upper-top-name">
             <h2>{user.name}</h2>
           </div>

    </div>

   <div className="profile-page-upper-bottom">
       <div className="profile-page-upper-bottom-list">
         <ul>
           <li><small>From</small><h4>{user.location}</h4></li>
           <li><small>Works at</small><h4>BV Engineering</h4></li>
    
         </ul>
            
            
       </div>
    </div>
   <div className="profile-page-upper-image">
             <img src={user.profilePic} alt=''/>
    </div>

    </div>
<div className="profile-page-lower">

 <div className="profile-page-lower-top-side">

      <div className="profile-page-lower-buttons">
             <div className="profile-page-lower-btn">
                 <button className="btn btn-secondary">Message</button>
              </div>
            <div className="profile-page-lower-btn">
                <button className="btn btn-secondary">Follow</button>
            </div>
      </div>

       <div className="profile-page-lower-bio">
         
         <ul>
           <li><h3>Bio:</h3></li>
           {user.description!==""&&<li>"{user.description}"</li>}
           {user.header!==""&&<li>'{user.header}'</li>}
           <li><i className="fas fa-map-pin"></i> Toronto Ontario</li>
           <li><i className="fab fa-pagelines"></i>25 years old</li>
           
         </ul>

       </div>

       <div className="profile-page-lower-friends">

         <h3>Friends</h3>
         <div className="profile-page-friendList">

{profiles.map((profile)=>( <div className="profile-page-friend">
<img src={profile.profilePic} alt='' />
<p>{profile.name}</p>

      </div>))}
     


         </div>
      

       </div>

    <div className="profile-page-footer">
  <small>Privacy Policy</small>
  <small>Terms</small>
  <small>2021 Copyright</small>

     </div>

      </div>
 
<div className="profile-page-lower-posts">
  <div className="postFeed-post" style={{fontWeight:'bold'}}>
    {user.name}'s Posts
  </div>
  <PostsFeed Posts={friendsPosts}
  LikeCounter ={UpdatePostLikes}
  Page ={page}
  />
</div>

    </div>
    
    
    </div>;
};
