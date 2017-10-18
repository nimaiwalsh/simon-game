import React from 'react';
import './styles.css';
import CountDisplay from '../CountDisplay/index.js';
import OptionButton from '../OptionButton/index.js';

const Options = ({handleClick, optionButtonsToggles, count}) => {
  const renderButton = (classValue, value) => {
    return (
      <OptionButton 
        classValue={classValue}
        value={value}
        handleClick={() => handleClick(classValue)}
        optionButtonToggle={optionButtonsToggles[classValue]}
      />
    )
  }

  return (
    <div className="Options">
      <CountDisplay count={count} on={optionButtonsToggles.on}/>
      <div className="Button-container">
        {renderButton('on', 'On/Off')}
        {renderButton('strict', 'Strict')}
        {renderButton('start', 'Start')}
      </div>
    </div>
  )
}

export default Options