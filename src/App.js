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
        start: false,
      },
      count: '--',
    }
  }
  //Toggle the button highlight on/off
  activeButton(buttonRef, num) {
    this.setState((prevState) => {
      return { buttonToggle: { ...prevState.buttonToggle, [buttonRef]: !prevState.buttonToggle[buttonRef]} } 
    })
    this.playSound(buttonRef)
  }

  //Toggle the game options on/off
  toggleOptionsButtons(button) {
    this.setState((prevState) => {
      return { optionButtonsToggles: {...prevState.optionButtonsToggles, [button]: !prevState.optionButtonsToggles[button]} }
    })
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

  render() {
    return (
      <div className="App">
        <GameBoard 
          handleClick={(buttonRef, num) => this.activeButton(buttonRef, num)}
          buttonToggles={this.state.buttonToggle}
          handleClickOptions={(button) => this.toggleOptionsButtons(button)}
          optionButtonsToggles={this.state.optionButtonsToggles}
        />
      </div>
    );
  }
}

export default App;