import Button from './button.js'
import Channel from './channel.js'

document.addEventListener('DOMContentLoaded', ()=> {




    let redButton = new Button('red');
    let yellowButton = new Button('yellow');
    let blueButton = new Button('blue');

    let redChannel = new Channel('red')
    let yellowChannel = new Channel('yellow')
    let blueChannel = new Channel('blue')
    let timing = [200, 200]

      let timer = setInterval( ()=> {
        redChannel.moveContext(timing.shift());

        if (timing.length === 0){
          clearInterval(timer);
        }
      }, 1500)





    window.addEventListener("keydown", (e) => {

      switch (e.keyCode) {
        case 37:
          redButton.pressButton(redChannel.aligned() );
          break
        case 38:
          yellowButton.pressButton(yellowChannel.aligned());
          break
        case 39:
          blueButton.pressButton(blueChannel.aligned());
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
