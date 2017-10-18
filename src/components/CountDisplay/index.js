import React from 'react';
import './styles.css';

const CountDisplay = ({count, on}) => {
  let onstate = (on) ? 'on' : 'off';
  return (
    <div className="Count">
      <div className="Count-window"><span className={onstate}>{count}</span></div>
      <h3>count</h3>
    </div>
  )
}

export default CountDisplay;