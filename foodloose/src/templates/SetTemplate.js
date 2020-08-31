import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import mixerIcon from 'assets/icons/mixer.svg';
import picture1 from 'assets/pictures/set1.jpg';
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

const ContentWrapper = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: ${({ theme }) => theme.secondary};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  padding-top: 50px;
  margin-bottom: 0;
  border-bottom: 2px solid ${({ theme }) => theme.grey200};
`;

const BottomIcon = styled.img`
  display: block;
  position: absolute;
  opacity: 0.8;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: auto;
`;

function SetTemplate() {
  return (
    <StyledWrapper>
      <MotionTransition side="leftSide">
        <PictureWrapper>
          <Carousel images={[picture1]} />
        </PictureWrapper>
      </MotionTransition>
      <MotionTransition side="rightSide">
        <ContentWrapper>
          <TitleWrapper>
            <StyledHeading big>Set francuski</StyledHeading>
            <Heading>czyli jestes we francji es</Heading>
          </TitleWrapper>

          <BottomIcon src={mixerIcon} alt="mixer" />
        </ContentWrapper>
      </MotionTransition>
    </StyledWrapper>
  );
}

export default SetTemplate;
