import React from 'react';
import button from 'react-bootstrap/Button';
const Button = (props) => {
  return (
    <button {...props}>
      {
        props.children
      }
    </button>
  );
};

export default Button
