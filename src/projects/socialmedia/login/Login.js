import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="content login">
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
          <i class="fab fa-pied-piper"></i>
        </div>
      </div>
    </div>
  );
};
