import React from "react";
import "./MainPageStyle.css";

class MainScrollDot extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainScrollBackgroundDot">
        <div className="mainScrollDot"></div>
      </div>
    );
  }
}

export default MainScrollDot;
