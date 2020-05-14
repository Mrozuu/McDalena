import React from "react";
import "./SetPageStyle.css";
import SetTitle from "./SetTitle";
import SetContentRecipes from "./SetContentRecipes";
import SetContentDescription from "./SetContentDescription";
import { motion } from "framer-motion";
import SetReturn from "./SetReturn";
function SetContent(props) {
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
      <div className="setContent">
        <SetReturn return={`MainSet${props.setsData.id}`} />
        <SetTitle title={props.setsData} />
        <SetContentRecipes
          recipesData={props.recipesData}
          instructionsData={props.instructionsData}
          setsData={props.setsData}
        />
        <div className="setContentLines" />
        <SetContentDescription description={props.setsData.description} />
        <div className="littleLogo" />
      </div>
    </motion.div>
  );
}

export default SetContent;
