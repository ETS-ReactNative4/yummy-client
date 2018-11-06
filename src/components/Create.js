import React, { Component } from "react";
//import IngredientAdd from "./IngredientAdd.js";
import IngredientList from "./IngredientList.js";
import * as Request from "../modules/request.js";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null
    };
    this.scrapeForm = this.scrapeForm.bind(this);
  }
  
  scrapeForm() {
    console.log("Validating");
    let title = document.getElementById("input-title");
    let description = document.getElementById("textarea-description");
    let serves = document.getElementById("input-serves");
    let ingredients = document.getElementById("input-ingredients");

    let recipe = {
      title: title,
      author: "Ed Prince",
      description: description,
      ingredients: ingredients,
      serves: serves
    }

    let id = "5bd231ea2373340fd9540bb5";

    Request.getRecipe(id).then((response) => {
      console.log(response);
    }, (err) => {
      console.error(err.message);
    });
  }
 
  render() {
    return (
      <div>
        <h2>Create New Recipe</h2>
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
              required="required"
            />
            <input
              className="input"
              type="number"
              name="servings"
              placeholder="Servings"
              id="input-serves"
            />
          </div>
          <div className="column is-two-fifths-mobile">
            <button className="button is-info">Add Photo</button>
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
