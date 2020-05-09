import React from "react";
import "./SetPageStyle.css";

class SetContentDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="setContentDescription">
        <h2>Opis</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default SetContentDescription;
