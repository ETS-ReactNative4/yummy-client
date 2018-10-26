import React, { Component } from "react";
import * as Request from "../modules/request";
import "./Recipe.css";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      method: [],
      title: "",
      photo: "",
      author: ""
    };

    Request.getAllRecipes(data => {
      this.setState(data[1]);
    });

    /*
    Request.getRecipe(data => {
      this.setState(data[0]);
    });
    */
  }

  render() {
    return (
      <div className="App-body field">
        <div className="columns">
          <div className="column">
            <figure className="image is-256x256">
              <img className="img-banner" src={this.state.photo} />
            </figure>
          </div>
          <div className="column">
            <h2>{this.state.title}</h2>
            <p>by {this.state.author ? this.state.author : "Anonymous"}</p>
            <table className="table is-bordered">
              <thead>
                <tr>
                  <th>Serves</th>
                  <th>Prep time</th>
                  <th>Cooking time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {this.state.serving}
                  </td>
                  <td>
                    {this.state["prep-time"]}
                    {" "}
                    {this.state["prep-time-unit"]}
                  </td>
                  <td>
                    {this.state["cook-time"]}
                    {" "}
                    {this.state["cook-time-unit"]}
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Ingredients</h3>
            <ul>
              {this.state.ingredients.map(ingredient => (
                <li><b>{ingredient.qty}</b> {ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <h3>Method</h3>
        <ol>
          {this.state.method.map(step => <li>{step}</li>)}
        </ol>
      </div>
    );
  }
}

export default Recipe;
