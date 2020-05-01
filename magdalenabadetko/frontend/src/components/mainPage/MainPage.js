//import React, { useState, useEffect } from "react";
import React from "react"
import "./MainPageStyle.css";
import { Route, Switch, useLocation } from "react-router-dom";
//import { AnimatePresence, motion } from "framer-motion";
import { AnimatePresence} from "framer-motion";


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
      <MainScrollBar setsData={setsData} />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {mainRoutes.map(({ id, path, Component }) => (
            <Route exact path={path} key={id}>
              <Component setsData={setsData[path.charAt(8) - 1]} key={id} />
            </Route>
          ))}
          {setsRoutes.map(({ id, path, Component }) => (
            <Route exact path={path} key={id}>
              <Component
                recipesData={recipesData}
                setsData={setsData[path.charAt(8) - 1]}
                key={id}
              />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default MainPage;
