import React from "react";
import "./CreatePost.css";
import pic from "./blank-avatar.png";
import { useState, useEffect } from "react";
import { PostsManagement } from "../../../common/hooks/PostsManagement";
export const CreatePost = () => {
  const [alert, setAlert] = useState(false);
  const { posts } = PostsManagement();
  console.log(posts);
  const [postBox, setPostBox] = useState({
    PstText: "",
    PstPicture: "",
  });
  const onPostBoxChange = (e) => {
    setPostBox({ ...postBox, PstText: e.target.value });
  };

  var jet = false;
  const onPostSubmission = () => {
    if (postBox.PstText === "") {
      console.log(postBox.PstText, "it was empty");

      setAlert(true);
    } else {
      setPostBox({
        ...postBox,
        PstPicture: "",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  return (
    <div className="CreatePost">
      <img src={pic} alt="new" />
      <div className="MCpost">
        <div className="MCPostbox">
          <textarea
            type="textarea"
            className="textarea"
            placeholder="Share a Post"
            value={postBox.PstText}
            onChange={(e) => {
              onPostBoxChange(e);
            }}
          />
        </div>
        {jet ? (
          <textarea className="urlTextArea" placeholder="Enter image URL" />
        ) : (
          ""
        )}
        {alert ? (
          <p style={{ color: "crimson", padding: "10px 0" }}>
            Please Enter a Post
          </p>
        ) : (
          ""
        )}

        <div className="MCbuttons">
          <i className="fas fa-image"></i>

          <i className="fas fa-video"></i>

          <i className="fas fa-music fa"></i>

          <button
            className="btn btn-social-primary"
            onClick={() => {
              setAlert(!alert);
              onPostSubmission(postBox.PstText);
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
