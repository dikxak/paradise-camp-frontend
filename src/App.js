import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoadingContextProvider from './context/LoadingSpinnerContext/LoadingContextProvider';

import LoginContextProvider from './context/LoginContext/LoginContextProvider';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import AddLocationPage from './pages/AddLocationPage/AddLocationPage';
import SpotPage from './pages/SpotPage/SpotPage';

const App = () => {
  return (
    <LoginContextProvider>
      <LoadingContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem('token') ? <HomePage /> : <LandingPage />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/location/add" element={<AddLocationPage />} />
          <Route path="/location/:id" element={<SpotPage />} />
        </Routes>
      </LoadingContextProvider>
    </LoginContextProvider>
  );
};

export default App;
