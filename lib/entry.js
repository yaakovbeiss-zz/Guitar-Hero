import Button from './button.js'
import Channel from './channel.js'
import SoundGenerator from './soundGenerator';
import { openModal, closeModal } from './modal';
import { SONGS } from './songs.js'

document.addEventListener('DOMContentLoaded', ()=> {


  // document.getElementById('')
  let track = SONGS[1].backtrack
  let guitar = SONGS[1].guitar
  let numCuts = SONGS[1].numCuts

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
          let score = 0;
          closeModal();

          let song = generator.song;
          window.crowd = generator.crowd;

          let playlist = generator.playlist;

          // setTimeout( () => {

            song.play();
            crowd.play();

          // }, 2250)

          let timing = 0;
          for(let i = 0; i < playlist.length; i++){
            setTimeout( ()=> {
              let sound = playlist.shift();
              switch ( Math.floor((Math.random() * 5) + 1 ) ) {
                case 1:
                  redChannel.playNotes(sound);

                  break;
                case 2:
                  blueChannel.playNotes(sound);

                  break;
                case 3:
                  greenChannel.playNotes(sound);

                  break;
                case 4:
                  yellowChannel.playNotes(sound);

                  break;
                case 5:
                  orangeChannel.playNotes(sound);

                  break;
                default:
                  redChannel.playNotes(sound);
              }

            }, timing * 1000)

            timing += playlist[i].duration();
          }

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
          startGame();
          break;
        default:
          console.log('no button here')
      }

    })
    window.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case 65:
          greenButton.unpressButton();
          break
        case 83:
          redButton.unpressButton();
          break
        case 68:
          yellowButton.unpressButton();
          break;
        case 70:
          blueButton.unpressButton();
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
