import React from 'react';
import PreviewTemplate from 'templates/PreviewTemplate';
import GlobalStyle from 'theme/GlobalStyle';
import MainTemplate from 'templates/MainTemplate';

function App() {
  return (
    <MainTemplate>
      <GlobalStyle />
      <PreviewTemplate />
    </MainTemplate>
  );
}

export default App;
