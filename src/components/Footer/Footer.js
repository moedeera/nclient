import React from "react";
import "./footer.css";
import image1 from "../AppHeader/site-logo.png";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-upper">
            <h3>Stay up to date with my projects</h3>
            <input placeholder="Enter your email address" type="text" />
            <button className="btn btn-alternate">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <img src={image1} alt="" />
          <h3>Deeracode 2022</h3>
        </div>

        <ul>{/* <li>Features</li> */}</ul>
        <div className="footer-social">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
