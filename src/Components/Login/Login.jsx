import React, { useState } from "react";
import "./login.css";
import axios from "axios";
const Login = () => {
  const [login, setLogin] = useState({});
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/user/login", login)
      .then((res) => {
        console.log(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };
  return (
    <div className="login">
      <div className="loginContainer">
      <i className="icon" class='bx bxs-user'></i>
        <h3>welcome to ........</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={login.email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            value={login.password}
            placeholder="password"
            onChange={handleChange}
          />
          <div className="loginItem">
            <a href="#">Forget your password?</a>
            <p>Register</p>
          </div>
          <p
            style={{ display: error === "" ? "none" : "block" }}
            className="checkPassword"
          >
            {error}
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
