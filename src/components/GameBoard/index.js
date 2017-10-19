import React from 'react';
import './styles.css';
import Options from '../Options/index.js';
import Button from '../Button/index.js';

const GameBoard = ({
  handleMouseDown, 
  handleMouseUp, 
  handleClickOptions, 
  buttonToggles, 
  optionButtonsToggles, 
  computerTurn,
  count,
  wrongMove,
  win,
  }) => {
  const addclass =  wrongMove ? 'shake' : ''    
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
    <div className={`Game-board ${addclass}`}>
      <Options 
        handleClick={(classValue) => handleClickOptions(classValue)}
        optionButtonsToggles={optionButtonsToggles}
        count={count}
        win={win}
      />
      {renderBtn('greenBtn')}
      {renderBtn('redBtn')}
      {renderBtn('blueBtn')}
      {renderBtn('yellowBtn')}
    </div>
  )
}

export default GameBoard;