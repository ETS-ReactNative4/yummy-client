import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import Header from "./components/Header.js";
import Create from "./components/Create.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="App-body content">
          <Create />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
