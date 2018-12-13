import React, { Component } from "react";
import * as Request from "../modules/request";
import RecipeCard from "./RecipeCard.js";
import ErrorMessage from "./ErrorMessage.js";
import "./DisplayRecipes.css";

class DisplayRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errors: [],
      sort: "alphabet"
    };
    this.options = ["title", "author", "description", "photo"];
  }

  componentDidMount(props) {
    if (this.props.favourite) {
      this.getAllFavourites();
    } else {
      this.getAllRecipes(this.state.sort);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.sort, prevState.sort);
    if (this.state.sort != prevState.sort) {
      if (this.props.favourite) {
        console.log(this.props.favourite);
        this.getAllFavourites(this.state.sort);
      } else {
        this.getAllRecipes(this.state.sort);
      }
    }
  }


  getAllRecipes = (order=null) => {
    const searchTerm = document.getElementById("search").value;
    Request.getAllRecipes(this.options, searchTerm, order).then(response => {
      this.setState({ recipes: response });
    }).catch(err => {
      this.setState({errors: {message: err.message}});
    });
  }

  getAllFavourites = (sort) => {
    Request.getAllFavourites(sort).then(response => {
      this.setState({recipes: response});
    }).catch(err => {
      this.setState({errors: [{message: "Could not fetch favourites"}] });
    });
  }

  searchRecipes = () => {
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

  toggle = (event) => {
    this.setState({sort: event.target.value});
  }

  sortByAlphabet = () => {
  //Set config options
    const order = "alphabet";
    this.getAllRecipes(order);
    const alphabetBtn = document.getElementById("sort-alphabet");
    const viewsBtn = document.getElementById("sort-views");
    alphabetBtn.classList.add("is-active");
    viewsBtn.classList.remove("is-active");
  }

  sortByViews = () => {
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
      <div>
        <div className="columns is-mobile">
          <div className="column is-6 is-mobile-6">
            <span className="has-text-weight-bold">
              {this.state.recipes.length} Results
            </span>
          </div>
          <div className="column is-6 is-mobile-6">
            <span className="is-pulled-right has-text-weight-bold">
              Sort by:
              <div className="select is-small is-primary">
                <select onChange={this.toggle} className="has-text-weight-bold">
                  <option value="alphabet">Alphabtical</option>
                  <option value="views">Most Views</option>
                </select>
              </div>
            </span>
          </div>
        </div>
        <div className="control">
          <input
            onChange={this.searchRecipes}
            className="input"
            type="text"
            id="search"
            placeholder="Search recipes..."
          />
        </div>

        <div className="columns is-multiline is-mobile">
          {this.state.recipes.map((recipe) =>
            <div className="column is-6-tablet is-4-desktop is-12-mobile" key={recipe._id.toString()}>
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

export default DisplayRecipes;
