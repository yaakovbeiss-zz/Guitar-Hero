import Button from './button.js'
import Channel from './channel.js'
import SoundGenerator from './soundGenerator';
import Guitar from './guitar.js';
import { openModal, closeModal } from './modal';
import { SONGS } from './songs.js'

document.addEventListener('DOMContentLoaded', ()=> {




  let chooseSong = () => {
    let trackNumber = parseInt(document.querySelector('input[name="track"]:checked').value);

    let track = SONGS[trackNumber].backtrack
    let guitar = SONGS[trackNumber].guitar
    let numCuts = SONGS[trackNumber].numCuts

      let generator = new SoundGenerator(guitar, track);

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

            let song = generator.song;
            window.crowd = generator.crowd;

            let playlist = generator.playlist;

            const guitar = new Guitar([
              redChannel,
              blueChannel,
              yellowChannel,
              orangeChannel,
              greenChannel
            ],
              playlist
            )

              song.play();
              crowd.play();
              guitar.playSong();
          }


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
            // startGame();
            break;
          default:
            console.log('no button here')
        }

      })
      window.addEventListener("keyup", (e) => {
        switch (e.keyCode) {
          case 65:
            greenButton.unpressButton(greenChannel.notes[0]);
            break
          case 83:
            redButton.unpressButton(redChannel.notes[0]);
            break
          case 68:
            yellowButton.unpressButton(yellowChannel.notes[0]);
            break;
          case 70:
            blueButton.unpressButton(blueChannel.notes[0]);
            break;
          case 71:
            orangeButton.unpressButton(orangeChannel.notes[0]);
            break;
          default:
            console.log('no button here')
        }

      })

      });
    }
    const choice = document.getElementById('choice');
    choice.addEventListener('click', () => {
      if( document.querySelector('input[name="track"]:checked') ){
        chooseSong();
      }
    })
  })
