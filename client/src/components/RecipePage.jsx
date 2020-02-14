import React, { Component } from "react";
import axios from "axios";

export default class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      ingredients: [],
      steps: []
    };
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:8000/api/recipes/${id}`)
      .then(res =>
        this.setState({
          ...this.state,
          id: res.data.id,
          name: res.data.name,
          steps: res.data.steps,
          ingredients: res.data.ingredients
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="recipe">
        <h2>
          {this.state.id}. {this.state.name}
        </h2>
        <div className="Ingredients">
          {this.state.ingredients.map(i => (
            <p>
              {i.name} - {i.Quantity}
            </p>
          ))}
        </div>
        <div className="directions">
          <h3>Directions: </h3>
          {this.state.steps.map(step => (
            <p>
              {step.StepNumber}: {step.Description}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
