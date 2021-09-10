import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Logo } from './components';
import { GlobalStyle } from './styles/GlobalStyles';

import { Home } from './pages';

const App = () => (
  <Router>
    <div>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route path="/pet/:id" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
