import React from 'react';
import './styles.css';

const Button = ({buttonRef, handleClick, toggle}) => {
  const toggleClassName = toggle ? `${buttonRef}-on` : '';
  return (
    <button 
      className={`button ${buttonRef} ${toggleClassName}`}
      onClick={handleClick}
    ></button>
  )
}

export default Button;