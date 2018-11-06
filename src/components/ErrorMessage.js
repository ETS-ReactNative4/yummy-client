import React, { Component } from "react";
import "./ErrorMessage.css";

class ErrorMessage extends Component {
  render() {
    return (
      <article className="message is-danger">
        <div className="message-body">
          {this.props.error}
        </div>
      </article>
    );
  }
}

export default ErrorMessage;
