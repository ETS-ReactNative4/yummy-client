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

    let options = ["title", "author", "description", "photo"];
    Request.getAllRecipes(options).then(response => {
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
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="search"
                  placeholder="Search recipes..."
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {this.state.recipes.map((recipe, index) => (
            <div className="column is-6" key={recipe._id.toString()}>
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
