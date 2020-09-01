import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SetTemplate from 'templates/SetTemplate';
import MotionTransition from 'animation/MotionTransition';

function SetsView() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <MotionTransition side="leftSide">
          <Route exact path="/MainSet1" key="mainset1">
            <SetTemplate title="set1" key="mainset2" />
          </Route>
        </MotionTransition>
        <MotionTransition side="rightSide">
          <Route exact path="/MainSet2" key="mainset3">
            <SetTemplate title="set2" key="mainset4" />
          </Route>
        </MotionTransition>
      </Switch>
    </AnimatePresence>
  );
}

export default SetsView;
