import React, { useState, useEffect } from "react";
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

var routes = [
  {
    path: "/MainSet1",
    name: "set1",
    Component: MainSet,
    backgroundColor: "#54494B",
    contentTitle: "set 1",
    buttonPath: "/SetPage1",
    backgroundImage: Photo5,
  },
  {
    path: "/MainSet2",
    name: "set2",
    Component: MainSet,
    backgroundColor: "#F1F7ED",
    contentTitle: "set 2",
    buttonPath: "/SetPage2",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet3",
    name: "set3",
    Component: MainSet,
    backgroundColor: "#B9314F",
    contentTitle: "set 3",
    buttonPath: "/SetPage3",
    backgroundImage: Photo3,
  },
  {
    path: "/MainSet4",
    name: "set4",
    Component: MainSet,
    backgroundColor: "#D5A18E",
    contentTitle: "set 4",
    buttonPath: "/SetPage4",
    backgroundImage: Photo4,
  },
  {
    path: "/MainSet5",
    name: "set5",
    Component: MainSet,
    backgroundColor: "#A69658",
    contentTitle: "set 5",
    buttonPath: "/SetPage4",
    backgroundImage: Photo5,
  },
];

var routes3 = [];
function MainPage() {
  const location = useLocation();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/sets/")
      .then((res) => res.json())
      .then((res) => {
        routes3 = res.map((item) => {
          if (item.Component === "MainSet") {
            routes3[item.id - 1] = item;
            routes3[item.id - 1].Component = MainSet;
            routes3[item.id - 1].backgroundImage = Photo5;
          }
          return routes3;
        });
        return routes3;
      })
      .catch(function (error) {
        console.log("error: " + error);
      });
  });

  console.log(routes3);
  console.log(routes[0].name);
  return (
    <div className="mainPage">
      <MainLogo />
      <MainScrollBar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {routes.map(
            ({
              id,
              path,
              Component,
              backgroundColor,
              backgroundImage,
              buttonPath,
              contentTitle,
            }) => (
              <Route key={id} exact path={path}>
                <Component
                  contentTitle={contentTitle}
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
