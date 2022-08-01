import "../styles/Signin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User Login successful !!</h1>
        <p>
          <Link to="/warranty">Create Warranty for your product </Link>
        </p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div id="container">
      <div className="form">
        <h3 id="retailer-register-h">Retailer Login</h3>

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          <div className="form-element">
            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />
          </div>

          <div className="form-element">
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
          </div>

          <button onClick={handleSubmit} className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
