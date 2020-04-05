import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./MainPageStyle.css";
import MainContentButton from "./MainContentButton";

function MainContent(props) {
  const pageTransition = {
    duration: 1,
    stiffness: 0,
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
        <MainContentButton buttonPath={props.buttonPath} />
      </div>
    </motion.div>
  );
}

export default MainContent;
