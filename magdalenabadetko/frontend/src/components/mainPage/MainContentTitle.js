import React from "react";
import "./MainPageStyle.css";

class MainContentTitle extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainContentTitle" style={{ fontWeight: "100" }}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default MainContentTitle;
