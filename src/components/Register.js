import React, { Component } from "react";
import * as Request from "../modules/request";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    console.log("Registering");
    let user = {
      email: document.getElementById("user-email"),
      username: document.getElementById("user-username"),
      password: document.getElementById("user-password")
    };
    let testUser = {
      email: "test",
      username: "test",
      password: "test"
    };

    Request.register(testUser, res => {
      console.log(res);
      alert(res.error);
    });
  }
  render() {
    return (
      <div className="App-body field">
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
