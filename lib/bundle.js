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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__songs_js__ = __webpack_require__(6);






document.addEventListener('DOMContentLoaded', ()=> {


  // document.getElementById('')
  let track = __WEBPACK_IMPORTED_MODULE_4__songs_js__["a" /* SONGS */][1].backtrack
  let guitar = __WEBPACK_IMPORTED_MODULE_4__songs_js__["a" /* SONGS */][1].guitar
  let numCuts = __WEBPACK_IMPORTED_MODULE_4__songs_js__["a" /* SONGS */][1].numCuts

    let generator = new __WEBPACK_IMPORTED_MODULE_2__soundGenerator__["a" /* default */](guitar, track);

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
          let score = 0;
          __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* closeModal */]();

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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.buttonClass = this.buttonClass.bind(this);
  }

  buttonClass(){
    const pushed = this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button `
    return pushed;
  }

  unpressButton(){
    let button = document.getElementById(`${this.color}-button`);
    this.pressed = false;
    button.className = this.buttonClass();

  }
  updateScore(){
    let score = document.getElementById('score');
    let numScore = parseInt(score.innerText) + 10;

    score.innerText = numScore;
    crowd._volume = numScore / 900;
    console.log(crowd._volume)
    crowd.play();
  }

  pressButton(note, aligned){

    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();

    if(note){

      if(!note.sound.playing() && aligned){
        note.sound.play();
        this.updateScore();
      } else if (!aligned){
        missedSound.play();
        crowd.stop();
        crowd._volume = crowd._volume / 2;
        crowd.play();
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

  fillContext(note){
    note.ctx = this.canvas.getContext('2d');

    let image = new Image;
    image.src = `assets/images/${this.color}note.png`;

    note.ctx.drawImage(image, 0, note.pos)
    note.ctx.clearRect(0, note.pos - 5, 300, 10)
  }

  playNotes(sound){

    let note = new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */]();

    note.sound = sound;

    this.notes.push(note);

    let timer = setInterval( ()=> {

      this.fillContext(note);

      note.pos += 1;

      if(note.pos > 160){
        this.notes.shift();
        clearInterval(timer)

      }
    }, 32)

  }

  aligned() {
    if(this.notes.length > 0){

      return (this.notes[0].pos > 110 && this.notes[0].pos < 150)
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Channel;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Note{
  constructor(){
    this.pos = 0;
    this.ctx = null;
    this.sound = null;
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Note);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SoundGenerator{
  constructor(url, backtrackUrl){
    this.backtrackUrl = backtrackUrl;
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
          src: [this.url + `(${i + 2}).wav`]
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SONGS = {
  1: {
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/iloverockandrollbackingtrack.mp3`,
    numCuts: 85,
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SONGS;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map