import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/index.js';

class App extends Component {
  //Toggle the button highlight on/off
  activeButton(num) {
    const button = document.getElementsByClassName('button');
    const style = {
        0: 'greenBtn-on', 
        1: 'redBtn-on',
        2: 'blueBtn-on',
        3: 'yellowBtn-on'
    }
    button[num].classList.toggle(style[num]);
    this.playSound(num);
  }

  playSound(num) {
    const sound1 = new Audio(require(`./assets/simonSound1.mp3`));
    const sound2 = new Audio(require('./assets/simonSound2.mp3'));
    const sound3 = new Audio(require('./assets/simonSound3.mp3'));
    const sound4 = new Audio(require('./assets/simonSound4.mp3'));
    switch(num) {
      case 0:
        sound1.play()
        break;
      case 1:
        sound2.play()
        break;
      case 2:
        sound3.play()
        break;
      case 3:
        sound4.play()
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <GameBoard 
          handleClick={(num) => this.activeButton(num)}
        />
      </div>
    );
  }
}

export default App;