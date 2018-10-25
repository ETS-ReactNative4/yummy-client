import React, { Component } from "react";
import "./IngredientList.css";
import IngredientAdd from "./IngredientAdd.js";

class IngredientList extends Component {
  state: {
    ingredients: []
  };
  render() {
    return (
      <div className="ingredients-list">
        <textarea
          className="textarea"
          id="ingredients-csv"
          placeholder="2 Onions, 300ml Stock, ..."
        />
      </div>
    );
  }

  addNewIngredient = () => {
    let { ingredients } = this.state;
    let newIngredient = { name: "", qty: 0 };
    this.setState({
      ingredients: [...ingredients, newIngredient]
    });
  };
}

export default IngredientList;
