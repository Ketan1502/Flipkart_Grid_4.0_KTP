import "../styles/Signup.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupCreds, setSignupCreds] = useState({});

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    setSignupCreds({ ...signupCreds, name: e.target.value });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    setSignupCreds({ ...signupCreds, mail: e.target.value });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setSignupCreds({ ...signupCreds, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log(signupCreds);
    }
  };

  const successMessage = () => {
    return (
      <div
        id="success"
        style={{
          display: submitted ? "flex" : "none",
        }}
      >
        <p>User {name} successfully registered!!&nbsp;&nbsp;</p>
        <p>
          <Link to="/warranty">Redirect to create warranty</Link>
        </p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        id="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter all the fields !!</p>
      </div>
    );
  };

  return (
    <div id="container">
      <div className="form">
        <h3 id="retailer-register-h">Retailer Signup</h3>

        <div id="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          <div className="form-element">
            <label className="label">Name</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
            />
          </div>

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
            Signup
          </button>

          <p>
            Already have an account ? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
