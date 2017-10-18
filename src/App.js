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
        start: false,
      },
      computerTurn: false,
      computerMoves: [],
      playerMoves: [],
      wrongMove: false,
    }
  }
  //Player button click functions
  playerBtnClick(buttonRef) {
    if (this.state.optionButtonsToggles.on && this.state.computerTurn === false) {
      let buttonOrder = ['greenBtn', 'redBtn', 'blueBtn', 'yellowBtn'].indexOf(buttonRef) + 1
      const playerMoves = this.state.playerMoves
      playerMoves.push(buttonOrder)
      this.setState({
        buttonToggle: {[buttonRef]: true},
        playerMoves: playerMoves
      })
      playSound(buttonRef)
    }
  }

  playerBtnUp(buttonRef) {
    if (this.state.optionButtonsToggles.on && this.state.computerTurn === false) {
      this.setState({ 
        buttonToggle: { [buttonRef]: false },
      })
      if (this.state.optionButtonsToggles.start) {
        this.matchSequence()        
      }
    }
  }
  //Match computer sequence
  matchSequence() {
    const computerMoves = this.state.computerMoves
    const playerMoves = this.state.playerMoves
    let playerCount = playerMoves.length - 1 
    //returns true if arrays match or else return false
    const compareArrays = (arr1, arr2) => {
      return arr1.length === arr2.length 
        && arr1.every((element, index) => element === arr2[index]);
    }
    //Current player move matches computer and moves are the same continue computer sequence
    if (playerMoves[playerCount] === computerMoves[playerCount]) {
      if (compareArrays(computerMoves, playerMoves)) {
        this.setState({computerTurn: true})
        this.computerMove()
      } 
    } else {
        const wrongMove = () => {
          playSound()
          this.setState({
            wrongMove: true,
          })
        }
        //Restart game if in strict mode or else restart last computer sequence
        if (this.state.optionButtonsToggles.strict) {
          wrongMove()
          this.startBtnClicked()
        } else {
          wrongMove()
          setTimeout(() => this.drawComputerMoves(this.state.computerMoves), 2000)
        }
    }
  }

  //Toggle the game options on/off
  toggleOptionsButtons(button) {
    if (button === 'start') {
      return this.startBtnClicked(button)
    }
    if (button === 'on') {
      this.setState({
        computerMoves: [],
        playerMoves: [],
        optionButtonsToggles: {...this.state.optionButtonsToggles, start: false}
      })
    }
    this.setState((prevState) => {
      return { optionButtonsToggles: {...prevState.optionButtonsToggles, [button]: !prevState.optionButtonsToggles[button]} }
    })
  }

  //Startbutton clicked
  startBtnClicked() {
    if (this.state.optionButtonsToggles.on) {
      this.setState({
        computerMoves: [],
        playerMoves: [],
        computerTurn: true,
        optionButtonsToggles: {...this.state.optionButtonsToggles, start: true}
      }, () => this.computerMove())
    }
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
    moves.forEach((move, index) => {
      setTimeout(() => {
      let buttonRef = ['greenBtn', 'redBtn', 'blueBtn', 'yellowBtn'];
      buttonRef = buttonRef[move - 1]
      this.renderComputerMove(buttonRef)
      }, 2000 * index)
    })
    setTimeout((moves) => {
      this.setState({
        computerTurn: false,
        playerMoves: [],
        wrongMove: false,
      })
    }, 2000 * moves.length)

  }

  renderComputerMove(buttonRef) {
    this.setState({
      buttonToggle: {[buttonRef]: true},
    })
    playSound(buttonRef)
    //Turn button off after 1.5 second delay
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
          count={this.state.computerMoves.length}
          wrongMove={this.state.wrongMove}
        />
      </div>
    );
  }
}

export default App;