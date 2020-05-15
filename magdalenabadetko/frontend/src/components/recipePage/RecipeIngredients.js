import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
class RecipeIngredients extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.keyIngredients = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.keyIngredients++;
  }

  render() {
    return (
      <div className="recipeIngredients">
        <RecipeTitle name={"Składniki"} />
        <div className="recipeList">
          {this.props.listOfElements.map((item) => {
            return this.props.instructions[item - 1].name === "null" ? (
              <div>
                <ul>
                  {this.props.instructions[item - 1].ingredients.map(
                    (item2) => {
                      return <li>{item2}</li>;
                    }
                  )}
                </ul>
              </div>
            ) : (
              <div>
                <h2>{this.props.instructions[item - 1].name}</h2>
                <ul>
                  {this.props.instructions[item - 1].ingredients.map(
                    (item2) => {
                      return <li>{item2}</li>;
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
