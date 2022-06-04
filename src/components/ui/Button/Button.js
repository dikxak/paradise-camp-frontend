import React from 'react';

const Button = props => {
  return (
    <button
      className={`btn-custom ${props.className}`}
      type={!props.type ? 'button' : props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
