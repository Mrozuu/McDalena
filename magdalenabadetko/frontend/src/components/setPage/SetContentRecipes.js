import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";

class SetContentRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div className="setContentRecipes">
        <SetRecipe />
        <SetRecipe />
        <SetRecipe />
        <SetRecipe />
        <SetRecipe />
        <SetRecipe />
      </div>
    );
  }
}

export default SetContentRecipes;
