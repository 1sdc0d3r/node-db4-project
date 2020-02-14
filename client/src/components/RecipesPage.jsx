import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecipesPage(props) {
  return (
    <div className="recipes-list">
      {props.recipes.map(recipe => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <h2>{recipe.name}</h2>
        </Link>
      ))}
    </div>
  );
}
