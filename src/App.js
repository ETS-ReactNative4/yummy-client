import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import * as Routes from "./Routes.js";
import Create from "./components/Create.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import MyRecipes from "./components/MyRecipes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="App-body content">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/create" component={Create} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/my-recipes/" component={MyRecipes} />
              <Route path="/profile" component={Profile} />
              <Route path="/recipe/:id" component={Routes.RecipeRoute} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
