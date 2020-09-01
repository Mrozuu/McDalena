import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import Heading from 'components/Heading/Heading';

const variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const transition = {
  duration: 2,
  stiffness: 1,
  ease: 'easeInOut',
};

const RecipeHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  min-width: 250px;
  justify-content: space-between;
  margin: 20px auto;
  cursor: pointer;
`;

const RecipeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  z-index: 9999;
  background-color: white;
`;

const RecipeIcon = styled.img`
  width: 110px;
  height: 110px;
  padding-right: 20px;
`;

const StyledRecipeHeading = styled(Heading)`
  max-width: 200px;
`;

class RecipeHeader extends Component {
  constructor({ type, title }) {
    super({ type, title });
    this.state = {
      isActive: false,
    };

    this.ToggleRecipe = this.ToggleRecipe.bind(this);
  }

  ToggleRecipe = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { type, title } = this.props;
    const { isActive } = this.state;
    console.log(isActive);
    return (
      <>
        <RecipeHeaderWrapper onClick={this.ToggleRecipe}>
          <RecipeIcon src={type} alt="icon" />
          <StyledRecipeHeading>{title}</StyledRecipeHeading>
        </RecipeHeaderWrapper>
        {isActive && (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={title}
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <RecipeWrapper onClick={this.ToggleRecipe}>
                przepis 1 XDDDDDDDDDDDDDDDDD
              </RecipeWrapper>
            </motion.div>
          </AnimatePresence>
        )}
      </>
    );
  }
}

RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['appetizer', 'main', 'dessert']).isRequired,
};

export default RecipeHeader;
