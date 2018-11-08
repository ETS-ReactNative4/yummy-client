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
    this.searchRecipes = this.searchRecipes.bind(this);
    this.options = ["title", "author", "description", "photo"];

    Request.getAllRecipes(this.options).then(response => {
      console.log(response);
      this.setState({ recipes: response });
    }, err => {
      this.setState({error: {message: err.message}});
    });
  }

  searchRecipes() {
    const searchTerm = document.getElementById("search").value;
    console.log(searchTerm, this.options);
    Request.getAllRecipes(this.options, searchTerm).then(response => {
      console.log(response);
      this.setState({ recipes: response });
    }, err => {
      this.setState({error: {message: err.message}});
    });
  }

  render() {
    return (
      <div className="App-body">
        <div className="columns">
          <div className="column is-6">
            <h1>All Recipes</h1>
          </div>
          <div className="column is-6">
            <div className="control">
              <input
                onChange={this.searchRecipes}
                className="input"
                type="text"
                id="search"
                placeholder="Search recipes..."
              />
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          {this.state.recipes.map((recipe) =>
            <div className="column is-3" key={recipe._id.toString()}>
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

export default Home;
