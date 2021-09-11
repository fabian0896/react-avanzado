import ApolloClient from 'apollo-boost';

let client;

export default function getApolloClient() {
  if (client) return client;

  client = new ApolloClient({
    uri: 'https://petgram-server-fab.vercel.app/graphql',
    request: (operation) => {
      const token = window.sessionStorage.getItem('token');
      const authorization = token ? `Bearer ${token}` : '';
      operation.setContext({
        headers: {
          authorization,
        },
      });
    },
    onError: (error) => {
      const { networkError } = error;
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token');
        window.location.href = '/';
      }
    },
  });
  return client;
}
