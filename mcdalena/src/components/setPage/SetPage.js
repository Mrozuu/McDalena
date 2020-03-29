import React from "react";
import "./SetPageStyle.css";
import MainLogo from "../mainPage/MainLogo";
import SetTopBar from "./SetTopBar";
import SetPicture from "./SetPicture";
import SetContent from "./SetContent";
import LittleLogo from "../mainPage/LittleLogo";

class SetPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setPage">
        <MainLogo />
        <SetTopBar />
        <SetPicture />
        <SetContent />
        <LittleLogo />
      </div>
    );
  }
}

export default SetPage;
