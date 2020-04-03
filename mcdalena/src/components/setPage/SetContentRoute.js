import React from "react";
import "./SetPageStyle.css";
import SetPicture from "./SetPicture";
import SetContent from "./SetContent";

class SetContentRoute extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <SetPicture />
        <SetContent />
      </div>
    );
  }
}

export default SetContentRoute;
