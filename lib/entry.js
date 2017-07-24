import Button from './button.js'
import Channel from './channel.js'
import SoundGenerator from './soundGenerator';
import Guitar from './guitar.js';
import { openModal, closeModal, openGameOverModal, closeGameOverModal } from './modal';
import { SONGS } from './songs.js'

document.addEventListener('DOMContentLoaded', ()=> {

  // window.addEventListener("gamepadconnected", function(e) {
  //   console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  //   e.gamepad.index, e.gamepad.id,
  //   e.gamepad.buttons.length, e.gamepad.axes.length);
  //   let gp = e.gamepad.buttons;
  //   debugger
  //   setInterval( () => {
  //     if(gp.buttons[10].pressed){
  //       console.log( 'pressing guitar button')
  //     }
  //   }, 1)


  let chooseSong = () => {
    let trackNumber = parseInt(document.querySelector('input[name="track"]:checked').value);

    let track = SONGS[trackNumber].backtrack
    let guitar = SONGS[trackNumber].guitar
    let numCuts = SONGS[trackNumber].numCuts
    let fileType = SONGS[trackNumber].fileType

      let generator = new SoundGenerator(guitar, track, fileType);

      generator.generateSounds(numCuts, ()=> {

        let redButton = new Button('red');
        let yellowButton = new Button('yellow');
        let blueButton = new Button('blue');
        let orangeButton = new Button('orange');
        let greenButton = new Button('green');

        let redChannel = new Channel('red')
        let blueChannel = new Channel('blue')
        let yellowChannel = new Channel('yellow')
        let orangeChannel = new Channel('orange')
        let greenChannel = new Channel('green')

          let start = document.getElementById('start-button');
          start.addEventListener('click', () => {
            startGame();
          })

          let startGame = () => {

            closeModal();
            window.song = generator.song;
            window.crowd = generator.crowd;
            const playlist = generator.playlist;

            const guitar = new Guitar([
              greenChannel,
              redChannel,
              yellowChannel,
              blueChannel,
              orangeChannel
            ],
            [
              greenButton,
              redButton,
              yellowButton,
              blueButton,
              orangeButton
            ],
              playlist
            )

              song.play();
              crowd.play();
              guitar.playSong();
              let duration = song.duration() * 1000

              setTimeout( () => {
                endGame(guitar);
              }, duration)
              const endGameButton = document.getElementById('endgame-button');
              endGameButton.addEventListener('click', () => {
                endGame();
              })
              let endGame = () => {
                generator.playlist = [];
                guitar.playlist = []
                guitar.clearIntervals();
                song.stop();
                crowd.stop();
                window.song = null;
                window.crowd = null;
                document.querySelector('input[name="track"]:checked').checked = false;
                openGameOverModal();
              }



      window.addEventListener("keydown", (e) => {

        switch (e.keyCode) {
          case 65:
          case 192:
            greenButton.pressButton(greenChannel.notes[0]);
            break
          case 49:
          case 83:
            redButton.pressButton(redChannel.notes[0]);
            break
          case 50:
          case 68:
            yellowButton.pressButton(yellowChannel.notes[0]);
            break;
          case 51:
          case 70:
            blueButton.pressButton(blueChannel.notes[0]);
            break;
          case 52:
          case 71:
            orangeButton.pressButton(orangeChannel.notes[0]);
            break;
          case 34:
          case 32:
          guitar.strum()
            break;
          default:
            console.log('no button here')
        }

      })

      window.addEventListener("keyup", (e) => {
        switch (e.keyCode) {
          case 65:
          case 192:
            greenButton.unpressButton(greenChannel.notes[0]);
            break
          case 49:
          case 83:
            redButton.unpressButton(redChannel.notes[0]);
            break
          case 50:
          case 68:
            yellowButton.unpressButton(yellowChannel.notes[0]);
            break;
          case 51:
          case 70:
            blueButton.unpressButton(blueChannel.notes[0]);
            break;
          case 52:
          case 71:
            orangeButton.unpressButton(orangeChannel.notes[0]);
            break;
            case 32:
            break;
          default:
            console.log('no button here')
        }

      })

    }

      });
    }

    const choice = document.getElementById('choice');
    choice.addEventListener('click', () => {
      if( document.querySelector('input[name="track"]:checked') ){
        chooseSong();
      }
    })
    const restart = document.getElementById('restart-button');
    restart.addEventListener('click', () => {
        closeGameOverModal();
        openModal();
    })

    // });
  })
