import React from 'react';
import './styles.css';
import CountDisplay from '../CountDisplay/index.js';
import OptionButton from '../OptionButton/index.js';

const Options = () => {
  const renderButton = (classValue, value) => {
    return (
      <OptionButton 
        classValue={classValue}
        value={value}
      />
    )
  }

  return (
    <div className="Options">
      <CountDisplay />
      <div className="Button-container">
        {renderButton('On-button', 'On/Off')}
        {renderButton('Strict-button', 'Strict')}
        {renderButton('Start-button', 'Start')}
      </div>
    </div>
  )
}

export default Options