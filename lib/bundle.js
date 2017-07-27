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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageGenerator_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__songs_js__ = __webpack_require__(7);








document.addEventListener('DOMContentLoaded', ()=> {

  __WEBPACK_IMPORTED_MODULE_5__imageGenerator_js__["a" /* imageGenerator */]();

  let chooseSong = () => {
    let trackNumber = parseInt(document.querySelector('input[name="track"]:checked').value);

    let track = __WEBPACK_IMPORTED_MODULE_6__songs_js__["a" /* SONGS */][trackNumber].backtrack
    let guitar = __WEBPACK_IMPORTED_MODULE_6__songs_js__["a" /* SONGS */][trackNumber].guitar
    let numCuts = __WEBPACK_IMPORTED_MODULE_6__songs_js__["a" /* SONGS */][trackNumber].numCuts
    let fileType = __WEBPACK_IMPORTED_MODULE_6__songs_js__["a" /* SONGS */][trackNumber].fileType

      let generator = new __WEBPACK_IMPORTED_MODULE_2__soundGenerator__["a" /* default */](guitar, track, fileType);

      generator.generateSounds(numCuts, ()=> {

        let greenButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('green');
        let redButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('red');
        let yellowButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('yellow');
        let blueButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('blue');
        let orangeButton = new __WEBPACK_IMPORTED_MODULE_0__button_js__["a" /* default */]('orange');

        let greenChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('green')
        let redChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('red')
        let yellowChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('yellow')
        let blueChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('blue')
        let orangeChannel = new __WEBPACK_IMPORTED_MODULE_1__channel_js__["a" /* default */]('orange')

          let start = document.getElementById('start-button');
          start.addEventListener('click', () => {
            startGame();
          })

          let startGame = () => {

            __WEBPACK_IMPORTED_MODULE_4__modal__["b" /* closeModal */]();
            window.song = generator.song;
            window.crowd = generator.crowd;
            const playlist = generator.playlist;

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
              let duration = song.duration() * 1000

              let endGameTimer = setTimeout( () => {
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
                clearInterval(endGameTimer);
                song.stop();
                crowd.stop();
                window.song = null;
                window.crowd = null;
                document.querySelector('input[name="track"]:checked').checked = false;
                __WEBPACK_IMPORTED_MODULE_4__modal__["c" /* openGameOverModal */]();
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
        __WEBPACK_IMPORTED_MODULE_4__modal__["a" /* closeGameOverModal */]();
        __WEBPACK_IMPORTED_MODULE_4__modal__["d" /* openModal */]();
    })


  })


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.button = document.getElementById(`${this.color}-button`);
    // this.playLongNote = this.playLongNote.bind(this);
  }

  unpressButton(note){
    this.pressed = false;
    this.button.className = `${this.color}-unpressed button`;
    if(note){
      note.pressed = false;

      if(note.length === 'long'){
        note.sound.stop();
      }
    }
  }

  controlCrowd(){
    crowd._volume = crowd._volume / 2;
  }

  buttonClass(){
    return this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button`;
  }

  pressButton(note){
    this.pressed = true;
    this.button.className = `${this.color}-pressed button`;
  }
}

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

  updateScore(points){
    let score = document.getElementById('score');

    let numScore = parseInt(score.innerText);
    if(numScore > 0){
      numScore = parseInt(score.innerText) + points;
      score.innerText = numScore;
      crowd._volume = numScore / 4000;
      crowd.play();
    }
  }

  playNotes(sound, otherButton){

    let note = new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */](sound, this.color, otherButton);
    this.notes.push(note);

    let timer = setInterval( ()=> {
      note.drawNote(note);
      note.pos += 1;

      const eraseNote = (note.length === 'long') ? ( ( (note.sound.duration() / 3) * 130 ) + 150) : 150;
      if(note.pos > eraseNote){
        this.notes.shift();
        clearInterval(timer)
        if(!note.sound.playing()){
          missedSound.play();
          this.updateScore(-10)
        }
      }
    }, 10)

  }

  aligned() {
    if(this.notes.length > 0){
      let note = this.notes[0];
      return (note.pos > 95 && note.pos < 155)
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Channel;

let missedSound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/missed_note.mp3']
})


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
    this.length = this.sound.duration() > 2.5 ?  'long' : 'short';
    this.pressed = false;
    this.canvas = document.getElementById(`${this.color}`)
    this.longNote = this.longNote.bind(this);
  }

  drawNote(note){
    note.ctx = this.canvas.getContext('2d');
    let image = new Image;
    image.src = note.pressed ? `assets/images/notePressed.png` : `assets/images/${this.color}note.png`;
    note.ctx.drawImage(image, 0, note.pos)

    note.ctx.clearRect(0, note.pos - 3, 300, 10)
    if(note.length === 'long'){
      this.longNote(note)
    }
  }

  longNote(note){
    note.ctx = this.canvas.getContext('2d');

    let my_gradient = note.ctx.createRadialGradient(75,100,200,90,60,5);

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
      note.ctx.fillStyle = my_gradient;
      note.ctx.fillRect(100, note.pos - 3, 100, 10)
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx.clearRect(0, note.pos - length, 300, 10)

    }
    else {
      let my_gradient = note.ctx.createLinearGradient(0,0,0,170);
      my_gradient.addColorStop(0,"#dcf8ff");
      my_gradient.addColorStop(.25,"white");
      my_gradient.addColorStop(.5,"#dcf8ff")
      my_gradient.addColorStop(.75,"white")
      my_gradient.addColorStop(1,"#dcf8ff");
      note.ctx.fillStyle = my_gradient;
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx.fillRect(100, note.pos - length, 100, (length + 10))
      note.ctx.clearRect(0, note.pos - length, 300, 10)
      note.ctx.clearRect(0, 0, 300, 0 + (note.pos - length))
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
          src: [this.url + `(${i + 1}).${this.fileType}`]
        })

        sound.on('load',() =>{
          this.playlist[i] = sound
          k += 1;


          if (k === n && song.state() === "loaded" && crowd.state() === "loaded") {
            this.song = song;
            this.crowd = crowd;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_js__ = __webpack_require__(2);



class Guitar{
  constructor(channels, buttons, playlist){
    this.channels = channels;
    // this.channels = this.createChannels();
    this.buttons = buttons;
    // this.buttons = this.createButtons();
    this.playlist = playlist;
    this.intervals = [];
    this.doubleNote = false
    this.strum = this.strum.bind(this);
    this.unStrum = this.unStrum.bind(this);
  }

  playSong(){
    let timing = 0;
    setTimeout( () => {
      for(let i = 0; i < this.playlist.length; i++){
        this.intervals.push(setTimeout( ()=> {
          let sound = this.playlist.shift();
          switch ( Math.floor((Math.random() * 7) + 1) ) {
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
            case 7:
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

        }, timing) )

        timing += (this.playlist[i].duration() * 960);
      }
    }, 3490)
  }

  updateScore(points){
    let score = document.getElementById('score');
    let numScore = parseInt(score.innerText) + points;
    score.innerText = numScore;
    crowd._volume = numScore / 4000;
    crowd.play();
  }

  strum(){
    let currentChannels = [];
    this.channels.forEach( (channel, idx) =>{
       if (channel.aligned()){
         currentChannels.push(idx)
       }
    })
    if(currentChannels.every( idx => this.buttons[idx].pressed )){
      const channel = this.channels[currentChannels[0]];

      if(channel && !channel.notes[0].sound.playing()){
        channel.notes[0].sound.play()
        this.updateScore(10);
        let duration = channel.notes[0].sound.duration() * 981;
        this.lightButtons(currentChannels, duration)
      }
    }

  }

  lightButtons(currentChannels, duration){
    currentChannels.forEach( idx => {
      let button = this.buttons[idx]
      let color = button.color;
      button.button.className = `${color}-pressed-lit button`;
      this.unStrum(duration, button);
    })
  }

  unStrum(duration, button){
    setTimeout( () => {
      button.button.className = button.buttonClass();
    }, duration)
  }

  clearIntervals(){
    this.intervals.forEach( (interval) => {
      clearInterval(interval);
    })
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Guitar);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const openModal = () => {
   const modal = document.getElementById('modal');
   const modalContainer = document.getElementById('modal-container');
   modal.className = 'modal';
   modalContainer.className = 'modal-container';

}
/* harmony export (immutable) */ __webpack_exports__["d"] = openModal;


const closeModal = () => {
  const modal = document.getElementById('modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
}
/* harmony export (immutable) */ __webpack_exports__["b"] = closeModal;


const openGameOverModal = () => {
   const modal = document.getElementById('game-over-modal');
   const modalContainer = document.getElementById('modal-container');
   modalContainer.className = "modal-container"
   modal.className = 'modal';
   const score = document.getElementById('score').innerText;
   const gameOverScore = document.getElementById('game-over-score');
   gameOverScore.innerText = `You scored: ${score}`;
}
/* harmony export (immutable) */ __webpack_exports__["c"] = openGameOverModal;


const closeGameOverModal = () => {
  const modal = document.getElementById('game-over-modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
  const score = document.getElementById('score');
  score.innerText = "0";
}
/* harmony export (immutable) */ __webpack_exports__["a"] = closeGameOverModal;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SONGS = {
  2: { // I love rock and roll, timing * 984 and start song after 3500
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/iloverockandrollbackingtrack.mp3`,
    numCuts: 84,
    fileType: "wav",
  },
  1: { // I love rock and roll, timing * 984 and start song after 3500
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollmp3/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandrollupdated/iloverockandrollbackingtrack.mp3`,
    numCuts: 111,
    fileType: "mp3",
  },
  3: {
    guitar: `https://s3.us-east-2.amazonaws.com/guitar-hero/smokeonthewater/0+`,
    backtrack: `https://s3.us-east-2.amazonaws.com/guitar-hero/smokeonthewater/song.mp3`,
    numCuts: 330,
    fileType: "mp3",
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SONGS;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imageGenerator = () => {
  let allImages = document.getElementById('images')
  let images = new Array();
  images[0] = "assets/images/blue-buttonPressed.png";
  images[1] = "assets/images/green-buttonPressed.png";
  images[2] = "assets/images/orange-buttonPressed.png";
  images[3] = "assets/images/red-buttonPressed.png";
  images[4] = "assets/images/yellow-buttonPressed.png";

  images[5] = "assets/images/blue-buttonPressedLit.png";
  images[6] = "assets/images/green-buttonPressedLit.png";
  images[7] = "assets/images/orange-buttonPressedLit.png";
  images[8] = "assets/images/red-buttonPressedLit.png";
  images[9] = "assets/images/yellow-buttonPressedLit.png";

  images[10] = "assets/images/bluenote.png";
  images[11] = "assets/images/greennote.png";
  images[12] = "assets/images/orangenote.png";
  images[13] = "assets/images/rednote.png";
  images[14] = "assets/images/yellownote.png";

  for(let i = 0; i <= 14; i++){
    allImages.innerHTML += `<img src=${images[i]}>` 
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = imageGenerator;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map