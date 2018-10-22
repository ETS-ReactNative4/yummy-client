import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-header-link" href="/">Yummy</a>
        </header>
        <div className="App-body">
          <h2>Create New Recipe</h2>
          <input type="text" name="recipe-title" placeholder="Title" />
        </div>
      </div>
    );
  }
}

export default Create;
