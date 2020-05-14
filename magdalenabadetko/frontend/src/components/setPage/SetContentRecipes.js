import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";

class SetContentRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        instructions: [],
    };

  }
  render() {
    return (
      <div className="setContentRecipes">
        <h2>Przepisy</h2>
        {this.props.setsData.listOfRecipes.map((item) => {
          console.log(this.props.recipesData[item-1].listOfRecipes);
          return(
          <SetRecipe
            recipe={this.props.recipesData[item - 1]}
            key={this.props.recipesData[item - 1].id}
          />)
      })}
      </div>
    );
  }
}

export default SetContentRecipes;
