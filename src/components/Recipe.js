import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  render() {
    let ingredients =
      "2 Onions, 2 Cloves Garlic, 1 Inch Ginger,2 Chicken Breasts,200ml Stock";
    ingredients = ingredients.split(",");

    return (
      <div className="App-body field">
        <h2>Chicken Pie</h2>
        <p>Author</p>
        <figure className="image is-256x256">
          <img src="https://gbc-cdn-public-media.azureedge.net/img26158.768x512.jpg" />
        </figure>

        <h3>Ingredients</h3>
        <ul>
          {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <hr />
        <h3>Method</h3>
        <hr />
        <h4>Step 1</h4>
        <p>
          Finely chop the onions and put into a hot frying pan with a drizzle of olive oil.
        </p>

        <h4>Step 2</h4>
        <p>
          Finely chop the onions and put into a hot frying pan with a drizzle of olive oil.
          Chop the onions and put into a hot frying pan with a drizzle of olive oil.
        </p>

      </div>
    );
  }
}

export default Recipe;
