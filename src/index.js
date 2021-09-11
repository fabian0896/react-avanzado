import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AuthProvider from './context/authContext';

import App from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server-fab.vercel.app/graphql',
});

render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById('app'),
);
