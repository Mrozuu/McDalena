import React from "react";
import "./MainPageStyle.css";
import MainSet from "./MainSet";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/MainSet1",
    name: "set1",
    Component: MainSet,
    color: "red",
    buttonPath: "/setPage1"
  },
  {
    path: "/MainSet2",
    name: "set2",
    Component: MainSet,
    color: "blue",
    buttonPath: "/setPage2"
  },
  {
    path: "/MainSet3",
    name: "set3",
    Component: MainSet,
    color: "purple",
    buttonPath: "/setPage3"
  },
  {
    path: "/MainSet4",
    name: "set4",
    Component: MainSet,
    color: "pink",
    buttonPath: "/setPage4"
  }
];
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainPage">
        <MainLogo />
        <MainScrollBar />
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
