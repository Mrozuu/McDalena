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
        <RecipeTitle name={"Sposób przygotowania"} />
        <div className="recipeList">
          <ol>
            {this.props.preparation.map(item =>(
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default RecipeContent;
