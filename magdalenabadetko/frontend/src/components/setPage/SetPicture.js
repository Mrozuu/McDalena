import React from "react";
import "./SetPageStyle.css";
import "../../fontello/css/fontello.css";
import { motion } from "framer-motion";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import picture1 from "../../img/set1.jpg";
import picture2 from "../../img/set2.jpg";
import picture3 from "../../img/set3.jpg";
import picture4 from "../../img/set4.jpg";

function SetPicture(props) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
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
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={2000}
          bullets={false}
          fillParent={true}
        >
          {props.setsData.listOfRecipes.map((item) => (
            <div /*{style={{ backgroundImage: `url(${props.recipesData[item-1].picture})` }}}*/
            ></div>
          ))}
        </AutoplaySlider>
      </div>
    </motion.div>
  );
}

export default SetPicture;
