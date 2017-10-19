const playSound = (buttonRef) => {
  const sound1 = new Audio(require(`../assets/simonSound1.mp3`));
  const sound2 = new Audio(require('../assets/simonSound2.mp3'));
  const sound3 = new Audio(require('../assets/simonSound3.mp3'));
  const sound4 = new Audio(require('../assets/simonSound4.mp3'));
  const wrongMove = new Audio(require('../assets/wrongMove.m4a'))
  const winGame = new Audio(require('../assets/win-game.mp3'));
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
    case 'wrong':
      wrongMove.play()
      break;
    case 'win':
      winGame.play()
      break;
    default:
      break;
  }
}
export default playSound;