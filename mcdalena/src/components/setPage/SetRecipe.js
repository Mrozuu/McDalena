import React from "react";
import "./SetPageStyle.css";

class SetRecipe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (

            <div className="setRecipe">
                <div className="setRecipePicture"></div>
                <div className="setRecipeTitle">Nazwa przepisu</div>
            </div>


    )
  }
}

export default SetRecipe;
