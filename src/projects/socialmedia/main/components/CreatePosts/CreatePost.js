import React from "react";
import "./CreatePost.css";
import pic from "./blank-avatar.png";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../../../Context/Context";
import useDatabase from "../../../common/hooks/UseDataBase";
export const CreatePost = () => {
  const [alert, setAlert] = useState(false);
  const { createPosts, setComments, createCommentList } =
    useContext(UserContext);

  // console.log(posts); // why does this get called every time I type
  // Also why does the alert happen no matter what?
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
      setAlert(true);
    } else {
      var PostID = Math.floor(Math.random() * 1000 + 1);
      createPosts(postBox, PostID);
      createCommentList(PostID);
      setComments([{ PostId: PostID, commentList: [] }]);
      setPostBox({
        ...postBox,
        PstText: "",
        PstPicture: "",
      });
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
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
            <label
              htmlFor="file-input"
              type="submit"
              style={{ margin: "0", border: "none" }}
            >
              <i className="fas fa-image"></i>
            </label>
          </div>

          <label
            htmlFor="file-input"
            type="submit"
            style={{ margin: "0", border: "none" }}
          >
            <i className="fas fa-video"></i>
          </label>

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
