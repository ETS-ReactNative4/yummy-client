import React, { Component } from "react";
import * as Request from "../modules/request";
import ErrorMessage from "./ErrorMessage.js";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = {
      error: []
    };
  }

  register() {
    let user = {
      email: document.getElementById("user-email").value,
      username: document.getElementById("user-username").value,
      password: document.getElementById("user-password").value
    };

    Request.register(user, res => {
      if (res.redirect) {
        window.location.href = res.redirect;
      } else if (res.error) {
        this.setState({ error: [{ message: res.error }] });
      }
    });
  }

  render() {
    return (
      <div className="App-body field">
        {this.state.error.map(error => <ErrorMessage error={error.message} />)}
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email address"
          id="user-email"
        />
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          id="user-username"
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          id="user-password"
        />
        <button
          onClick={() => {
            this.register();
          }}
          className="button is-info center"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default Register;
