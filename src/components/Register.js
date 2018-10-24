import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div className="App-body field">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="button is-info center" type="submit">Sign Up</button>
      </div>
    );
  }
}

export default Register;
