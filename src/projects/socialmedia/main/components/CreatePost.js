import React from "react";
import "./CreatePost.css";
import pic from "./blank-avatar.png";
export const CreatePost = () => {
  var jet = false;
  var alert = false;
  return (
    <div className="CreatePost">
      <img src={pic} alt="new" />
      <div className="MCpost">
        <div className="MCPostbox">
          <textarea
            type="textarea"
            className="textarea"
            placeholder="Share a Post"
          />
        </div>
        {jet ? (
          <textarea className="urlTextArea" placeholder="Enter image URL" />
        ) : (
          ""
        )}
        {alert ? <p style={{ color: "crimson" }}>Please Enter a Post</p> : ""}

        <div className="MCbuttons">
          <i class="fas fa-image"></i>

          <i class="fas fa-video"></i>

          <i class="fas fa-music fa"></i>

          <button className="btn btn-social-primary">Post</button>
        </div>
      </div>
    </div>
  );
};
