import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../../components/ui/Navbar/Navbar';
import Footer from '../../components/ui/Footer/Footer';
import Form from '../../components/ui/Form/Form';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import styles from './SignupPage.module.css';

import loginImg from '../../assets/images/signup-img.jpg';

const LoginPage = () => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredDob, setEnteredDob] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const firstNameChangeHandler = e => {
    console.log(e.target.value);
    setEnteredFirstName(e.target.value);
  };

  const lastNameChangeHandler = e => {
    setEnteredLastName(e.target.value);
  };

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const dobChangeHandler = e => {
    setEnteredDob(e.target.value);
  };

  const phoneChangeHandler = e => {
    setEnteredPhone(e.target.value);
  };

  const passwordChangeHandler = e => {
    setEnteredPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = e => {
    setEnteredConfirmPassword(e.target.value);
  };

  const registerFormSubmitHandler = e => {
    console.log('inside');

    console.log(enteredPassword);

    e.preventDefault();
    if (enteredConfirmPassword !== enteredPassword) return;

    const data = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      dob: new Date(enteredDob).toISOString(),
      password: enteredPassword,
      phoneNo: enteredPhone,
    };

    axios
      .post('http://localhost:90/users/register', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(data);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Form
        onSubmit={registerFormSubmitHandler}
        img={loginImg}
        heading={'Create your account'}
      >
        <Input
          id="firstName"
          type="text"
          placeholder=""
          label="First name"
          onChanged={firstNameChangeHandler}
        />
        <Input
          id="lastName"
          type="text"
          placeholder=""
          label="Last name"
          onChanged={lastNameChangeHandler}
        />
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          label="Email"
          onChanged={emailChangeHandler}
        />
        <Input
          id="dob"
          type="date"
          placeholder="2000-01-01"
          label="Date of birth"
          onChanged={dobChangeHandler}
        />
        <Input
          id="phone"
          type="text"
          placeholder="9812345678"
          label="Phone no"
          onChanged={phoneChangeHandler}
        />
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          label="Password"
          onChanged={passwordChangeHandler}
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          label="Confirm password"
          onChanged={confirmPasswordChangeHandler}
        />
        <Button className={`${styles['btn--signup']}`} type="submit">
          sign up
        </Button>
      </Form>
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage;
