import React, { Component } from "react";
import IngredientAdd from "./IngredientAdd.js";
import "./Create.css";

class Create extends Component {
  render() {
    return (
      <div>
        <h2>Create New Recipe</h2>
        <div className="tags has-addons">
          <span className="tag">Published</span>
          <span className="tag is-danger">No</span>
        </div>
        <h3>Introduction</h3>
        <hr />
        <div className="columns is-mobile">
          <div className="column is-three-fifths-mobile">
            <input
              className="input"
              type="text"
              name="recipe-title"
              placeholder="Title"
            />
          </div>
          <div className="column is-two-fifths-mobile">
            <button className="button is-info">Add Photo</button>
          </div>
        </div>
        <textarea className="textarea" placeholder="Description" />
        <h3>Ingredients</h3>
        <hr />
        <div className="columns">
          <div id="ingredients-list" className="column">
            <IngredientAdd />
            <button className="button is-info">Add Ingredient</button>
          </div>
        </div>
        <h3>Method</h3>
        <hr />
        <textarea
          className="textarea"
          placeholder="Step 1: Add step information here"
        />
        <button className="button is-info">Add Step</button>
        <hr />
        <button className="button is-success">Save Recipe</button>
      </div>
    );
  }
}

export default Create;
