import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoadingContextProvider from './context/LoadingSpinnerContext/LoadingContextProvider';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

const App = () => {
  return (
    <LoadingContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </LoadingContextProvider>
  );
};

export default App;
