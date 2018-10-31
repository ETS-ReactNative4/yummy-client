import React, { Component } from "react";
import "./RecipeCard.css";

class RecipeCard extends Component {
  render() {
    return (
      <a href={"/recipe/" + this.props.id}>
        <div className="card">
          <div className="card-image">
            <img src={this.props.photo} alt={this.props.title} />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.props.title}
                </p>
                <p className="subtitle is-6">
                  {this.props.author ? this.props.author : "Anonymous"}
                </p>
              </div>
            </div>

            <div className="content">
              {this.props.description.slice(0, 120)}
              {this.props.description.length > 120 ? "..." : ""}
              <br />
              <br />
              <p className="muted">
                Read more
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default RecipeCard;
