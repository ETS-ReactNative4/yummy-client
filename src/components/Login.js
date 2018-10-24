import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="App-body field">
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
        <button className="button is-info center" type="submit">Log In</button>
        <div className="text-center">
          <p>Not got an account?</p>
          <a className="text-center" href="/register">Register</a>
        </div>
      </div>
    );
  }
}

export default Login;
