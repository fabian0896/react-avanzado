import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import AuthProvider from './context/authContext';

import getApolliClient from './services/gqlClient';
import App from './App';

const client = getApolliClient();

render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById('app'),
);
