import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
import "../data/RecipeData";

class RecipeContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="recipeContent">
        <div className="icon-cancel iconIconCancel" />
        <RecipeTitle name={"Sposób przygotowania"} />
      </div>
    );
  }
}

export default RecipeContent;
