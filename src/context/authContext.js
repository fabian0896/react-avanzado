import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function useAuthProvider() {
  const [user, setUser] = useState(false);

  function singin() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(true);
        resolve();
      }, 2000);
    });
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
    singout,
  };
}

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
