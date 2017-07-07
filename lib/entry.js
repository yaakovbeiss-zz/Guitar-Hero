import Button from './button.js'
import Channel from './channel.js'
import SoundGenerator from './soundGenerator';
import { openModal, closeModal } from './modal';
import { redGenerator } from './channel.js'

document.addEventListener('DOMContentLoaded', ()=> {



    let yellowButton = new Button('yellow');
    let blueButton = new Button('blue');
    let orangeButton = new Button('orange');
    let greenButton = new Button('green');




    // let redTiming = [200, 200, 200, 200, 200]
    // let yellowTiming = [200, 200, 200, 200, 200, 200, 200, 200]
    // let blueTiming = [300, 300, 300, 300, 300, 300, 300, 300]

    let redGenerator = new SoundGenerator('red', `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandroll/`);

    redGenerator.generateSounds(123, ()=> {


      let redButton = new Button('red');

      let redChannel = new Channel('red')
      let blueChannel = new Channel('blue')
      let yellowChannel = new Channel('yellow')
      let orangeChannel = new Channel('orange')
      let greenChannel = new Channel('green')

        let startGame = () => {

          closeModal();


          let timing = redGenerator.timing;
          let playlist = redGenerator.playlist;


          while(timing.length){

            setTimeout( ()=> {
              // debugger
              switch ( Math.floor((Math.random() * 5) + 1 ) ) {
                case 1:
                  redChannel.playNotes(playlist);
                  break;
                case 2:
                  blueChannel.playNotes(playlist);
                  break;
                case 3:
                  greenChannel.playNotes(playlist);
                  break;
                case 4:
                  yellowChannel.playNotes(playlist);
                  break;
                case 5:
                  orangeChannel.playNotes(playlist);
                  break;
                default:
                  redChannel.playNotes(playlist);
              }

            }, (timing.shift()*1000) )

          }

        }



      //   let yellowTimer = setInterval( ()=> {
      //     yellowChannel.playNotes(200);
      //
      //     if (yellowTiming.length === 0){
      //       clearInterval(yellowTimer);
      //     }
      //   }, 750)
      //
      //   let blueTimer = setInterval( ()=> {
      //     blueChannel.playNotes(200);
      //
      //     if (blueTiming.length === 0){
      //       clearInterval(blueTimer);
      //     }
      //   }, 750)
      //   let orangeTimer = setInterval( ()=> {
      //     orangeChannel.playNotes(200);
      //
      //     if (orangeTiming.length === 0){
      //       clearInterval(orangeTimer);
      //     }
      //   }, 750)
      //   let greenTimer = setInterval( ()=> {
      //     greenChannel.playNotes(200);
      //
      //     if (greenTiming.length === 0){
      //       clearInterval(greenTimer);
      //     }
      //   }, 750)






    window.addEventListener("keydown", (e) => {

      switch (e.keyCode) {
        case 65:
          greenButton.pressButton(greenChannel.notes[0], greenChannel.aligned());
          break
        case 83:
          redButton.pressButton(redChannel.notes[0], redChannel.aligned());
          break
        case 68:
          yellowButton.pressButton(yellowChannel.notes[0], yellowChannel.aligned());
          break;
        case 70:
          blueButton.pressButton(blueChannel.notes[0], blueChannel.aligned());
          break;
        case 71:
          orangeButton.pressButton(orangeChannel.notes[0], orangeChannel.aligned());
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
        case 65:
          redButton.unpressButton();
          break
        case 83:
          yellowButton.unpressButton();
          break
        case 68:
          blueButton.unpressButton();
          break;
        case 70:
          greenButton.unpressButton();
          break;
        case 71:
          orangeButton.unpressButton();
          break;
        default:
          console.log('no button here')
      }

    })

    });

  })
