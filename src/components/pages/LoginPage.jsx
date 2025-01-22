import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import SignIn from '../auth/SignIn';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (credentials.username && credentials.password) {
      const user = { username: credentials.username }; // Mock user data
      dispatch(login({ user }));
      navigate('/todos');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <SignIn
      handleLogin={handleLogin} 
      credentials={credentials} 
      setCredentials={setCredentials} 
      error={error} 
    />
  );
};

export default LoginPage;
