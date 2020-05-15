import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";

class SetContentRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="setContentRecipes">
        <h2>Przepisy</h2>
        {this.props.setsData.listOfRecipes.map((item) => {
<<<<<<< HEAD
          //          this.props.recipesData[item - 1].listOfElements.map((item2) => {
          //         });
          return (
            <SetRecipe
              instructions={this.props.instructionsData}
              recipe={this.props.recipesData[item - 1]}
              key={this.props.recipesData[item - 1].id}
            />
          );
        })}
=======
          console.log(this.props.recipesData[item-1].listOfRecipes);
          return(
          <SetRecipe
            recipe={this.props.recipesData[item - 1]}
            key={this.props.recipesData[item - 1].id}
          />)
      })}
>>>>>>> parent of b43a0c4... MJ #56
      </div>
    );
  }
}

export default SetContentRecipes;
