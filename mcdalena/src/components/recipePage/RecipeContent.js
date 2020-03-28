import React from "react";
import "./RecipePageStyle.css";
import RecipeContentTitle from "./RecipeContentTitle";
import "../data/RecipeData"

class RecipeContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  
  }
 


  render() {
    return <div className="recipeContent">
      <RecipeContentTitle />

  
    </div>;
  }
}

export default RecipeContent;
