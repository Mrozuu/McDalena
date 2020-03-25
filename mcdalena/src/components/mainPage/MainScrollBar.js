import React from "react";
import "./MainPageStyle.css";
import MainScrollDot from "./MainScrollDot";

class MainScrollBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainScrollBar">
        <MainScrollDot />
        <MainScrollDot />
        <MainScrollDot />
        <MainScrollDot />
        <MainScrollDot />
        <MainScrollDot />
        <MainScrollDot />
      </div>
    );
  }
}

export default MainScrollBar;
