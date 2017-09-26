import React from 'react';
import './styles.css';
import Options from '../Options/index.js';
import Button from '../Button/index.js';

const GameBoard = () => {
  //Render buttons
  const renderBtn = (id) => {
    return (
      <Button buttonRef={id}/>
    )
  }
  return (
    <div className="Game-board">
      <Options />
      {renderBtn('greenBtn')}
      {renderBtn('redBtn')}
      {renderBtn('blueBtn')}
      {renderBtn('yellowBtn')}
    </div>
  )
}

export default GameBoard;