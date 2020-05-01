import React from "react";
import "./SetPageStyle.css";
import SetPicture from "./SetPicture";
import SetContent from "./SetContent";

class SetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SetPicture recipesData={this.props.recipesData} setsData={this.props.setsData}/>
        <SetContent recipesData={this.props.recipesData} setsData={this.props.setsData} />
      </div>
    );
  }
}

export default SetPage;
