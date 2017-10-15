import React from 'react';
import './styles.css';

const CountDisplay = ({count}) => (
  <div className="Count">
    <div className="Count-window">{count}</div>
    <h3>count</h3>
  </div>
)

export default CountDisplay;