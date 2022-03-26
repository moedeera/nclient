import React from "react";
import "./ProfilePage.css";
import pic from "./blank-avatar.png";
import {PostsFeed} from "../PostsFeed/PostsFeed"
import {useContext} from "react"
import {UserContext} from "../../../../../Context/Context"

export const ProfilePage = () => {
  const {posts,
    UpdatePostLikes,
    page
  } = useContext(UserContext);
  return <div className="profile-page-main">
       
<div className="profile-page-upper">
     <div className="profile-page-upper-top">
       {/* <div className="profile-page-upper-top-overlay">
         <img src={'https://cdn.pixabay.com/photo/2018/11/19/15/06/bridge-3825439_960_720.jpg'} alt=''/>
       </div> */}
         <div className="profile-page-upper-top-status">
                  <i class="fas fa-circle"></i>
          </div>
         <div className="profile-page-upper-top-name">
             <h2>Jonathan Smith</h2>
           </div>
    </div>

   <div className="profile-page-upper-bottom">
       <div className="profile-page-upper-bottom-list">
         <ul>
           <li><small>From</small><h4>Toronto, Ont</h4></li>
           <li><small>Works at</small><h4>BV Engineering</h4></li>
           
         </ul>
            
            
       </div>
    </div>
   <div className="profile-page-upper-image">
             <img src={pic} alt=''/>
    </div>

    </div>
<div className="profile-page-lower">

 <div className="profile-page-lower-top-side">

      <div className="profile-page-lower-buttons">
             <div className="profile-page-lower-btn">
                 <button className="btn btn-secondary">Message</button>
              </div>
            <div className="profile-page-lower-btn">
                <button className="btn btn-secondary">Invite</button>
            </div>
      </div>

       <div className="profile-page-lower-bio">
         
         <ul>
           <li><h3>Bio</h3></li>
           <li>Nigh Owl</li>
           <li>"Live life for the moment"</li>
           <li>Toronto Ontario</li>
           <li>25 years old</li>
           
         </ul>

       </div>

       <div className="profile-page-lower-friends">

         <h3>Friends</h3>
         <div className="profile-page-friendList">

      <div className="profile-page-friend">
<img src={pic} alt='' />
<p>James Vitto</p>

      </div>
      <div className="profile-page-friend">
<img src={pic} alt='' />
<p>James Vitto</p>

      </div>
      <div className="profile-page-friend">
<img src={pic} alt='' />
<p>James Vitto</p>

      </div>
      <div className="profile-page-friend">
<img src={pic} alt='' />
<p>James Vitto</p>

      </div>
      <div className="profile-page-friend">
<img src={pic} alt='' />
<p>James Vitto</p>

      </div>

         </div>
      

       </div>

    <div className="profile-page-footer">
  <small>Privacy Policy</small>
  <small>Privacy Policy</small>
  <small>Econnect Technologies</small>

     </div>

      </div>
 
<div className="profile-page-lower-posts">
  <PostsFeed Posts={posts}
  LikeCounter ={UpdatePostLikes}
  Page ={page}
  />
</div>

    </div>
    
    
    </div>;
};
