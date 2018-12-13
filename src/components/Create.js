import React, { Component } from "react";
//import IngredientAdd from "./IngredientAdd.js";
import IngredientList from "./IngredientList.js";
import * as Request from "../modules/request.js";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null
    };
  }

  save = () => {
    const recipe = this.scrapeForm();
    recipe.published = "false";
    this.sendRequest(recipe);
  }

  publish = () => {
    const recipe = this.srapeForm();
    recipe.published = "true";
    this.sendRequest(recipe);
  }

  sendRequest = (recipe) => {
    Request.addRecipe(recipe).then(() => {
      alert("Added recipe");
    }).catch(err => {
      console.error("Could not add recipe. Error: ", err);
    });
  }

  scrapeForm = () => {
    const title = document.getElementById("input-title").value;
    const description = document.getElementById("textarea-description").value;
    const method = document.getElementById("textarea-method").value;
    const serves = document.getElementById("input-serves").value;
    const prep = document.getElementById("input-prep").value;
    const cook = document.getElementById("input-cook").value;
    const ingredients = document.getElementById("textarea-ingredients").value;

    const recipe = {
      title: title,
      description: description,
      ingredients: ingredients,
      serves: serves,
      method: method,
      prep: prep,
      cook: cook
    };

    return recipe;
  }

  render() {
    return (
      <div className="narrow">
        <h2>Create New Recipe</h2>
        <h3>Introduction</h3>
        <hr />
        <div className="columns is-mobile">
          <div className="column">
            <input
              className="input"
              type="text"
              name="recipe-title"
              placeholder="Title"
              id="input-title"
              required="required"
            />
            <input
              className="input"
              type="text"
              name="recipe-photo"
              placeholder="Image URL"
              id="input-photo"
            />
            <input
              className="input"
              type="number"
              name="servings"
              placeholder="Servings"
              id="input-serves"
            />
          </div>
        </div>


        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input id="input-prep" className="input" type="text" placeholder="Prep time" />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input id="input-cook" className="input" type="email" placeholder="Cook time" />
              </p>
            </div>
          </div>
        </div>

        <textarea
          className="textarea"
          placeholder="Description"
          id="textarea-description"
        />
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
          id="textarea-method"
          className="textarea"
          placeholder="Step 1: Add step information here"
        />
        <hr />
        <div className="buttons">
          <button
            onClick={this.save}
            id="btn-save-recipe"
            className="button is-success is-right"
          >
            Save Recipe
          </button>
          <button onClick={this.publish} className="button is-danger">Publish Recipe</button>
        </div>
      </div>
    );
  }
}

export default Create;
