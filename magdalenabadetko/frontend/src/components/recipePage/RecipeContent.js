import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
import "../data/RecipeData";
import arrow from "../../img/arrow.svg";
class RecipeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, scrollHeight: 0 };

    this.keyContent = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.keyContent++;
  }

  // funkcje ściągające wysokość diva i wysokość scrolla
  resizeHandler() {
    const height = this.divElement.clientHeight;
    const scrollHeight = this.divElement.scrollHeight;
    this.setState({ height, scrollHeight });
  }

  componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  render() {
    var { scrollHeight, height } = this.state;
    return (
      <div className="recipeContent">
        <RecipeTitle name={"Sposób przygotowania"} />
        <div
          className="recipeList"
          ref={(divElement) => {
            this.divElement = divElement;
          }}
        >
          {this.props.listOfElements.map((item) => {
            return this.props.instructions[item - 1].name === "null" ? (
              <p>{this.props.instructions[item - 1].preparation}</p>
            ) : (
              <div>
                <h2>{this.props.instructions[item - 1].name}</h2>
                <p>{this.props.instructions[item - 1].preparation}</p>
              </div>
            );
          })}
        </div>
        <img
          src={arrow}
          className={scrollHeight > height ? "arrowVisible" : "arrowNot"}
        />
      </div>
    );
  }
}

export default RecipeContent;
