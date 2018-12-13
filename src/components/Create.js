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
    this.scrapeForm = this.scrapeForm.bind(this);
  }

  scrapeForm() {
    const title = document.getElementById("input-title").value;
    const description = document.getElementById("textarea-description").innerHTML;
    const serves = document.getElementById("input-serves").value;
    const ingredients = document.getElementById("textarea-ingredients").innerHTML;

    const recipe = {
      title: title,
      author: "Ed Prince",
      description: description,
      ingredients: ingredients,
      serves: serves
    };

    Request.addRecipe(recipe).then(() => {
      alert("Added recipe");
    }).catch(err => {
      console.log("error: ",err);
      //window.location.href = "/login";
      console.error("Could not add recipe. Error: ", err);
    });
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
          className="textarea"
          placeholder="Step 1: Add step information here"
        />
        <button className="button is-info">Add Step</button>
        <hr />
        <div className="buttons">
          <button
            onClick={this.scrapeForm}
            id="btn-save-recipe"
            className="button is-success is-right"
          >
            Save Recipe
          </button>
          <button className="button is-danger">Publish Recipe</button>
        </div>
      </div>
    );
  }
}

export default Create;
