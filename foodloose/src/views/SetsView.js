import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SetTemplate from 'templates/SetTemplate';
import { Sets } from 'data/Sets';

function SetsView() {
  const location = useLocation();
  console.log(Sets[0].data.sets[0].title[0]);
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/F" key="mainset1">
          <SetTemplate Sets={Sets[0]} uni="Set1" />
        </Route>
        <Route exact path="/P" key="mainset1">
          <SetTemplate Sets={Sets[1]} uni="Set2" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default SetsView;
