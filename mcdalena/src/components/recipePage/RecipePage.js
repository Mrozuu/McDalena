import React from "react";
import "./RecipePageStyle.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./recipeHeader";

class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="recipePage">
        <RecipeHeader title="Nazwa dania" />
        <RecipeIngredients />
        <div className="recipeLine" />
        <RecipeContent />
      </div>
    );
  }
}

export default RecipePage;
