import React from "react";
import "./MainPageStyle.css";
import MainScrollDot from "./MainScrollDot";
import { NavLink } from "react-router-dom";

class MainScrollBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainScrollBar">
        <NavLink to="/MainSet1">
          <MainScrollDot id="1" />
        </NavLink>
        <NavLink to="/MainSet2">
          <MainScrollDot id="2" />
        </NavLink>
        <NavLink to="/MainSet3">
          <MainScrollDot id="3" />
        </NavLink>
        <NavLink to="/MainSet4">
          <MainScrollDot id="4" />
        </NavLink>
      </div>
    );
  }
}

export default MainScrollBar;
