import React from 'react';
import styled from 'styled-components';
import picture1 from 'assets/pictures/set1.jpg';
import background from 'assets/icons/head.svg';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Carousel from 'animation/Carousel';
import MotionTransition from 'animation/MotionTransition';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const PictureWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  height: 100vh;
  width: 50%;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  padding: 0;
  margin: 0;
  background-color: hsl(0, 23%, 66%);
  background-image: url(${background});
  background-position: 90% 90%;
  background-repeat: no-repeat;
  background-size: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  button {
    display: block;
  }
`;

function PreviewTemplate({ title }) {
  return (
    <StyledWrapper>
      <MotionTransition side="leftSide">
        <PictureWrapper>
          <Carousel images={[picture1]} />
        </PictureWrapper>
      </MotionTransition>
      <MotionTransition side="rightSide">
        <TitleWrapper>
          <Heading big>{title}</Heading>
          <Button activeColor="hsl(0, 23%, 66%)">Pokaz wiecej</Button>
        </TitleWrapper>
      </MotionTransition>
    </StyledWrapper>
  );
}

export default PreviewTemplate;
