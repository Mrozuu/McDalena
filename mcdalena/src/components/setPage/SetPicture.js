import React from "react";
import "./SetPageStyle.css";
import "../../fontello/css/fontello.css";

class SetPicture extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setPicture">
        <div className="icon-left-open-big setArrowLeft"></div>
        <div className="icon-right-open-big setArrowRight"></div>
      </div>
    );
  }
}

export default SetPicture;
