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
      errors: [],
      order: "alphabet"
    };
    this.searchRecipes = this.searchRecipes.bind(this);
    this.sortByAlphabet = this.sortByAlphabet.bind(this);
    this.sortByViews = this.sortByViews.bind(this);
    this.getAllRecipes = this.getAllRecipes.bind(this);
    this.options = ["title", "author", "description", "photo"];
    this.getAllRecipes();
  }

  getAllRecipes(order=null) {
    Request.getAllRecipes(this.options, order).then(response => {
      this.setState({ recipes: response });
    }).catch(err => {
      this.setState({errors: {message: err.message}});
    });
  }

  searchRecipes() {
    console.log("Searching...");
    const searchTerm = document.getElementById("search").value;
    Request.getAllRecipes(this.options, searchTerm, null).then(response => {
      if (response.length === 0) {
        const msg = "No results for '" + searchTerm + "'";
        this.setState({errors: [{message: msg}]});
      } else {
        this.setState({errors: []});
      }
      this.setState({ recipes: response });
      console.log(this.state.recipes);
    }).catch(err => {
      this.setState({errors: [{message: err.message}]});
    });
  }

  sortByAlphabet() {
  //Set config options
    const order = "alphabet";
    this.getAllRecipes(order);
    const alphabetBtn = document.getElementById("sort-alphabet");
    const viewsBtn = document.getElementById("sort-views");
    alphabetBtn.classList.add("is-active");
    viewsBtn.classList.remove("is-active");
  }

  sortByViews() {
  //Request all recipes order by views
    const order = "views";
    this.getAllRecipes(order);
    const alphabetBtn = document.getElementById("sort-alphabet");
    const viewsBtn = document.getElementById("sort-views");
    alphabetBtn.classList.remove("is-active");
    viewsBtn.classList.add("is-active");
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
            <div className="tabs is-centered">
              <ul>
                <li onClick={this.sortByAlphabet} id="sort-alphabet" className="is-active">
                  <a>Alphabetically
                    <i className="fa fa-sort-alpha-asc"></i>
                  </a>
                </li>
                <li onClick={this.sortByViews} id="sort-views" >
                  <a>Most Views
                    <i className="fa fa-sort-numeric-desc"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

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

export default Home;
