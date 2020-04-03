import React from "react";
import "./SetPageStyle.css";
import MainLogo from "../mainPage/MainLogo";
import SetContentRoute from "./SetContentRoute";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/Set1",
    name: "set1",
    Component: SetContentRoute
  },
  {
    path: "/Set2",
    name: "set2",
    Component: SetContentRoute
  },
  {
    path: "/Set3",
    name: "set3",
    Component: SetContentRoute
  },
  {
    path: "/Set4",
    name: "set4",
    Component: SetContentRoute
  }
];

class SetPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setPage">
        <MainLogo />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    );
  }
}

export default SetPage;
