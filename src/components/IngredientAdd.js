import React, { Component } from "react";
import "./IngredientAdd.css";

class IngredientAdd extends Component {
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-two-fifths-mobile">
          <input
            className="input"
            type="text"
            name="ingredient"
            placeholder="Add ingredient"
            defaultValue={this.props.value}
          />
        </div>
        <div className="column is-one-fifth-mobile">
          <input
            className="input"
            defaultValue={this.props.qty}
            type="string"
            name="qty"
            placeholder="Qty"
          />
        </div>
        <div className="column is-two-fith-mobile">
          <button className="button is-danger is-outlined">
            Remove<i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
    );
  }
}

export default IngredientAdd;
