import React from "react";
import "./MainPageStyle.css";
import MainContent from "./MainContent";
import MainPictures from "./MainPictures";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";

class MainSet extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainPictures backgroundImage={this.props.backgroundImage} />
        <MainContent
          backgroundColor={this.props.backgroundColor}
          buttonPath={this.props.buttonPath}
        />
      </div>
    );
  }
}

export default MainSet;
