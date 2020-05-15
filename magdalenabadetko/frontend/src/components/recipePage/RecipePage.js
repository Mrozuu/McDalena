import React from "react";
import "./RecipePageStyle.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeContent from "./RecipeContent";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="recipePageShadow"></div>
        <div className="recipePage">
          <div
            className="close icon-cancel iconIconCancel"
            onClick={this.props.closePopup}
          ></div>
          <div className="recipeHeader">
            <h1>{this.props.recipe.title}</h1>
          </div>
          <RecipeIngredients
            instructions={this.props.instructions}
            listOfElements={this.props.recipe.listOfElements}
          />
          <div className="recipeLine" />
          <RecipeContent
            instructions={this.props.instructions}
            listOfElements={this.props.recipe.listOfElements}
          />
        </div>
      </div>
    );
  }
}

export default RecipePage;
