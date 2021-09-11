import { useState } from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

import getApolliClient from '../services/gqlClient';

const client = getApolliClient();

const REGISTER = gql`
  mutation signup ($input: UserCredentials!) {
    signup (input: $input)
  }
`;

const LOGIN = gql`
  mutation login ($input: UserCredentials!) {
    login (input: $input)
  }
`;

function useAuthProvider() {
  const [user, setUser] = useState(() => window.sessionStorage.getItem('token'));
  const [singinMutation] = useMutation(REGISTER, { client });
  const [loginMutation] = useMutation(LOGIN, { client });

  async function singin({ email, password }) {
    const input = { email, password };
    const result = await singinMutation({ variables: { input } });
    window.sessionStorage.setItem('token', result.data.signup);
    setUser(result.data.sinup);
    return result;
  }

  async function login({ email, password }) {
    const input = { email, password };
    const result = await loginMutation({ variables: { input } });
    window.sessionStorage.setItem('token', result.data.login);
    setUser(result.data.login);
    return result;
  }

  function singout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(false);
        resolve();
      }, 2000);
    });
  }

  return {
    user,
    singin,
    login,
    singout,
  };
}

export default useAuthProvider;
