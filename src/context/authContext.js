import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { useAuthProvider } from '../hooks';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
