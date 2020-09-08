import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { PageTransition } from 'data/PageTransition';

function MotionTransition({ children, side, uni, isMobile }) {
  return (
    <motion.div
      key={uni + side}
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
  uni: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};

MotionTransition.defaultProps = {
  isMobile: false,
};

export default MotionTransition;
