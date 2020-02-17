import React, { Component, useEffect } from "react";
import "./App.css";
import RecipesPage from "./components/RecipesPage";
import RecipePage from "./components/RecipePage";
import { Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:8000/api/recipes")
      .then(res =>
        this.setState({
          ...this.state,
          recipes: res.data
        })
      )
      .catch(err => console.log(err));
    console.log("TEST");
  }

  render() {
    return (
      <div className="App">
        <nav>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/recipes">Home: Recipes</NavLink>
          {/* <NavLink to="/shoppingList">Shopping List</NavLink> */}
        </nav>
        <Switch>
          <Route path="/recipes/:id" component={RecipePage} />
          <Route path="/recipes">
            <RecipesPage recipes={this.state.recipes} />
          </Route>
        </Switch>
      </div>
    );
  }
}
