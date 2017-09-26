import React from 'react';
import './styles.css';

const Button = ({buttonRef}) => {
  return (
    <button className={`button ${buttonRef}`}></button>
  )
}

export default Button;