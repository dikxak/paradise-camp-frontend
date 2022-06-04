import React from 'react';

import Navbar from '../../components/ui/Navbar/Navbar';
import Footer from '../../components/ui/Footer/Footer';
import Form from '../../components/ui/Form/Form';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import styles from './SignupPage.module.css';

import loginImg from '../../assets/images/login-img.jpg';

const LoginPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Form img={loginImg} heading={'Create your account'}>
        <Input id="firstName" type="text" placeholder="" label="First name" />
        <Input id="lastName" type="text" placeholder="" label="Last name" />
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          label="Email"
        />
        <Input
          id="dob"
          type="date"
          placeholder="2000-01-01"
          label="Date of birth"
        />
        <Input
          id="phone"
          type="text"
          placeholder="9812345678"
          label="Phone no"
        />
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          label="Password"
        />
        <Button className={`${styles['btn--signup']}`} type="submit">
          Login
        </Button>
      </Form>
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage;
