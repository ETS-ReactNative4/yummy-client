import React, { Component } from "react";
import * as Request from "../modules/request";
import DisplayRecipes from "./DisplayRecipes.js";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-body narrow">
        <h1>All Recipes</h1>
        <DisplayRecipes favourite={false}/>
      </div>
    );
  }
}

export default Home;
