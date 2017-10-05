import React from 'react';
import './styles.css';
import Options from '../Options/index.js';
import Button from '../Button/index.js';

const GameBoard = ({handleClick}) => {
  //Render buttons
  const renderBtn = (buttonRef, num) => {
    return (
      <Button 
        buttonRef={buttonRef}
        handleClick={() => handleClick(num)}
      />
    )
  }
  return (
    <div className="Game-board">
      <Options />
      {renderBtn('greenBtn', 0)}
      {renderBtn('redBtn', 1)}
      {renderBtn('blueBtn', 2)}
      {renderBtn('yellowBtn', 3)}
    </div>
  )
}

export default GameBoard;