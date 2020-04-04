import React from "react";
import "./MainPageStyle.css";
import MainSet from "./MainSet";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";
import { Route } from "react-router-dom";

import SetPage from "../setPage/SetPage"


const routes = [
  {
    path: "/MainSet1",
    name: "set1",
    Component: MainSet,
    color: "red",
    buttonPath: "/SetPage1"
  },
  {
    path: "/MainSet2",
    name: "set2",
    Component: MainSet,
    color: "blue",
    buttonPath: "/SetPage2"
  },
  {
    path: "/MainSet3",
    name: "set3",
    Component: MainSet,
    color: "purple",
    buttonPath: "/SetPage3"
  },
  {
    path: "/MainSet4",
    name: "set4",
    Component: MainSet,
    color: "pink",
    buttonPath: "/SetPage4"
  },
  {
    path: "/SetPage1",
    Component: SetPage
  },
  {
    path: "/SetPage2",
    Component: SetPage
  },
  {
    path: "/SetPage3",
    Component: SetPage
  },
  {
    path: "/SetPage4",
    Component: SetPage
  },
];
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainPage">

        {routes.map(({ path, Component, color, buttonPath }) => (
          <Route key={path} exact path={path}>
            <Component color={color} buttonPath={buttonPath} />
          </Route>
        ))}
      </div>
    );
  }
}

export default MainPage;
