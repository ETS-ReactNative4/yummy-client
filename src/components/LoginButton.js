import React, { Component } from "react";
import "./LoginButton.css";

class LoginButton extends Component {
  render() {
    return (
      <div className="navbar-item">
        <div className="field">
          <p className="control">
            <a href="/login" className="button is-primary">
              <strong>Log In</strong>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginButton;
