import React from "react";
import "./MainPageStyle.css";
import MainSet from "./MainSet";
import { Route } from "react-router-dom";

import Photo3 from "../../img/set3.jpg";
import Photo4 from "../../img/set4.jpg";
import Photo5 from "../../img/set5.jpg";

import SetPage from "../setPage/SetPage";

const routes = [
  {
    path: "/MainSet1",
    name: "set1",
    Component: MainSet,
    backgroundColor: "#9CBAAC",
    buttonPath: "/SetPage1",
    backgroundImage: Photo5,
  },
  {
    path: "/MainSet2",
    name: "set2",
    Component: MainSet,
    backgroundColor: "#EFEFE1",
    buttonPath: "/SetPage2",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet3",
    name: "set3",
    Component: MainSet,
    backgroundColor: "#F7E0CF",
    buttonPath: "/SetPage3",
    backgroundImage: Photo3,
  },
  {
    path: "/MainSet4",
    name: "set4",
    Component: MainSet,
    backgroundColor: "#E2AFA3",
    buttonPath: "/SetPage4",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet5",
    name: "set5",
    Component: MainSet,
    backgroundColor: "#5C8C9F",
    buttonPath: "/SetPage4",
    backgroundImage: Photo5,
  },
  {
    path: "/SetPage1",
    Component: SetPage,
  },
  {
    path: "/SetPage2",
    Component: SetPage,
  },
  {
    path: "/SetPage3",
    Component: SetPage,
  },
  {
    path: "/SetPage4",
    Component: SetPage,
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
        {routes.map(
          ({
            path,
            Component,
            backgroundColor,
            backgroundImage,
            buttonPath,
          }) => (
            <Route key={path} exact path={path}>
              <Component
                backgroundColor={backgroundColor}
                backgroundImage={backgroundImage}
                buttonPath={buttonPath}
              />
            </Route>
          )
        )}
      </div>
    );
  }
}

export default MainPage;
