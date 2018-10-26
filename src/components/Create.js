import React, { Component } from "react";
import IngredientAdd from "./IngredientAdd.js";
import IngredientList from "./IngredientList.js";
import "./Create.css";

class Create extends Component {
  state: {
    err: null
  };
  render() {
    return (
      <div>
        <h2>Create New Recipe</h2>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Saved</span>
              <span className="tag is-success">Yes</span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Published</span>
              <span className="tag is-danger">No</span>
            </div>
          </div>
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
              id="input-title"
            />
            <input
              className="input"
              type="number"
              name="servings"
              placeholder="Servings"
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
          <div className="column">
            <IngredientList />
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
        <div className="buttons">
          <button id="btn-save-recipe" className="button is-success is-right">
            Save Recipe
          </button>
          <button className="button is-danger">Publish Recipe</button>
        </div>
      </div>
    );

    let btn = document.getElementById("btn-save-recipe");
    btn.addEventListener("click", () => {
      validateForm();
    });
  }
}

function validateForm() {
  let title = document.getElementById("input-title").value;
  let err = "";
  if (!title) {
    Create.setState("err", "Please provide a valid title");
    return;
  }
}

export default Create;
