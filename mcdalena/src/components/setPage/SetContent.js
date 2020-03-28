import React from "react";
import "./SetPageStyle.css";
import SetTitle from "./SetTitle"
import SetContentRecipes from "./SetContentRecipes";
import SetContentDescription from "./SetContentDescription";

class SetContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setContent">
          <SetTitle />
          <SetContentRecipes />
          <SetContentDescription />
      </div>
    );
  }
}

export default SetContent;
