import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoadingContextProvider from './context/LoadingSpinnerContext/LoadingContextProvider';

import LoginContextProvider from './context/LoginContext/LoginContextProvider';
import ShowMessageContextProvider from './context/ShowMessageContext/ShowMessageContextProvider';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import AddLocationPage from './pages/AddLocationPage/AddLocationPage';
import SpotPage from './pages/SpotPage/SpotPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AddBlogPage from './pages/AddBlogPage/AddBlogPage';
import UpdateLocationPage from './pages/UpdateLocationPage/UpdateLocationPage';

const App = () => {
  return (
    <LoginContextProvider>
      <LoadingContextProvider>
        <ShowMessageContextProvider>
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
            <Route
              path="location/update/:id"
              element={<UpdateLocationPage />}
            />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/blog/add" element={<AddBlogPage />} />
          </Routes>
        </ShowMessageContextProvider>
      </LoadingContextProvider>
    </LoginContextProvider>
  );
};

export default App;
