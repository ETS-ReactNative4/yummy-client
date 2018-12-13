import React, { Component } from "react";
import Favourite from "./Favourite";
import "./RecipeCard.css";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MAX_DESCRIPTION_LENGTH = 120;
    return (
      <a href={"/recipe/" + this.props.id}>
        <div className="card">
          <div className="card-image">
            <img src={this.props.photo} alt={this.props.title} />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="columns is-mobile">
                  <div className="column is-9 is-9-mobile">
                    <p className="title is-6">
                      {this.props.title}
                    </p>
                  </div>
                  <div className="column is-3 is-3-mobile">
                    <span className="subtitle is-overlay favourite-btn-wrapper">
                      <Favourite id={this.props.id}/>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content is-small">
              <p className="">
                {this.props.author ? this.props.author : "Anonymous"}
              </p>
              {this.props.description.slice(0, MAX_DESCRIPTION_LENGTH)}
              {this.props.description.length > MAX_DESCRIPTION_LENGTH ? "..." : ""}
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
