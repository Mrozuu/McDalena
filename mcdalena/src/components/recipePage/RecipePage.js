import React from "react";
import "./RecipePageStyle.css";
import RecipePicture from "./RecipePicture";
import RecipeContent from "./RecipeContent";
import MainLogo from "../mainPage/MainLogo";

class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="recipePage">
          <RecipePicture />
          <RecipeContent />
          <MainLogo />
      </div>
    );
  }
}

export default RecipePage;
