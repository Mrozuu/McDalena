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
      <NavLink to={"/MainSet1"}>
        <div className="icon-cancel iconReturn"></div>
      </NavLink>
    );
  }
}

export default SetReturn;
