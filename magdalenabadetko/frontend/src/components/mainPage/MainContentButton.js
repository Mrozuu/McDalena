import React from "react";
import "./MainPageStyle.css";
import { NavLink } from "react-router-dom";

class MainContentButton extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <NavLink to={this.props.buttonPath}>
        <div className="mainContentButton">
          <h2>Zobacz więcej</h2>
        </div>
      </NavLink>
    );
  }
}

export default MainContentButton;
