import React, { Component } from "react";
import "./LogoutButton.css";

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.unregisterJwt = this.unregisterJwt.bind(this);
  }

  unregisterJwt() {
    localStorage.removeItem("jwt");
    window.location.href="/";
  }

  render() {
    return (
      <button onClick={this.unregisterJwt} className="button is-info">
        <strong>Log Out</strong>
      </button>
    );
  }
}

export default LogoutButton;
