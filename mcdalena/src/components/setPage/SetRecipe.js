import React from "react";
import "./SetPageStyle.css";

const styles = {
  transition: "opacity 0.5s ease-out"
};

class SetRecipe extends React.Component {
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
      <button className="setRecipe">
        <div className="setRecipePicture" />
        <div className="setRecipeTitle">Nazwa przepisu</div>
      </button>
    );
  }
}
export default SetRecipe;
