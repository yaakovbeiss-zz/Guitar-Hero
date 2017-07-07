import SoundGenerator from './soundGenerator';
import Note from './note.js';

export default class Channel{
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
    image.width = 300;
    note.ctx.drawImage(image, 0, note.pos)
    note.ctx.clearRect(0, note.pos - 5, 300, 10)
  }

  playNotes(playlist){

    let note = new Note();

    note.sound = playlist.shift();

    this.notes.push(note);

    let timer = setInterval( ()=> {

      this.fillContext(note);

      note.pos += 5;

      if(note.pos > 160){
        this.notes.shift();
        clearInterval(timer)

      }
    }, 200)

  }

  aligned() {
    if(this.notes.length > 0){
      console.log(this.notes[0].pos)
      return (this.notes[0].pos > 110 && this.notes[0].pos < 150)
    }
  }

}


// let yellowGenerator = new SoundGenerator('yellow', `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandroll/`);
// yellowGenerator.generateSounds(8);
//
// let blueGenerator = new SoundGenerator('blue', `https://s3.us-east-2.amazonaws.com/guitar-hero/iloverockandroll/`);
// blueGenerator.generateSounds(32);


// export default Channel
