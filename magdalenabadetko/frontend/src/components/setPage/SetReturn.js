import React from "react";
import "./SetPageStyle.css";
import { NavLink } from "react-router-dom";

class SetReturn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavLink to={this.props.return}>
        <div className="returnButton">
          <div className="button" />
        </div>
      </NavLink>
    );
  }
}

export default SetReturn;
