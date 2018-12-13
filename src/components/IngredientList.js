import React, { Component } from "react";
import "./IngredientList.css";
//import IngredientAdd from "./IngredientAdd.js";

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
  }
  render() {
    return (
      <div className="ingredients-list">
        <textarea
          className="textarea"
          id="textarea-ingredients"
          placeholder="2 Onions, 300ml Stock, ..."
        />
      </div>
    );
  }

  addNewIngredient() {
    const { ingredients } = this.state;
    const newIngredient = { name: "", qty: 0 };
    this.setState({
      ingredients: [...ingredients, newIngredient]
    });
  };
}

export default IngredientList;
