import React from 'react';
import './styles.css';

const OptionButton = ({classValue, value}) => {
  return (
    <div className="Option-button">
      <button className={classValue}></button>
      <h3>{value}</h3>
    </div>
  )
}
export default OptionButton;