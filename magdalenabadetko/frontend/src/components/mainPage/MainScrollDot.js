import React from "react";
import "./MainPageStyle.css";

class MainScrollDot extends React.Component {
  render() {
    return (
      <div className="mainScrollBackgroundDot">
        <div
          className={
            this.props.activeClass === "active"
              ? "mainScrollDot active__set"
              : "mainScrollDot"
          }
        ></div>
      </div>
    );
  }
}

export default MainScrollDot;
