import React from "react";
import "./RecipePageStyle.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeContent from "./RecipeContent";

class RecipePage extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() { 
    return (
      <div>
        <div className="recipePageShadow"></div>
        <div className="recipePage">
          <div className="close icon-cancel iconIconCancel" onClick={this.props.closePopup}></div>
          <div className="recipeHeader">
            <h1>{this.props.recipe.title}</h1>
            <div className="setIcons">
              <img src="https://img.icons8.com/pastel-glyph/48/000000/garlic--v1.png" alt=""/>
              <img src="https://img.icons8.com/android/48/000000/cooking-pot.png" alt=""/>
              <img src="https://img.icons8.com/doodle/48/000000/cooking-book.png" alt=""/>
            </div>
          </div>
          <RecipeIngredients ingredients={this.props.recipe.ingredients}/>
          <div className="recipeLine" />
          <RecipeContent preparation={this.props.recipe.preparation}/>
        </div>
      </div>
    )
  }
}

export default RecipePage;

//export default ({ close }) => (
//  <div className="modal">
//      <a className="close icon-cancel iconIconCancel" onClick={close}>
