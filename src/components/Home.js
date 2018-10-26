import React, { Component } from "react";
import * as Request from "../modules/request";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    Request.getAllRecipes(data => {
      this.setState({ recipes: data });
      console.log(this.state.recipes);
    });
  }
  render() {
    return (
      <div className="App-body">
        {this.state.recipes.map(recipe => (
          <div className="card">
            <div className="card-image">
              <img src={recipe.photo} alt="Placeholder image" />
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">
                    <a href="/recipe">{recipe.title}</a>
                  </p>
                  <p className="subtitle is-6">
                    {recipe.author ? recipe.author : "Anonymous"}
                  </p>
                </div>
              </div>

              <div className="content">
                {recipe.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
