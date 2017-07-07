import Button from './button.js'
import Channel from './channel.js'
import { openModal, closeModal } from './modal';

document.addEventListener('DOMContentLoaded', ()=> {


    let redButton = new Button('red');
    let yellowButton = new Button('yellow');
    let blueButton = new Button('blue');
    let orangeButton = new Button('orange');
    let greenButton = new Button('green');

    let redChannel = new Channel('red')
    let yellowChannel = new Channel('yellow')
    let blueChannel = new Channel('blue')
    let orangeChannel = new Channel('orange')
    let greenChannel = new Channel('green')

    let redTiming = [200, 200, 200, 200, 200]
    // let yellowTiming = [200, 200, 200, 200, 200, 200, 200, 200]
    // let blueTiming = [300, 300, 300, 300, 300, 300, 300, 300]


      let startGame = () => {

        closeModal();

        let redTimer = setInterval( ()=> {
          redChannel.playNotes(100);

          if (redTiming.length === 0){
            clearInterval(redTimer);
          }
        }, 750)

        let yellowTimer = setInterval( ()=> {
          yellowChannel.playNotes(200);

          if (yellowTiming.length === 0){
            clearInterval(yellowTimer);
          }
        }, 750)

        let blueTimer = setInterval( ()=> {
          blueChannel.playNotes(200);

          if (blueTiming.length === 0){
            clearInterval(blueTimer);
          }
        }, 750)
        let orangeTimer = setInterval( ()=> {
          orangeChannel.playNotes(200);

          if (orangeTiming.length === 0){
            clearInterval(orangeTimer);
          }
        }, 750)
        let greenTimer = setInterval( ()=> {
          greenChannel.playNotes(200);

          if (greenTiming.length === 0){
            clearInterval(greenTimer);
          }
        }, 750)
      }





    window.addEventListener("keydown", (e) => {

      switch (e.keyCode) {
        case 37:
          redButton.pressButton(redChannel.notes[0], redChannel.aligned());
          break
        case 38:
          yellowButton.pressButton(yellowChannel.notes[0], yellowChannel.aligned());
          break
        case 39:
        closeModal();
          blueButton.pressButton(blueChannel.notes[0], blueChannel.aligned());
          break;
        case 40:
          break;
        case 32:
          closeModal();
          startGame();
          break;
        default:
          console.log('no button here')
      }

    })
    window.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case 37:
          redButton.unpressButton();
          break
        case 38:
          yellowButton.unpressButton();
          break
        case 39:
          blueButton.unpressButton();
          break;
        default:
          console.log('no button here')
      }

    })
  }
)
