import React, { Component } from "react";
import * as Request from "../modules/request";
import "./CommentInput.css";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.postComment = this.postComment.bind(this);
  }

  postComment() {
    console.log("clicked");
    let content = document.getElementById("content").value;
    console.log(content);
    let uid = 0;
    let id = this.props.id;
    Request.comment({ id: id, uid: uid, content: content }, res => {
      Request.getComments(id, result => {
        this.setState({ comments: result });
        console.log(this.state);
      });
    });
  }

  render() {
    return (
      <article className="media">
        <div className="media-content">
          <div className="field">
            <h5>Ed Prince</h5>
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
    );
  }
}

export default CommentInput;
