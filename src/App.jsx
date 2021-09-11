import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Logo, NavBar, PrivateRoute } from './components';
import { GlobalStyle } from './styles/GlobalStyles';

import {
  Home, Detail, NoRegisterUser, Favs,
} from './pages';

const App = () => (
  <Router>
    <div>
      <GlobalStyle />
      <Logo />
      <Switch>
        <PrivateRoute path="/user">
          <NoRegisterUser />
        </PrivateRoute>
        <PrivateRoute path="/favs">
          <Favs />
        </PrivateRoute>
        <Route path="/login">
          <NoRegisterUser />
        </Route>
        <Route path="/detail/:detailId">
          <Detail />
        </Route>
        <Route path="/pet/:id">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <NavBar />
    </div>
  </Router>
);

export default App;
