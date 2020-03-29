import React from "react";
import "./SetPageStyle.css";

const styles = {
  transition: "opacity 0.5s ease-out"
};

class SetRecipe extends React.Component {
  constructor() {
    super();
    this.state = { opacity: 0, backgroundColor: "black", animationDelay: "2s" };
    this.onHover = () => {
      this.setState({
        opacity: 0.8
      });
    };

    this.onNotHover = () => {
      this.setState({
        opacity: 0
      });
    };
  }

  render() {
    return (
      <div className="setRecipe">
        <a href="www.google.com">
          <div
            className="setRecipeHover"
            onMouseOver={this.onHover}
            onMouseLeave={this.onNotHover}
            style={{ ...styles, opacity: this.state.opacity }}
          >
            <h2>zobacz przepis</h2>
          </div>
        </a>
        <div className="setRecipePicture" />
        <div className="setRecipeTitle">Nazwa przepisu</div>
      </div>
    );
  }
}

export default SetRecipe;
