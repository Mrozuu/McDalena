import React from "react";
import "./SetPageStyle.css";
import SetTitle from "./SetTitle";
import SetContentRecipes from "./SetContentRecipes";
import SetContentDescription from "./SetContentDescription";
import LittleLogo from "./LittleLogo";
import { AnimatePresence, motion } from "framer-motion";

function SetContent() {
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
      style={{ zIndex: 1000 }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="setContent">
        <SetTitle />
        <SetContentRecipes />
        <div className="setContentLines" />
        <SetContentDescription />
        <LittleLogo />
      </div>
    </motion.div>
  );
}

export default SetContent;
