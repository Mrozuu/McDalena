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

function MainPage(props) {
  var routes = props.data;
  console.log(routes);
  const location = useLocation();
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
