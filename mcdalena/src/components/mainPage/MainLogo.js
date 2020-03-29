import React from "react";
import "./MainPageStyle.css";

class MainLogo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainLogo">
        <img src="https://img.icons8.com/officel/80/000000/cook-female.png" />
        <h1>Magdalena Badetko</h1>
      </div>
    );
  }
}

export default MainLogo;
