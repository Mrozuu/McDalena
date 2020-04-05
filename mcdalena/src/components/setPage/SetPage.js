import React from "react";
import "./SetPageStyle.css";
import SetContentRoute from "./SetContentRoute";
import { Route } from "react-router-dom";

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
  return (
    <div className="setPage">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
    </div>
  );
}

export default SetPage;
