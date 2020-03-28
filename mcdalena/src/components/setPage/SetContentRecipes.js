import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";

class SetContentRecipes extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="setContentRecipes">
          <SetRecipe />
          <SetRecipe />
          <SetRecipe />
          <SetRecipe />
        </div>
    )
  }
}

export default SetContentRecipes;
