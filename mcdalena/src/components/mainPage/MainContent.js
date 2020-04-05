import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./MainPageStyle.css";
import MainContentButton from "./MainContentButton";

function MainContent(props) {
  return (
    <div
      className="mainContent"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <MainContentButton buttonPath={props.buttonPath} />
    </div>
  );
}

export default MainContent;
