import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MotionTransition from './MotionTransition';

function RouteTransition({ children, exact, path, side }) {
  return (
    <Route exact={exact} path={path}>
      <MotionTransition side={side}>{children}</MotionTransition>
    </Route>
  );
}

RouteTransition.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
};

RouteTransition.defaultProps = {
  exact: false,
};

export default RouteTransition;
