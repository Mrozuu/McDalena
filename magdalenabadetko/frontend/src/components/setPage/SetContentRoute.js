import React from "react";
import "./SetPageStyle.css";
import SetPicture from "./SetPicture";
import SetContent from "./SetContent";

class SetContentRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SetPicture />
        <SetContent setsData={this.props.setsData} />
      </div>
    );
  }
}

export default SetContentRoute;
