import React from 'react';
import './styles.css';

const Button = ({buttonRef, handleMouseDown, handleMouseUp, toggle}) => {
  const toggleClassName = toggle ? `${buttonRef}-on` : '';
  return (
    <button 
      className={`button ${buttonRef} ${toggleClassName}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    ></button>
  )
}

export default Button;