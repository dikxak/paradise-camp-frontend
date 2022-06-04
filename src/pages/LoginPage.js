import React from 'react';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Form from '../components/ui/Form';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

import styles from './LoginPage.module.css';

import loginImg from '../assets/images/login-img.jpg';

const LoginPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Form img={loginImg} heading={'Login to your account'}>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          label="Email address"
        />
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          label="Password"
        />
        <Button className={`${styles['btn--login']}`} type="submit">
          Login
        </Button>
      </Form>
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage;
