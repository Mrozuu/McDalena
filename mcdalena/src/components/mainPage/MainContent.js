import React from "react";
import "./MainPageStyle.css";
import MainContentButton from "./MainContentButton";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainContent">
        <MainContentButton />
      </div>
    );
  }
}

export default MainContent;
