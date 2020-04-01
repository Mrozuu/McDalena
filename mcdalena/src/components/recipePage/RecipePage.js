import React from "react";
import "./RecipePageStyle.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./recipeHeader";

export default ({ close }) => (
  <div className="modal">
      <a className="close icon-cancel iconIconCancel" onClick={close}>

      </a>
      <RecipeHeader title="Nazwa dania" />
      <RecipeIngredients />
      <div className="recipeLine" />
      <RecipeContent />
  </div>
);