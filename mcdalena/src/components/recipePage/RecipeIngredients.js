import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
class RecipeIngredients extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="recipeIngredients">
        <RecipeTitle name={"Składniki"} />
        <div className="recipeList">
          <ul>
            <li>Raz</li>
            <li>Dwa</li>
            <li>Raz</li>
            <li>Dwa</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
