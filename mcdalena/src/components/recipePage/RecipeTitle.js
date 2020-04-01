import React from "react";
import "./RecipePageStyle.css";

function RecipeTitle(props) {
  return (
    <div className="recipeTitle">
      <h2>{props.name}</h2>
    </div>
  );
}

export default RecipeTitle;
