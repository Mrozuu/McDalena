import React from "react";
import "./MainPageStyle.css";
import MainScrollDot from "./MainScrollDot";
import { Link, NavLink } from "react-router-dom";

class MainScrollBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isButtonClicked: true,
    };

    this.ClickEvent = () => {
      this.setState({ isButtonClicked: true });
      setTimeout(() => this.setState({ isButtonClicked: false }), 1000);
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ isButtonClicked: false }), 1000);
  }

  render() {
    let className = "mainScrollBar";
    if (this.state.isButtonClicked) className += " mainScrollBarClicked";
    return (
      <div onClick={this.ClickEvent} className={className}>
        <Link to="/MainSet1">
          <MainScrollDot id="1" />
        </Link>
        <NavLink to="/MainSet2">
          <MainScrollDot id="2" />
        </NavLink>
        <NavLink to="/MainSet3">
          <MainScrollDot id="3" />
        </NavLink>
        <NavLink to="/MainSet4">
          <MainScrollDot id="4" />
        </NavLink>
        <NavLink to="/MainSet5">
          <MainScrollDot id="5" />
        </NavLink>
      </div>
    );
  }
}

export default MainScrollBar;
