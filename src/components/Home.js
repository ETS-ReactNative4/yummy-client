import React, { Component } from "react";
import * as Request from "../modules/request";
import RecipeCard from "./RecipeCard.js";
import ErrorMessage from "./ErrorMessage.js";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      error: []
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
    Request.getAllRecipes(this.options, searchTerm).then(response => {
      if (response.length === 0) {
        const msg = "No results for '" + searchTerm + "'";
        this.setState({error: [{message: msg}]});
      } else {
        this.setState({error: []});
      }
      this.setState({ recipes: response });
    }, err => {
      this.setState({error: [{message: err.message}]});
    });
  }

  render() {
    return (
      <div className="App-body">
        <div className="columns">
          <div className="column is-6">
            <h1>Recipes</h1>
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

        <div className="columns">
          <div className="column is-12">
            <div class="tabs">
              <ul>
                <li class="is-active"><a>Alphabetically</a></li>
                <li><a>Most Views</a></li>
                <li><a>Most Popular</a></li>
              </ul>
            </div>
          </div>
        </div>

        {this.state.error.map(error => <ErrorMessage error={error.message} />)}
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
