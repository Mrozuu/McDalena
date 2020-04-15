import React from "react";
import "./MainPageStyle.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import MainSet from "./MainSet";
import SetPage from "../setPage/SetPage";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";

import Photo3 from "../../img/set3.jpg";
import Photo4 from "../../img/set4.jpg";
import Photo5 from "../../img/set5.jpg";

const routes = [
  {
    path: "/MainSet1",
    name: "set1",
    Component: MainSet,
    backgroundColor: "#54494B",
    buttonPath: "/SetPage1",
    backgroundImage: Photo5,
  },
  {
    path: "/MainSet2",
    name: "set2",
    Component: MainSet,
    backgroundColor: "#F1F7ED",
    buttonPath: "/SetPage2",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet3",
    name: "set3",
    Component: MainSet,
    backgroundColor: "#B9314F",
    buttonPath: "/SetPage3",
    backgroundImage: Photo3,
  },
  {
    path: "/MainSet4",
    name: "set4",
    Component: MainSet,
    backgroundColor: "#D5A18E",
    buttonPath: "/SetPage4",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet5",
    name: "set5",
    Component: MainSet,
    backgroundColor: "#A69658",
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

function MainPage() {
  const location = useLocation();

  return (
    <div className="mainPage">
      <MainLogo />
      <MainScrollBar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
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
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default MainPage;