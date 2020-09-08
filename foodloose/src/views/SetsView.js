import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import SetTemplate from 'templates/SetTemplate';
import { Sets } from 'data/Sets';
import { Routes } from 'data/Routes';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function SetsView({ isMobile }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, Routes.length, page);

  console.log(imageIndex);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const location = useLocation();

  return (
    <>
      {isMobile ? (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Switch location={location} key={location.pathname}>
              {Routes.map(({ id, path, Component }, i) => (
                <Route exact path={path} key={id}>
                  <Component Sets={Sets[i]} uni={path} />
                </Route>
              ))}
            </Switch>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            {Routes.map(({ id, path, Component }, i) => (
              <Route exact path={path} key={id}>
                <Component Sets={Sets[i]} uni={path} />
              </Route>
            ))}
          </Switch>
        </AnimatePresence>
      )}
    </>
  );
}

SetsView.propTypes = {
  isMobile: PropTypes.bool,
};

SetsView.defaultProps = {
  isMobile: false,
};
export default SetsView;
