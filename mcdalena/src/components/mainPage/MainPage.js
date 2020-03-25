import React from "react";
import "./MainPageStyle.css";
import MainContent from "./MainContent";
import MainPictures from "./MainPictures";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainPage">
        <MainLogo />
        <MainScrollBar />
        <MainPictures />
        <MainContent />
      </div>
    );
  }
}

export default MainPage;
