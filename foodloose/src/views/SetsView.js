import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SetTemplate from 'templates/SetTemplate';

function SetsView() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route exact path="/MainSet1" key="mainset1">
          <SetTemplate title="set1" key="mainset1" />
        </Route>
        <Route exact path="/MainSet2" key="mainset2">
          <SetTemplate title="set2" key="mainset2" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default SetsView;
