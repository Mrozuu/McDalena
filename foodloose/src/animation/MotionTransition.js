import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { PageTransition } from 'data/PageTransition';

function MotionTransition({ children, side }) {
  return (
    <motion.div
      key={side}
      initial="initial"
      animate="in"
      exit="out"
      variants={PageTransition[side].pageVariants}
      transition={PageTransition[side].pageTransition}
    >
      {children}
    </motion.div>
  );
}

MotionTransition.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  side: PropTypes.oneOf(['leftSide', 'rightSide']).isRequired,
};

export default MotionTransition;
