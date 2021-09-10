import React from 'react';
import { ListOfCategories, ListOfPhotoCards, Logo } from './components';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);

export default App;
