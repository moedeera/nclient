import React from "react";
import "./Login.css";
import axios from "axios";

export const Login = () => {
  try {
    var res = axios.get("http://localhost:5000");
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="login">
      <div className="main-login">
        <div className="main-login-form">
          <h1>Login</h1>
          <div>
            <h3>Email</h3>
            <input type="email" placeholder="Enter email" />
          </div>

          <div>
            {" "}
            <h3>Password</h3>
            <input type="password" placeholder="Enter password" />
          </div>

          <button type="submit">Login</button>
        </div>
        <div className="main-login-picture">
          <i className="fab fa-pied-piper-alt"></i>
        </div>
      </div>
    </div>
  );
};
