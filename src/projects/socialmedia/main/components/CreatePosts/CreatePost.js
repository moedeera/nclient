import React from "react";
import "./CreatePost.css";
import pic from "./blank-avatar.png";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
export const CreatePost = () => {
  const [alert, setAlert] = useState(false);

  // console.log(posts); // why does this get called every time I type
  // Also why does the alert happen no matter what?
  const [postBox, setPostBox] = useState({
    PstText: "",
    PstPicture: "",
  });
  const { CreatePosts } = useContext(UserContext);
  var postImage = "http://localhost:8080/images/image1.jpeg";
  const onPostBoxChange = (e) => {
    setPostBox({ ...postBox, PstText: e.target.value });
  };

  var jet = false;
  const onPostSubmission = () => {
    if (postBox.PstText === "") {
      console.log(postBox.PstText, "the text box empty");

      setAlert(true);
    } else {
      CreatePosts(postBox);
      setPostBox({
        ...postBox,
        PstText: "",
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
          <div>
            <input
              style={{ display: "none" }}
              id="file-input"
              type="file"
              onChange={(e) => {
                setPostBox({ ...postBox, PstPicture: e.target.files[0] });
              }}
            />
            <label htmlFor="file-input" type="submit">
              <i className="fas fa-image"></i>
            </label>
          </div>

          <i className="fas fa-video"></i>

          <i className="fas fa-music fa"></i>

          <button
            className="btn btn-social-primary"
            onClick={(e) => {
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
