import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/index.js';
import playSound from './utils/playSound.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonToggle: {button: false},
      optionButtonsToggles: {
        on: false,
        strict: false,
      },
      count: '--',
      computerTurn: true,
      computerMoves: [],
      playerMoves: [],
    }
  }
  //Player button click functions
  playerBtnClick(buttonRef) {
    let buttonOrder = ['greenBtn', 'redBtn', 'blueBtn', 'yellowBtn'].indexOf(buttonRef) + 1
    const playerMoves = this.state.playerMoves
    playerMoves.push(buttonOrder)
    this.setState({
      buttonToggle: {[buttonRef]: true},
      playerMoves: playerMoves
    })
    playSound(buttonRef)
  }

  playerBtnUp(buttonRef) {
    this.setState({ 
      buttonToggle: { [buttonRef]: false },
      computerTurn: true,
    })
    this.matchSequence()
  }
  //Match computer sequence
  matchSequence() {
    const computerMoves = this.state.computerMoves
    const playerMoves = this.state.playerMoves
    //retrun true if arrays match or else return false
    const compareArrays = (arr1, arr2) => {
      return arr1.length === arr2.length 
        && arr1.every((element, index) => element === arr2[index]);
    }
    //Same sequence continue
    (compareArrays(computerMoves, playerMoves)) ? this.computerMove() : console.log('no match');
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
    this.setState({
      computerMoves: [],
      playerMoves: [],
      computerTurn: true,
    }, () => this.computerMove())
  }

  //Computer random sequence
  computerMove() {
    const randomNum = Math.floor(Math.random() * 4 + 1);
    const moves = this.state.computerMoves;
    moves.push(randomNum);
    this.setState({ computerMoves: moves })
    setTimeout(() => {this.drawComputerMoves(moves)}, 2000);
  }
  //Render computer sequence
  drawComputerMoves(moves) {
    moves.forEach((moves, index) => {
      setTimeout(() => {
      let buttonRef = 0;
      switch (moves) {
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
      this.renderComputerMove(buttonRef)
      console.log(buttonRef)
      }, 2000 * index)
    })
    this.setState({computerTurn: false})
  }

  renderComputerMove(buttonRef) {
    this.setState({
      buttonToggle: {[buttonRef]: true},
    })
    playSound(buttonRef)
    //Turn button off after 2 second delay
    setTimeout(() => {
      this.setState({ buttonToggle: { [buttonRef]: false }})
    }, 1500)
  }

  render() {
    return (
      <div className="App">
        <GameBoard 
          handleMouseDown={(buttonRef) => this.playerBtnClick(buttonRef)}
          handleMouseUp={(buttonRef) => this.playerBtnUp(buttonRef)}
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