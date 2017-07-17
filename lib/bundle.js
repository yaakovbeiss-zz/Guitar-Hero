/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soundGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guitar_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__songs_js__ = __webpack_require__(7);







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

    let track = __WEBPACK_IMPORTED_MODULE_5__songs_js__["a" /* SONGS */][trackNumber].backtrack
    let guitar = __WEBPACK_IMPORTED_MODULE_5__songs_js__["a" /* SONGS */][trackNumber].guitar
    let numCuts = __WEBPACK_IMPORTED_MODULE_5__songs_js__["a" /* SONGS */][trackNumber].numCuts
    let fileType = __WEBPACK_IMPORTED_MODULE_5__songs_js__["a" /* SONGS */][trackNumber].fileType

      let generator = new __WEBPACK_IMPORTED_MODULE_2__soundGenerator__["a" /* default */](guitar, track, fileType);

      generator.generateSounds(numCuts, ()=> {

        let redButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('red');
        let yellowButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('yellow');
        let blueButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('blue');
        let orangeButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('orange');
        let greenButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('green');

        let redChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('red')
        let blueChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('blue')
        let yellowChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('yellow')
        let orangeChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('orange')
        let greenChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('green')

          let start = document.getElementById('start-button');
          start.addEventListener('click', () => {
            startGame();
          })

          let startGame = () => {
            __WEBPACK_IMPORTED_MODULE_4__modal__["a" /* closeModal */]();

            let song = generator.song;
            window.crowd = generator.crowd;

            let playlist = generator.playlist;

            const guitar = new __WEBPACK_IMPORTED_MODULE_3__guitar_js__["a" /* default */]([
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
            window.strum = true;
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
          case 32:
            window.strum = false;
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

    // });
  })


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.buttonClass = this.buttonClass.bind(this);
    this.playShortNote = this.playShortNote.bind(this);
    this.playLongNote = this.playLongNote.bind(this);
  }

  buttonClass(){
    const pushed = this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button `
    return pushed;
  }

  unpressButton(note){
    let button = document.getElementById(`${this.color}-button`);
    this.pressed = false;
    button.className = this.buttonClass();
    if(note){
      note.pressed = false;
      if(note.length === 'long'){
        note.sound.stop();
      }
    }
  }

  updateScore(points){
    let score = document.getElementById('score');
    let numScore = parseInt(score.innerText) + points;

    score.innerText = numScore;
    crowd._volume = numScore / 4000;
    crowd.play();
  }
  controlCrowd(){
    crowd.stop();
    crowd._volume = crowd._volume / 2;
    crowd.play();
  }
  playShortNote(note, aligned){
    if(!note.sound.playing() && aligned ){
      note.sound.play();
      this.updateScore(10);
    } else if (!aligned){
      missedSound.play();
      this.controlCrowd();
    }
  }
  playLongNote(note, aligned){
    if(!note.sound.playing() && aligned){
      this.updateScore(5)
      note.sound.play();
    }
  }

  pressButton(note, aligned){
    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();

    if(note){
      note.pressed = true;
      const playNote = (note.length === 'long') ? this.playLongNote : this.playShortNote;
  
      if(note.otherButton && note.otherButton.pressed ){

        playNote(note, aligned);
      } else if(!note.otherButton){
        playNote(note, aligned);
      }


    } else {
        missedSound.play()
    }
  }
}



let missedSound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/missed_note.mp3']
})

/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__note_js__ = __webpack_require__(3);


class Channel{
  constructor(color){
    this.color = color;
    this.canvas = document.getElementById(`${this.color}`)
    this.targetPosition = 0;
    this.playNotes = this.playNotes.bind(this);
    this.notes = [];
  }

  // createChannels(){
  //   let channels = [];
  //   let redChannel = new Channel('red');
  //   let blueChannel = new Channel('blue');
  //   let yellowChannel = new Channel('yellow');
  //   let orangeChannel = new Channel('orange');
  //   let greenChannel = new Channel('green');
  //   channels.push(redChannel, blueChannel, yellowChannel, orangeChannel, greenChannel);
  //   return channels;
  // }

  playNotes(sound, otherButton){

    let note = new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */](sound, this.color, otherButton);
    this.notes.push(note);

    let timer = setInterval( ()=> {
      note.drawNote(note);
      // drawNote(note);
      note.pos += 1;
      const eraseNote = (note.length === 'long') ? ( (note.sound.duration() / 3) * 300 ) : 160;
      if(note.pos > eraseNote){
        this.notes.shift();
        clearInterval(timer)
      }
    }, 10)

  }

  aligned() {
    if(this.notes.length > 0){
      let note = this.notes[0];
      return (note.pos > 110 && note.pos < 155)
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Channel;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Note{
  constructor(sound, color, otherButton){
    this.sound = sound;
    this.color = color;
    this.otherButton = otherButton;
    this.ctx = null;
    this.pos = 0;
    this.length = this.sound.duration() > 2.5 && this.sound.duration() < 5 ?  'long' : 'short';
    this.pressed = false;
    this.canvas = document.getElementById(`${this.color}`)
    this.longNote = this.longNote.bind(this);
  }

  drawNote(note){
    note.ctx = this.canvas.getContext('2d');
    let image = new Image;
    image.src = this.pressed ? `assets/images/greennotePressed.png` : `assets/images/${this.color}note.png`;
    note.ctx.drawImage(image, 0, note.pos)

    note.ctx.clearRect(0, note.pos - 3, 300, 10)
    if(note.length === 'long'){
      this.longNote(note)
    }
  }

  longNote(note){
    note.ctx2 = this.canvas.getContext('2d');

    const my_gradient = note.ctx2.createRadialGradient(75,100,200,90,60,5);

    if(!note.sound.playing()){
      switch (note.color) {
        case 'green':
        my_gradient.addColorStop(.5,"#75d35b");
        break;
        case 'red':
        my_gradient.addColorStop(.5,"#cf585c")
        break;
        case 'yellow':
        my_gradient.addColorStop(.5,"#e6e883")
        break;
        case 'blue':
        my_gradient.addColorStop(.5,"#6bb6d1")
        break;
        case 'orange':
        my_gradient.addColorStop(.5,"#d0b35a")

        break;
        default:
      }
      my_gradient.addColorStop(0,"#241d1d");
      my_gradient.addColorStop(1,"#241d1d");
      note.ctx2.fillStyle = my_gradient;
      note.ctx2.fillRect(100, note.pos - 3, 100, 10)
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx2.clearRect(0, note.pos - length, 300, 10)

    } else {
      switch (note.color) {
        case 'green':
        my_gradient.addColorStop(.5,"#dcf8ff");
        break;
        case 'red':
        my_gradient.addColorStop(.5,"#dcf8ff")
        break;
        case 'yellow':
        my_gradient.addColorStop(.5,"#dcf8ff")
        break;
        case 'blue':
        my_gradient.addColorStop(.5,"#dcf8ff")
        break;
        case 'orange':
        my_gradient.addColorStop(.5,"#dcf8ff")
        break;
        default:
      }
      my_gradient.addColorStop(0,"#241d1d");
      my_gradient.addColorStop(1,"#241d1d");
      note.ctx2.fillStyle = my_gradient;
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx2.fillRect(100, (note.pos - length), 100, length)
      note.ctx2.clearRect(0, note.pos - length, 300, 10)
      console.log(note.ctx)
    }
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Note);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SoundGenerator{
  constructor(url, backtrackUrl, fileType){
    this.backtrackUrl = backtrackUrl;
    this.fileType = fileType;
    this.song = null;
    this.url = url;
    this.playlist = [];
    this.crowd = null;
  }

  generateSounds(n, callback){
    let crowd = new Howl({
      buffer: true,
      html5: true,
      loop: true,
      volume: 0.0,
      src: ["https://s3.us-east-2.amazonaws.com/guitar-hero/crowd.mp3"]
    })
    let song = new Howl({
      buffer: true,
      html5: true,
      src: [this.backtrackUrl]
    })

      let k = 0;
      for(let i = 0; i < n; i++) {

        let sound = new Howl({
          buffer: true,
          html5: true,
          src: [this.url + `(${i + 2}).${this.fileType}`]
        })

        sound.on('load',() =>{
          this.playlist[i] = sound
          k += 1;

          if (k === n && song.state() === "loaded" && crowd.state() === "loaded") {
            this.song = song;
            this.crowd = crowd;
            console.log('callback being called')
            callback()

          }
        })

      }

    }
  }




/* harmony default export */ __webpack_exports__["a"] = (SoundGenerator);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Guitar{
  constructor(channels, buttons, playlist){
    this.channels = channels;
    this.buttons = buttons;
    this.playlist = playlist;
    this.doubleNote = false
  }

  playSong(){
    let timing = 0;
    setTimeout( () => {
      for(let i = 0; i < this.playlist.length; i++){
        setTimeout( ()=> {
          let sound = this.playlist.shift();
          switch ( Math.floor((Math.random() * 6) + 1) ) {
            case 1:
              this.channels[0].playNotes(sound);

              break;
            case 2:
              this.channels[1].playNotes(sound);

              break;
            case 3:
              this.channels[2].playNotes(sound);

              break;
            case 4:
              this.channels[3].playNotes(sound);

              break;
            case 5:
              this.channels[4].playNotes(sound);

              break;
            case 6:
              let first = Math.floor((Math.random() * 5) )
              let second = Math.floor((Math.random() * 5) )
              let firstButton = this.buttons[first];
              let secondButton = this.buttons[second];
              this.channels[first].playNotes(sound, secondButton);
              this.channels[second].playNotes(sound, firstButton);
              break;
            default:
              this.channels[0].playNotes(sound);
          }

        }, timing * 981)

        timing += this.playlist[i].duration();
      }
    }, 3490)
  }


}

/* harmony default export */ __webpack_exports__["a"] = (Guitar);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const openModal = () => {
   const modal = document.getElementById('modal');
   modal.className = '';
}
/* unused harmony export openModal */


const closeModal = () => {
  const modal = document.getElementById('modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
}
/* harmony export (immutable) */ __webpack_exports__["a"] = closeModal;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SONGS = {
  1: { // I love rock and roll, timing * 984 and start song after 3500
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/iloverockandrollbackingtrack.mp3`,
    numCuts: 85,
    fileType: "wav",
  },
  2: {
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/smokeonthewater/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/smokeonthewater/song.mp3`,
    numCuts: 330,
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SONGS;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map