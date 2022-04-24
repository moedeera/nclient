import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      navigate("../");
      localStorage.setItem("Token", JSON.stringify(res.data.token));
      // retrieve
      // redirect to main page
    } catch (error) {}
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
    <div className="login">
      <div className="main-login">
        <div className="main-login-form">
          <h1>Login</h1>
          <div>
            <h3>Email</h3>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div>
            {" "}
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              onSubmit(email, password);
            }}
          >
            Login
          </button>
        </div>
        <div className="main-login-picture">
          <i className="fab fa-pied-piper-alt"></i>
        </div>
      </div>
    </div>
  );
};
