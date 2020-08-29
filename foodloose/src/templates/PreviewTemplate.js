import React from 'react';
import styled from 'styled-components';
import picture1 from 'assets/pictures/set1.jpg';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

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
  background-image: url(${picture1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: hsl(0, 23%, 66%);
`;

function PreviewTemplate() {
  return (
    <StyledWrapper>
      <PictureWrapper background={picture1} />
      <TitleWrapper>
        <Heading>Set francuski</Heading>
        <Button activeColor="hsl(0, 23%, 66%)">Pokaz wiecej</Button>
      </TitleWrapper>
    </StyledWrapper>
  );
}

export default PreviewTemplate;
