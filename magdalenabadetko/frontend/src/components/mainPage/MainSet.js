import React from "react";
import "./MainPageStyle.css";
import MainContent from "./MainContent";
import MainPictures from "./MainPictures";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";

import picture1 from "../../img/set1/pic1.jpg";
import picture2 from "../../img/set2/pic1.jpg";

class MainSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainPictures
          backgroundImage={this.props.setsData.id === 1 ? picture1 : picture2}
        />
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
