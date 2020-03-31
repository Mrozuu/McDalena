import React from "react";
import "./SetPageStyle.css";

const styles = {
  transition: "opacity 0.5s ease-out"
};

class SetRecipe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setRecipe">
        <div className="setRecipePicture" />
        <div className="setRecipeTitle">Nazwa przepisu</div>
      </div>
    );
  }
}

export default SetRecipe;
