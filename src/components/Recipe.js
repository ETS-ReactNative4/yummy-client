import React, { Component } from "react";
import * as Request from "../modules/request";
import Comment from "./Comment.js";
import CommentInput from "./CommentInput.js";
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

    let id = this.props.id;

    Request.getRecipe(id, data => {
      this.setState(data[0]);
    });
  }

  render() {
    return (
      <div className="App-body field">
        <div className="columns">
          <div className="column is-full">
            <h1 className="is-centered">{this.state.title}</h1>
            <p className="is-centered">
              by
              {" "}
              {this.state.author ? this.state.author : "Anonymous"}
              {" "}
            </p>
            <hr />
            <p>{this.state.description}</p>
            <figure className="image is-256x256">
              <img className="img-banner" src={this.state.photo} />
            </figure>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
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
            <h2>Ingredients</h2>
            <ul>
              {this.state.ingredients.map(ingredient => (
                <li key={ingredient.name.toString()}>
                  <b>{ingredient.qty}</b> {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <hr />
          <h2>Method</h2>
          {this.state.method.map((step, index) => (
            <div>
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
              <br />
            </div>
          ))}
          <hr />
          <h2>Comments</h2>
          {this.state.comments != null &&
            this.state.comments.map(comment => (
              <Comment
                key={comment.body}
                author={comment.author}
                body={comment.body}
              />
            ))}
          <CommentInput id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Recipe;
