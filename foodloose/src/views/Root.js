import React from 'react';
import PreviewTemplate from 'templates/PreviewTemplate';
import GlobalStyle from 'theme/GlobalStyle';
import MainTemplate from 'templates/MainTemplate';
import HeadTitle from 'components/HeadTitle/HeadTitle';
import DotBar from 'components/DotBar/DotBar';
import SetsView from './SetsView';

function App() {
  return (
    <MainTemplate>
      <HeadTitle />
      <GlobalStyle />
      <DotBar />
      <SetsView />
    </MainTemplate>
  );
}

export default App;
