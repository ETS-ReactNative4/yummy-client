import React from "react";
import Recipe from "./components/Recipe.js";

export function RecipeRoute({ match }) {
  let { id } = match.params;

  return <Recipe id={id} />;
}
