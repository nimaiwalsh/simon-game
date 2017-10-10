import React from 'react';
import './styles.css';

const OptionButton = ({classValue, value, handleClick, optionButtonToggle}) => {
  const toggleClassName = optionButtonToggle ? `${classValue}-on` : ''
  return (
    <div className="Option-button">
      <button className={toggleClassName} onClick={handleClick}></button>
      <h3>{value}</h3>
    </div>
  )
}
export default OptionButton;