import React from 'react';
import './styles.css';
import Options from '../Options/index.js';
import Button from '../Button/index.js';

const GameBoard = ({handleClick, handleClickOptions, buttonToggles, optionButtonsToggles}) => {
  //Render buttons
  const renderBtn = (buttonRef, num) => {
    return (
      <Button 
        buttonRef={buttonRef}
        toggle={buttonToggles[buttonRef]}
        handleClick={() => handleClick(buttonRef, num)}
      />
    )
  }
  return (
    <div className="Game-board">
      <Options 
        handleClick={(classValue) => handleClickOptions(classValue)}
        optionButtonsToggles={optionButtonsToggles}
      />
      {renderBtn('greenBtn', 0)}
      {renderBtn('redBtn', 1)}
      {renderBtn('blueBtn', 2)}
      {renderBtn('yellowBtn', 3)}
    </div>
  )
}

export default GameBoard;