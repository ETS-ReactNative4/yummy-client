import React, { Component } from "react";
import "./LoggedInButton.css";

class LoggedInButton extends Component {
  constructor(props) {
    super(props);
  }

  unregisterJwt = () => {
    localStorage.removeItem("jwt");
    window.location.href="/";
  }

  render() {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Profile
        </a>
        <div className="navbar-dropdown">
          <a href="/my-recipes" className="navbar-item">
            My Recipes
          </a>
          <a href="/profile" className="navbar-item">
            Profile
          </a>
          <hr className="navbar-divider" />
          <a onClick={this.unregisterJwt} className="navbar-item">
            Log Out
          </a>
        </div>
      </div>
    );
  }
}

export default LoggedInButton;
