import React from "react";
import "./SetPageStyle.css";

class SetTitle extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="setTitle">
            <h1>Nazwa</h1>
            <h2>"Propsy" dotyczace setu</h2>
        </div>
    )
  }
}

export default SetTitle;
