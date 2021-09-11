import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useInputValue } from '../../hooks';

import {
  Form, Input, Button, Title, Error,
} from './styled';

const UserForm = ({ onSubmit, title }) => {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await onSubmit({
        email: email.value,
        password: password.value,
      });
    } catch (err) {
      setError(err.message);
      setDisabled(false);
    }
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          type="text"
          placeholder="email"
          {...email}
        />
        <Input
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button disabled={disabled} type="submit">{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default UserForm;
