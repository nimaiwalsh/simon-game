import React from 'react';
import './styles.css';

const CountDisplay = ({count, on, win}) => {
  let onstate = (on) ? 'on' : 'off';
  const countorwin = (win) ? 'WIN' : count;
  return (
    <div className="Count">
      <div className="Count-window"><span className={onstate}>{countorwin}</span></div>
      <h3>count</h3>
    </div>
  )
}

export default CountDisplay;