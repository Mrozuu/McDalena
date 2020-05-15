import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
import "../data/RecipeData";

class RecipeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.keyContent = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.keyContent++;
  }

  render() {
    return (
      <div className="recipeContent">
        <RecipeTitle name={"Sposób przygotowania"} />
        <div className="recipeList">
          {this.props.listOfElements.map((item) => {
            return this.props.instructions[item - 1].name === "null" ? (
              <div>{this.props.instructions[item - 1].preparation}</div>
            ) : (
              <div>
                <h2>{this.props.instructions[item - 1].name}</h2>
                <div>{this.props.instructions[item - 1].preparation}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecipeContent;
