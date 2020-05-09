import React from "react";
import "./SetPageStyle.css";
import { NavLink } from "react-router-dom";

class SetReturn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "returnButton",
    };
  }

  render() {
    return (
      <NavLink to={this.props.return}>
        <div className={this.state.name}>
          <div className="button" />
        </div>
      </NavLink>
    );
  }
}

export default SetReturn;
