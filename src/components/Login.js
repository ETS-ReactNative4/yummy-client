import React, { Component } from "react";
import ErrorMessage from "./ErrorMessage.js";
import * as Request from "../modules/request.js";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginRequest = this.loginRequest.bind(this);
    this.state = {
      errors: []
    };
  }

  loginRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
      username,
      password
    };

    Request.login(user).then(response => {
      //Success redirect to home page
      window.location.href = "/";
    }).catch(err => {
      this.setState({errors: [{message: "Invalid details"}] });
    });
  }

  render() {
    return (
      <div className="App-body field narrow">
        {this.state.errors.map(error =>
          <ErrorMessage error={error.message} />
        )}
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button onClick={this.loginRequest} className="button is-info center" type="submit">Log In</button>
        <div className="text-center">
          <p>Not got an account?</p>
          <a className="text-center" href="/register">Register</a>
        </div>
      </div>
    );
  }
}

export default Login;
