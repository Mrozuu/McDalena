import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";

class SetContentRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <div className="setContentRecipes">
          {this.props.setsData.listOfRecipes.map( item => (
            <SetRecipe recipe={this.props.recipesData[item-1]} key={this.props.recipesData[item-1].id} />
          ))}        

      </div>
    );
  }
}

export default SetContentRecipes;
