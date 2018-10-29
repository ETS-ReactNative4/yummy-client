import React, { Component } from "react";
import * as Request from "../modules/request";
import RecipeCard from "./RecipeCard.js";
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
        <div className="columns">
          {this.state.recipes.map(recipe => (
            <div className="column is-3">
              <RecipeCard
                photo={recipe.photo}
                id={recipe._id}
                author={recipe.author}
                description={recipe.description}
                title={recipe.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
