import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonToggle: {
        greenBtn: false,
        redBtn: false,
        blueBtn: false,
        yellowBtn: false,
      },
      optionButtonsToggles: {
        on: false,
        strict: false,
      },
      count: '--',
      computerTurn: false,
      computerMoves: [],
      playerMoves: [],
    }
  }
  //Toggle the button highlight on/off
  activeButton(buttonRef) {
    this.setState((prevState) => {
      return { buttonToggle: { [buttonRef]: !prevState.buttonToggle[buttonRef]} } 
    })
    this.playSound(buttonRef)
  }

  //Toggle the game options on/off
  toggleOptionsButtons(button) {
    if (button === 'start') {
      return this.startBtnClicked(button)
    }
    this.setState((prevState) => {
      return { optionButtonsToggles: {...prevState.optionButtonsToggles, [button]: !prevState.optionButtonsToggles[button]} }
    })
  }

  //Startbutton clicked
  startBtnClicked() {
    //Reset the game state and start computer turn
    this.setState({
      computerMoves: [],
      playerMoves: [],
      computerTurn: true,
    }, () => this.computerRandom())
  }

  playSound(buttonRef) {
    const sound1 = new Audio(require(`./assets/simonSound1.mp3`));
    const sound2 = new Audio(require('./assets/simonSound2.mp3'));
    const sound3 = new Audio(require('./assets/simonSound3.mp3'));
    const sound4 = new Audio(require('./assets/simonSound4.mp3'));
    switch(buttonRef) {
      case 'greenBtn':
        sound1.play()
        break;
      case 'redBtn':
        sound2.play()
        break;
      case 'blueBtn':
        sound3.play()
        break;
      case 'yellowBtn':
        sound4.play()
        break;
    }
  }

  //Computer random sequence
  computerRandom() {
    const randomNum = Math.floor(Math.random() * 4 + 1);
    const moves = this.state.computerMoves;
    moves.push(randomNum);
    this.setState({ computerMoves: moves })
    this.drawComputerMoves([1, 2, 3, 4]);
  }
  //Render computer sequence
  drawComputerMoves(moves) {
    moves.forEach((move) => {    
      let buttonRef = 0;
      switch (move) {
        case 1:
          buttonRef = 'greenBtn'
          break;
        case 2:
          buttonRef = 'redBtn'
          break;
        case 3:
          buttonRef = 'blueBtn'
          break;
        case 4:
          buttonRef = 'yellowBtn'
          break;
        default:
          break;
      }
      this.activeButton(buttonRef)
      console.log(buttonRef)
    })
  }

  render() {
    return (
      <div className="App">
        <GameBoard 
          handleClick={(buttonRef, num) => this.activeButton(buttonRef, num)}
          handleClickOptions={(button) => this.toggleOptionsButtons(button)}
          buttonToggles={this.state.buttonToggle}
          optionButtonsToggles={this.state.optionButtonsToggles}
          computerTurn={this.state.computerTurn}
        />
      </div>
    );
  }
}

export default App;