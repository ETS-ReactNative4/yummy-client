import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.author}</strong>
              <br />
              {this.props.body}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
