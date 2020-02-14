import React, { Component } from "react";
import axios from "axios";

export default class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      ingredients: "",
      steps: ""
    };
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:8000/api/recipes/${id}`)
      .then(
        res => console.log(res.data)
        // this.setState({
        //   ...this.state,
        //   id: res.data.id,
        //   name: res.data.name
        // })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="recipe">
        <p>
          {this.state.id} {this.state.name}
        </p>
      </div>
    );
  }
}
