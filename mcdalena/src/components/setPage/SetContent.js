import React from "react";
import "./SetPageStyle.css";
import SetTitle from "./SetTitle";
import SetContentRecipes from "./SetContentRecipes";
import SetContentDescription from "./SetContentDescription";
import LittleLogo from "./LittleLogo";

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
        <div className="setContentLines" />
        <SetContentDescription />
        <LittleLogo />
      </div>
    );
  }
}

export default SetContent;
