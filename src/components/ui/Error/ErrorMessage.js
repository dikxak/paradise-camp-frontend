import React from 'react';
import ErrorIcon from '../../icons/ErrorIcons';

import styles from './ErrorMessage.module.css';

const ErrorMessage = props => {
  return (
    <div className={`${styles['overlay']}  ${styles[props.className]}`}>
      <div className={`${styles['error-message-container']}`}>
        <ErrorIcon className={`${styles['error-icon']}`} />
        <p className={styles['error-message']}>{props.message}</p>
        <span onClick={props.onClick} className={styles['cross']}>
          &#9587;
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
