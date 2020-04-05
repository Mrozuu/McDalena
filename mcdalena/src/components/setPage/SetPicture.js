import React from "react";
import "./SetPageStyle.css";
import "../../fontello/css/fontello.css";
import { AnimatePresence, motion } from "framer-motion";

function SetPicture() {
  const pageTransition = {
    duration: 1,
    stiffness: 0,
  };

  const pageVariants = {
    initial: {
      opacity: 1,
      y: "100vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 1,
      y: "-100vh",
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="setPicture">
        <div className="icon-left-open-big setArrowLeft"></div>
        <div className="icon-right-open-big setArrowRight"></div>
      </div>
    </motion.div>
  );
}

export default SetPicture;
