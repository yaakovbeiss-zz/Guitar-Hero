import Button from './button.js'
import Channel from './channel.js'

document.addEventListener('DOMContentLoaded', ()=> {

  let sound = new Howl({
    src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/full_song.mp3'],
    buffer: true,
    html5: true,
    sprite: {
      first: [0, 7500],
      second: [7500, 15000],
      third: [15000, 30000],
      fourth: [30000, 45000]
    }
  })

  sound.play('second')
  debugger

    let redButton = new Button('red');
    let yellowButton = new Button('yellow');
    let blueButton = new Button('blue');

    let redChannel = new Channel('red')
    let yellowChannel = new Channel('yellow')
    let blueChannel = new Channel('blue')

    let redTiming = [200, 200, 200, 200]
    let yellowTiming = [200, 200, 200, 200, 200, 200, 200, 200]
    let blueTiming = [300, 300, 300, 300, 300, 300, 300, 300]

      let redTimer = setInterval( ()=> {
        redChannel.moveContext(redTiming.shift());

        if (redTiming.length === 0){
          clearInterval(redTimer);
        }
      }, 1900)

      let yellowTimer = setInterval( ()=> {
        yellowChannel.moveContext(yellowTiming.shift());

        if (yellowTiming.length === 0){
          clearInterval(yellowTimer);
        }
      }, 500)

      let blueTimer = setInterval( ()=> {
        blueChannel.moveContext(blueTiming.shift());

        if (blueTiming.length === 0){
          clearInterval(blueTimer);
        }
      }, 700)





    window.addEventListener("keydown", (e) => {

      switch (e.keyCode) {
        case 37:
          redButton.pressButton(redChannel.notes[0], redChannel.aligned());
          break
        case 38:
          yellowButton.pressButton(yellowChannel.notes[0], yellowChannel.aligned());
          break
        case 39:
          blueButton.pressButton(blueChannel.notes[0], blueChannel.aligned());
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
