import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Yummy</strong>
            {" "}
            by
            {" "}
            <a href="https://jgthms.com">Ed Prince</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
