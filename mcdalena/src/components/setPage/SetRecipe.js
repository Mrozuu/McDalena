import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import "./SetPageStyle.css";
import RecipePage from "../recipePage/RecipePage";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "70%",
  height: "80%",
  border: "0"
};

class SetRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Popup
        contentStyle={contentStyle}
        overlayStyle={{ background: "rgba(255,255,255,0.1" }}
        modal
        trigger={
          <button style={{ cursor: "pointer" }} className="setRecipe">
            <div className="setRecipePicture" />
            <div className="setRecipeTitle">Nazwa przepisu</div>
          </button>
        }
      >
        {close => <RecipePage close={close} />}
      </Popup>
    );
  }
}
export default SetRecipe;
