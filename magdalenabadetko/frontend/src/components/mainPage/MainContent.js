import React from "react";
//import { AnimatePresence, motion } from "framer-motion";
import {motion } from "framer-motion";

import "./MainPageStyle.css";
import MainContentButton from "./MainContentButton";
import MainContentTitle from "./MainContentTitle.js";

function MainContent(props) {
  const pageTransition = {
    duration: 1,
    stiffness: 0,
    ease: "easeInOut",
  };

  const pageVariants = {
    initial: {
      opacity: 1,
      y: "-100vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 1,
      y: "100vh",
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
      <div
        className="mainContent"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="mainContentBar1" />
        <MainContentTitle title={props.title} />
        <MainContentButton buttonPath={props.buttonPath} />
        <div className="mainContentBar2" />
      </div>
    </motion.div>
  );
}

export default MainContent;
