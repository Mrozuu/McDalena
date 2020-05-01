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
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default SetTitle;
