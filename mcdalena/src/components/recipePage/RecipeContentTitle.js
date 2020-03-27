import React from "react";
import "./RecipePageStyle.css";

class RecipeContentTitle extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="recipeContentTitle">
        <h2>Nazwa przepisu</h2>
      </div>
    );
  }
}

export default RecipeContentTitle;
