import React from "react";
import "./SetPageStyle.css";
import SetContentRoute from "./SetContentRoute";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

class SetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="setPage">
        <SetContentRoute recipesData={this.props.recipesData} setsData={this.props.setsData} />
      </div>
    );
  }
}

export default SetPage;
