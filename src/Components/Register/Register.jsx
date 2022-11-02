import React, { useState } from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Register = () => {
  const [register, setRegister] = useState({});
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegister((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/user/signup", register)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };
  return (
    <div className="register">
      <div className="registerContainer">
	  <i className="icon" class='bx bxs-user-plus'></i>
        <h3>welcome to ........</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={register.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            value={register.email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="tel"
            required
            name="number"
            value={register.number}
            placeholder="telephone number"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={register.password}
            onChange={handleChange}
          />
          <div className="loginItem">
            <a href="#">Login</a>
          </div>
          <p
            style={{ display: error === "" ? "none" : "block" }}
            className="checkPassword"
          >
            {error}
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
