import React from 'react';

import Card from '../Card/Card';

import styles from './Form.module.css';

const Form = props => {
  return (
    <Card className={styles['form-container']}>
      <img className={styles['form-img']} src={props.img} alt="Campfire" />
      <h2>{props.heading}</h2>
      <form className={styles['form']}>{props.children}</form>
    </Card>
  );
};

export default Form;
