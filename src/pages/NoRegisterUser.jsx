import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserForm } from '../components';
import { useAuth } from '../context/authContext';

const NoRegisterUser = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleRegister = async ({ email, password }) => {
    try {
      await auth.singin({ email, password });
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (err) {
      throw new Error('El usuario ya existe o ocurrio algun problema');
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      await auth.login({ email, password });
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (err) {
      throw new Error('El usuario o contraseña estan incorrectos');
    }
  };

  return (
    <div>
      <UserForm title="Registrate" onSubmit={handleRegister} />
      <UserForm title="Iniciar Sesión" onSubmit={handleLogin} />
    </div>
  );
};

export default NoRegisterUser;
