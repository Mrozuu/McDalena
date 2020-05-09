import React from "react";
import "./SetPageStyle.css";

class SetTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="setTitle">
        <h1>{this.props.title.title}</h1>
        <h2>{this.props.title.titleExtension}</h2>
      </div>
    );
  }
}

export default SetTitle;
