import React from "react";
import "./SetPageStyle.css";
import "../../fontello/css/fontello.css";
import { AnimatePresence, motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import picture1 from "../../img/set1.jpg";
import picture2 from "../../img/set2.jpg";
import picture3 from "../../img/set3.jpg";
import picture4 from "../../img/set4.jpg";

function SetPicture() {
  const pageTransition = {
    duration: 1,
    stiffness: 0,
    ease: "easeInOut",
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
        <AwesomeSlider>
          <div data-src={picture1} />
          <div data-src={picture2} />
          <div data-src={picture3} />
          <div data-src={picture4} />
        </AwesomeSlider>
      </div>
    </motion.div>
  );
}

export default SetPicture;
