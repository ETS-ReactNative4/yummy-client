import React, { Component } from "react";
import RecipeCard from "./RecipeCard.js";
import ErrorMessage from "./ErrorMessage.js";
import * as Request from "../modules/request.js";
import "./MyRecipes.css";

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errors: []
    };
    this.getAllFavourites();
  }

  getAllFavourites = () => {
    Request.getAllFavourites().then(response => {
      this.setState({recipes: response});
    }).catch(err => {
      this.setState({errors: [{message: "Could not fetch favourites"}] });
    });
  }

  render() {
    return (
      <div className="App-body">
        <h1>My Recipes</h1>
        {this.state.errors.map(error =>
          <ErrorMessage error={error.message} />
        )}
        <div className="columns is-multiline is-mobile">
          {this.state.recipes.map((recipe) =>
            <div className="column is-4-tablet is-3-desktop is-12-mobile" key={recipe._id.toString()}>
              <RecipeCard
                photo={recipe.photo}
                id={recipe._id}
                author={recipe.author}
                description={recipe.description}
                title={recipe.title}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MyRecipes;
