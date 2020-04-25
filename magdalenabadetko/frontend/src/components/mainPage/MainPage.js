import React, { useState, useEffect } from "react";
import "./MainPageStyle.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import MainSet from "./MainSet";
import SetPage from "../setPage/SetPage";
import MainLogo from "./MainLogo";
import MainScrollBar from "./MainScrollBar";

function MainPage(props) {
  const mainRoutes = props.mainRoutes;
  const setsRoutes = props.setsRoutes;
  const setsData = props.setsData;
  const recipesData = props.recipesData;

  const location = useLocation();
  return (
    <div className="mainPage">
      <MainLogo />
      <MainScrollBar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {mainRoutes.map(({ id, path, Component }) => (
            <Route key={id} exact path={path}>
              <Component setsData={setsData[path.charAt(8) - 1]} />
            </Route>
          ))}
          {setsRoutes.map(({ id, path, Component }) => (
            <Route key={id} exact path={path}>
              <Component recipesData={recipesData} setsData={setsData[path.charAt(8) - 1]} />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default MainPage;
