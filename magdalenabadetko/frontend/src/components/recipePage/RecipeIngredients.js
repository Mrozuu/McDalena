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

  getKey(){
    return this.keyIngredients++;
  }

  render() {
    return (
      <div className="recipeIngredients">
        <RecipeTitle name={"Składniki"} />

        <div className="recipeList">
          <ul>
            {this.props.ingredients.map(item => (
              <li key={this.getKey()}>{item}</li>  
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
