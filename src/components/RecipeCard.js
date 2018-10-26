import React, { Component } from "react";
import "./RecipeCard.css";

class RecipeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.photo} alt="Placeholder image" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <a id="recipe-link" href={"/recipe/" + this.props.id}>
                  {this.props.title}
                </a>
              </p>
              <p className="subtitle is-6">
                {this.props.author ? this.props.author : "Anonymous"}
              </p>
            </div>
          </div>

          <div className="content">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
