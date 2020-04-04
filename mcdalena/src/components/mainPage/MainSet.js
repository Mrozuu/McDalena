import React from "react";
import "./MainPageStyle.css";
import MainContent from "./MainContent";
import MainPictures from "./MainPictures";

class MainSet extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainPictures />
        <MainContent
          color={this.props.color}
          buttonPath={this.props.buttonPath}
        />
      </div>
    );
  }
}

export default MainSet;
