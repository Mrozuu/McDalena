import React from "react";
import "./MainPageStyle.css";
import MainContentButton from "./MainContentButton";

class MainContent extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="mainContent"
        style={{ backgroundColor: this.props.color }}
      >
        <MainContentButton buttonPath={this.props.buttonPath} />
      </div>
    );
  }
}

export default MainContent;
