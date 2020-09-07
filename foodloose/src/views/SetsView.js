import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from 'react-router-dom';
import SetTemplate from 'templates/SetTemplate';
import { Sets } from 'data/Sets';
import 'views/animation.css';

const SetsView = () => {
  const location = useLocation();
  console.log('location', location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide-right" timeout={1000}>
        <Switch location={location}>
          <Route path="/P" children={<SetTemplate Sets={Sets[0]} uni="Set1" />} exact />
          <Route path="/F" children={<SetTemplate Sets={Sets[1]} uni="Set2" />} exact />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SetsView;
