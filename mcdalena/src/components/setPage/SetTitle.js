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
        <h1>Set francuski</h1>
        <div className="setIcons">
          <img src="https://img.icons8.com/pastel-glyph/48/000000/garlic--v1.png" />
          <img src="https://img.icons8.com/android/48/000000/cooking-pot.png" />
          <img src="https://img.icons8.com/doodle/48/000000/cooking-book.png" />
        </div>
      </div>
    );
  }
}

export default SetTitle;
