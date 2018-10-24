import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  render() {
    return (
      <div className="App-body field">
        <h2>Recipe</h2>
        <p>Author</p>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>

        <h3>Ingredients</h3>
        <hr />
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Onions</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Garlic</td>
              <td>2 Cloves</td>
            </tr>
            <tr>
              <td>Chicken Breasts</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
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
