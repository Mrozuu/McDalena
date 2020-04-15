import React from "react";
import "./SetPageStyle.css";
import SetContentRoute from "./SetContentRoute";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const routes = [
  {
    path: "/SetPage1",
    name: "set1",
    Component: SetContentRoute,
  },
  {
    path: "/SetPage2",
    name: "set2",
    Component: SetContentRoute,
  },
  {
    path: "/SetPage3",
    name: "set3",
    Component: SetContentRoute,
  },
  {
    path: "/SetPage4",
    name: "set4",
    Component: SetContentRoute,
  },
];

function SetPage() {
  const location = useLocation();
  return (
    <div className="setPage">
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default SetPage;
