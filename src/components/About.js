import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="App-body narrow">
        <h1>About Yummy</h1>
        <p>
          Yummy is a recipe app that allows you to browse
          and create recipes. You can log in, follow your
          favourite writers, and get notified when they
          post new recipes.
        </p>

        <p>
          Yummy was created by Ed Prince as part of a
          Web Api Module at Coventry University.
        </p>
      </div>
    );
  }
}

export default About;
