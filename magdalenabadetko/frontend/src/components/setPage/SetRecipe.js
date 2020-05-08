import React from "react";
import "./SetPageStyle.css";
import RecipePage from "../recipePage/RecipePage";

class SetRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipe: false,
    };
  }

  RecipePopup() {
    this.setState({
      showRecipe: !this.state.showRecipe,
    });
  }

  render() {
    console.log(this.props.recipe);
    let className = "";
    if (this.props.recipe.types === "przystawka") {
      className += "setRecipePicture1";
    }
    if (this.props.recipe.types === "danieGlowne") {
      className += "setRecipePicture2";
    }
    if (this.props.recipe.types === "deser") {
      className += "setRecipePicture3";
    }
    className += " setRecipePicture";
    return (
      <div className="setRecipe" onClick={this.RecipePopup.bind(this)}>
        <div className={className}></div>
        <div className="setRecipeTitle">{this.props.recipe.title}</div>
        {this.state.showRecipe ? (
          <RecipePage
            recipe={this.props.recipe}
            closePopup={this.RecipePopup.bind(this)}
          />
        ) : null}
      </div>
      //         <RecipePage recipe={this.props.recipe} />
      // <Popup
      //   contentStyle={contentStyle}
      //   overlayStyle={
      //     ({ background: "rgba(255,255,255,0.1" }, { zIndex: "11" })
      //   }
      //   modal
      //   trigger={
      //     <button style={{ cursor: "pointer" }} className="setRecipe">
      //       <div className={className} />
      //   <div className="setRecipeTitle">{this.props.recipe.title}</div>
      //     </button>
      //   }
      // >
      //   {(close) => <RecipePage close={close} />}
      // </Popup>
    );
  }
}
export default SetRecipe;
