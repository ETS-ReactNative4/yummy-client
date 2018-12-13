import React, { Component } from "react";
import RecipeCard from "./RecipeCard.js";
import ErrorMessage from "./ErrorMessage.js";
import DisplayRecipes from "./DisplayRecipes.js";
import * as Request from "../modules/request.js";
import "./MyRecipes.css";

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errors: []
    };
  }


  render() {
    return (
      <div className="App-body narrow">
        <h1>My Recipes</h1>
        {this.state.errors.map(error =>
          <ErrorMessage error={error.message} />
        )}
        <DisplayRecipes favourite={true}/>
      </div>
    );
  }
}

export default MyRecipes;
