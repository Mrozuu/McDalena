import React from "react";
import "./MainPageStyle.css";

class MainContentTitle extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainContentTitle">
        <h1>{this.props.title}</h1>
        <div className="mainContentBar" />
      </div>
    );
  }
}

export default MainContentTitle;
