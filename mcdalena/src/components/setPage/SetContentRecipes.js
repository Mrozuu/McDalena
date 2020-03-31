import React from "react";
import "./SetPageStyle.css";
import SetRecipe from "./SetRecipe";
import Modal from "react-awesome-modal";

class SetContentRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className="setContentRecipes">
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
