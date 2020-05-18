import React from "react";
import "./RecipePageStyle.css";
import RecipeTitle from "./RecipeTitle";
import arrow from "../../img/arrow.svg";
class RecipeIngredients extends React.Component {
  constructor() {
    super();
    this.state = { height: 0, scrollHeight: 0 };

    this.keyIngredients = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.keyIngredients++;
  }

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
      <div className="recipeIngredients">
        <RecipeTitle name={"Składniki"} />
        <div
          className="recipeList"
          ref={(divElement) => {
            this.divElement = divElement;
          }}
        >
          {this.props.listOfElements.map((item) => {
            return this.props.instructions[item - 1].name === "null" ? (
              <div>
                <ul>
                  {this.props.instructions[item - 1].ingredients.map(
                    (item2) => {
                      return <li>{item2}</li>;
                    }
                  )}
                </ul>
              </div>
            ) : (
              <div>
                <h2>{this.props.instructions[item - 1].name}</h2>
                <ul>
                  {this.props.instructions[item - 1].ingredients.map(
                    (item2) => {
                      return <li>{item2}</li>;
                    }
                  )}
                </ul>
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

export default RecipeIngredients;
