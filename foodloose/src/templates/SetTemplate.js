import React from 'react';
import styled from 'styled-components';
import RecipeTemplate from 'templates/RecipeTemplate';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Icon from 'components/Icon/Icon';
import Underline from 'components/Underline/Underline';
import mixerIcon from 'assets/icons/mixer.svg';
import picture1 from 'assets/pictures/set1.jpg';
import picture2 from 'assets/pictures/set2.jpg';
import picture3 from 'assets/pictures/set3.jpg';
import Carousel from 'animation/Carousel';
import MotionTransition from 'animation/MotionTransition';
import headIcon from 'assets/icons/head.svg';
import Przystawka from 'assets/icons/plate.svg';
import DanieGlowne from 'assets/icons/pot.svg';
import Deser from 'assets/icons/dessert.svg';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;

const PictureWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  height: 100vh;
  width: 50%;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  display: grid;
  grid-template-rows: 0.25fr 1fr 0.1fr;
`;

const HeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  margin: 0 auto;
  font-size: 3.2rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;

const FooterWrapper = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin: 20px 0;
`;

const Recipe = styled.div`
  h1 {
    text-transform: lowercase;
  }
`;

const RecipesWrapper = styled.div`
  height: 100%;
  padding: 0 8vw;
  overflow-y: auto;
  p {
    text-align: left;
    padding-bottom: 50px;
  }
`;

function SetTemplate({
  Sets: {
    data: { sets },
  },
  uni,
}) {
  console.log(uni);
  return (
    <StyledWrapper>
      <MotionTransition side="leftSide" uni={uni}>
        <PictureWrapper>
          <Carousel images={[picture1, picture2, picture3]} />
        </PictureWrapper>
      </MotionTransition>
      <MotionTransition side="rightSide" uni={uni}>
        <ContentWrapper backgroundColor={sets[0].color.css}>
          <HeadingWrapper big>
            <StyledHeading big>{sets[0].title}</StyledHeading>
            <StyledHeading>{sets[0].titleExtension}</StyledHeading>
            <Underline width={200} size={50} />
          </HeadingWrapper>
          <RecipesWrapper>
            <StyledHeading big>Opis</StyledHeading>
            <StyledParagraph>{sets[0].description}</StyledParagraph>
            <StyledHeading big>Przepisy</StyledHeading>
            {sets[0].listOfRecipes.map(({ name, type, parts }) => (
              <RecipeTemplate title={name} type={Przystawka} parts={parts} />
            ))}
            <StyledHeading big>SMACZNEGO!</StyledHeading>
          </RecipesWrapper>
          <FooterWrapper>
            <Underline width={200} size={50} />
          </FooterWrapper>
        </ContentWrapper>
      </MotionTransition>
    </StyledWrapper>
  );
}

export default SetTemplate;
