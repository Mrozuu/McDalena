import React from "react";
import "./RecipePageStyle.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./recipeHeader";



class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props.showRecipe)
  }

  handleClick() {
    this.setState(state => ({
      visible: !state.visible
    }));
    console.log(this.state.visible)
  }

  render() {
    let className = '';
    if (this.state.visible === true) {
      className += 'recipePageVisible';
    }
    if (this.state.visible === false) {
      className += 'recipePageNonVisible';
    }
    console.log(className)
    return (
      <div className={className}>
        <div className="recipePageShadow"></div>
        <div className="recipePage">
          <div className="close icon-cancel iconIconCancel" onClick={this.handleClick}></div>
          <RecipeHeader title="Nazwa dania" />
          <RecipeIngredients />
          <div className="recipeLine" />
          <RecipeContent />
        </div>
      </div>
    );
  }
}

export default RecipePage;

//export default ({ close }) => (
//  <div className="modal">
//      <a className="close icon-cancel iconIconCancel" onClick={close}>
