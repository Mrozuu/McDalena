import React from "react";
import "./MainPageStyle.css";
import MainContent from "./MainContent";
import MainPictures from "./MainPictures";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";

class MainSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainPictures backgroundImage={this.props.setsData.backgroundImage} />
        <MainContent
          backgroundColor={this.props.setsData.backgroundColor}
          buttonPath={this.props.setsData.buttonPath}
          title={this.props.setsData.title}
          setsData={this.props.setsData.setsData}
        />
      </div>
    );
  }
}

export default MainSet;
