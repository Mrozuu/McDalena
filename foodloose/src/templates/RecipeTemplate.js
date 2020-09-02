import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import Underline from 'components/Underline/Underline';
import Przystawka from 'assets/icons/plate.svg';
import DanieGlowne from 'assets/icons/pot.svg';
import Deser from 'assets/icons/dessert.svg';

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  ul {
    text-align: left;
    list-style-type: circle;
  }

  li {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

function RecipeTemplate({ title, type, parts }) {
  return (
    <RecipeWrapper>
      <Heading big>{title}</Heading>
      <Icon src={type} size={50} alt="icon" />
      {parts.map(({ name, ingredients, preparation }) => (
        <>
          <Heading big>{name}</Heading>
          <ul>
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <Paragraph>{preparation}</Paragraph>
          <Underline width={75} size={25} second />
        </>
      ))}
    </RecipeWrapper>
  );
}

RecipeTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  parts: PropTypes.array.isRequired,
};

export default RecipeTemplate;
