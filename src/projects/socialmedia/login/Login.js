import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import icon from "../Nav/NavTop/icon.png";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (email, password) => {
    console.log(email, password);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(formData);
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        body,
        config
      );
      console.log(res.data.token);
      navigate("./socialmedia");
      localStorage.setItem("Token", JSON.stringify(res.data.token));
      // retrieve
      // redirect to main page
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("http://localhost:5000");
      console.log(res.data);

      // if (res.data){}
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        {/* <i className="fab fa-pied-piper-alt fa-5x"></i> */}

        <h1 style={{ paddingTop: "30px", paddingLeft: "20px" }}>BlueBear</h1>
        {/* <img
          src={icon}
          alt=""
          style={{ width: "100px", alignItems: "center" }}
        /> */}
        <div className="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="login">
        <div className="container">
          <h1>
            Login to access to
            <br />
            your account
          </h1>
          <div className="login-form">
            <form>
              <input
                input
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <div className="login-options">
                <div className="remember-form">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
              </div>

              <button
                type="submit"
                onClick={() => {
                  onSubmit(email, password);
                }}
              >
                LOG-IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div className="login">
    //   <div className="main-login">
    //     <div className="main-login-form">
    //       <h1>Login</h1>
    //       <div>
    //         <h3>Email</h3>
    //         <input
    //           type="email"
    //           placeholder="Enter email"
    //           name="email"
    //           value={email}
    //           onChange={(e) => onChange(e)}
    //         />
    //       </div>

    //       <div>
    //         {" "}
    //         <h3>Password</h3>
    //         <input
    //           type="password"
    //           placeholder="Enter password"
    //           name="password"
    //           value={password}
    //           onChange={(e) => onChange(e)}
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         onClick={() => {
    //           onSubmit(email, password);
    //         }}
    //       >
    //         Login
    //       </button>
    //     </div>
    //     <div className="main-login-picture">
    //       <div>
    //         <i className="fab fa-pied-piper-alt"></i>
    //         <h1>PiperSocial</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
