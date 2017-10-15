import React from 'react';
import './styles.css';
import Options from '../Options/index.js';
import Button from '../Button/index.js';

const GameBoard = ({handleMouseDown, handleMouseUp, handleClickOptions, buttonToggles, optionButtonsToggles, computerTurn}) => {
  //Render buttons
  const renderBtn = (buttonRef) => {
    return (
      <Button 
        buttonRef={buttonRef}
        toggle={buttonToggles[buttonRef]}
        handleMouseDown={() => handleMouseDown(buttonRef)}
        handleMouseUp={() => handleMouseUp(buttonRef)}
      />
    )
  }
  return (
    <div className="Game-board">
      <Options 
        handleClick={(classValue) => handleClickOptions(classValue)}
        optionButtonsToggles={optionButtonsToggles}
      />
      {renderBtn('greenBtn')}
      {renderBtn('redBtn')}
      {renderBtn('blueBtn')}
      {renderBtn('yellowBtn')}
    </div>
  )
}

export default GameBoard;