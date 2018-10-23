import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}

export default App;
