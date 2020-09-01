import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import RecipeHeader from 'components/RecipeHeader/RecipeHeader';
import mixerIcon from 'assets/icons/mixer.svg';
import appetizer from 'assets/icons/plate.svg';
import main from 'assets/icons/pot.svg';
import dessert from 'assets/icons/dessert.svg';
import picture1 from 'assets/pictures/set1.jpg';
import Carousel from 'animation/Carousel';
import MotionTransition from 'animation/MotionTransition';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  min-width: 1200px;
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
  display: grid;
  grid-template-rows: 0.2fr 1fr 14vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  div:first-child {
    border-right: 1.5px solid ${({ theme }) => theme.grey100};
  }

  div:second-child {
    border-left: 1.5px solid ${({ theme }) => theme.grey100};
  }
`;

const RecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 20px;

  p {
    text-align: left;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  border-bottom: 2px solid ${({ theme }) => theme.grey200};
`;

const BottomIcon = styled.img`
  display: block;
  position: absolute;
  opacity: 0.8;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
  height: 10vh;
  width: auto;
`;

function SetTemplate() {
  return (
    <StyledWrapper>
      <PictureWrapper>
        <Carousel images={[picture1]} />
      </PictureWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <StyledHeading big>Set francuski</StyledHeading>
          <Heading>czyli jestes we francji es</Heading>
        </TitleWrapper>
        <MainWrapper>
          <RecipesWrapper>
            <Heading>PRZEPISY</Heading>
            <RecipeHeader title="jajko z boczkiem" type={appetizer} />
            <RecipeHeader title="kotlet schabowy z ziemniakami" type={main} />
            <RecipeHeader title="szarlotka z lodami" type={dessert} />
          </RecipesWrapper>
          <DescriptionWrapper>
            <Heading>OPIS</Heading>
            <Paragraph>
              Czerwona ziemia, sucha żółta trawa, zapach spalonej słońcem sawanny nieporównywalny z
              niczym innym i tęsknota po każdym wspomnieniu. Majestat zwierzęcego świata, potęga
              przyrody, krąg życia… A do tego krajobrazy jak z bajki, zapierające dech plaże,
              bogactwo smaków, przypraw, owoców. Ociekające sokiem dojrzałe mango, awokado które
              samo ze sobą smakuje tutaj wybornie, plantacje przypraw, świeże owoce morza,
              orzeźwiający aromat limonki... Spróbujcie poczuć smak i zapach kolorowej, pachnącej
              Afryki.
            </Paragraph>
          </DescriptionWrapper>
        </MainWrapper>
        <BottomIcon src={mixerIcon} alt="mixer" />
      </ContentWrapper>
    </StyledWrapper>
  );
}

export default SetTemplate;
