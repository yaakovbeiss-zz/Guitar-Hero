import Button from './display.js'

document.addEventListener('DOMContentLoaded', ()=> {

  // let button = new Image();
  //
  // button.onload = function () {
  //           fill_canvas(button);
  //       }
  //
  //       function fill_canvas(button) {
  //
  //           let canvas = document.getElementById('canvas');
  //           let ctx = canvas.getContext('2d');
  //           let ctx2 = canvas.getContext('2d');
  //           canvas.width = button.width;
  //           canvas.height = button.height;
  //
  //           ctx.drawImage(button, 0, 0);
  //           // ctx.fillRect()
  //       }

  let sound = new Howl({
    buffer: true,
    html5: true,
    src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/1+(1).wav']
  })
  sound.play()

    let redButton = new Button('red');
    let greenButton = new Button('green');
    let blueButton = new Button('blue');

    window.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          redButton.pressButton();
          break
        case 38:
          greenButton.pressButton();
          break
        case 39:
          blueButton.pressButton();
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
          greenButton.unpressButton();
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
