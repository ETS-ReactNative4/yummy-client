import React, { Component } from "react";
import * as Request from "../modules/request";
import ErrorMessage from "./ErrorMessage";
import "./CommentInput.css";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };

    this.postComment = this.postComment.bind(this);
  }

  postComment() {
    const content = document.getElementById("content").value;
    const id = this.props.id;

    Request.comment({id: id, content: content})
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.error(err.message);
        this.setState({errors: [{message: "Please login to comment"}] });
      });
  }

  render() {
    const author = localStorage.getItem("username");
    return (
      <div>
        {this.state.errors.map(error =>
          <ErrorMessage error={error.message} />
        )}
        <article className="media">
          <div className="media-content">
            <div className="field">
              <h5>{author}</h5>
              <p className="control">
                <textarea
                  id="content"
                  className="textarea"
                  placeholder="Add a comment..."
                />
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <button
                    onClick={this.postComment}
                    id="submit-comment"
                    className="button is-info"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}

export default CommentInput;
