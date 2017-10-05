import React from 'react';
import './styles.css';

const Button = ({buttonRef, handleClick}) => {
  return (
    <button 
      className={`button ${buttonRef}`}
      onClick={handleClick}
    ></button>
  )
}

export default Button;