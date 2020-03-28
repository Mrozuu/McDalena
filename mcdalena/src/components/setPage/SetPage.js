import React from "react";
import "./SetPageStyle.css";
import MainLogo from "../mainPage/MainLogo";
import SetTopBar from "./SetTopBar";
import SetPicture from "./SetPicture";
import SetContent from "./SetContent";

class SetPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setPage">
        <SetTopBar />
        <MainLogo />
        <SetPicture />
        <SetContent />
      </div>
    );
  }
}

export default SetPage;
