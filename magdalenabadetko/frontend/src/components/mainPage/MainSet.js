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
          backgroundColor={this.props.setsData.color}
          buttonPath={this.props.setsData.id}
          title={this.props.setsData.title}
        />
      </div>
    );
  }
}

export default MainSet;
