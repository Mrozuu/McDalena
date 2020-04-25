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
          {this.props.setsData.listOfRecipes.map( item => (
            <SetRecipe recipe={this.props.recipesData[item-1]}/>
          ))}        

      </div>
    );
  }
}

export default SetContentRecipes;
