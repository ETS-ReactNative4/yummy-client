import React, { Component } from "react";
import "./CommentInput.css";

class CommentInput extends Component {
  render() {
    return (
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..." />
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="button is-info">Submit</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}

export default CommentInput;
