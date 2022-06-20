import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import LoginContext from './login-context';

const LoginContextProvider = props => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:90/users/login', {
        email: email,
        password: password,
      });
      console.log(response);

      if (response.status === 200) {
        navigate('/home');
        setIsLoggedIn(true);
      }
    } catch (err) {
      setInvalidCredentials(true);
      console.log(err);
    }
  };

  const loginContext = {
    isLoggedIn,
    setIsLoggedIn: loginHandler,
    setInvalidCredentials,
    invalidCredentials,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
