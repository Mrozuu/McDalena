import React from "react";
import "./RecipePageStyle.css";
import "../setPage/SetPageStyle.css";

function RecipeHeader(props) {
  return (
    <div className="recipeHeader">
      <h1>{props.title}</h1>
      <div className="setIcons">
        <img src="https://img.icons8.com/pastel-glyph/48/000000/garlic--v1.png" />
        <img src="https://img.icons8.com/android/48/000000/cooking-pot.png" />
        <img src="https://img.icons8.com/doodle/48/000000/cooking-book.png" />
      </div>
    </div>
  );
}

export default RecipeHeader;
