import SoundGenerator from './soundGenerator';
import Note from './note.js';

class Channel{
  constructor(color){
    this.color = color;
    this.canvas = document.getElementById(`${this.color}`)
    this.targetPosition = 0;
    this.moveContext = this.moveContext.bind(this);
    this.notes = [];
  }

  fillContext(note){

    note.ctx = this.canvas.getContext('2d');
    note.ctx.fillStyle = `${this.color}`
    note.ctx.fillRect(0, note.pos, 300, 10)
    note.ctx.clearRect(0, note.pos - 10, 300, 10)
  }

  moveContext(timing){

    let note = new Note();
    let generator;

    if (this.color === 'red'){
      generator = redGenerator;
    } else if( this.color === 'yellow'){
      generator = yellowGenerator;
    } else {
      generator = blueGenerator;
    }
    
    note.sound = generator.playlist.shift();
    this.notes.push(note);

    let timer = setInterval( ()=> {

      this.fillContext(note);

      note.pos += 10;

      if(note.pos > 160){
        this.notes.shift();
        clearInterval(timer)

      }
    }, timing)

  }

  aligned() {
    if(this.notes.length > 0){
      return (this.notes[0].pos > 110 && this.notes[0].pos < 150)
    }
  }

}
let redGenerator = new SoundGenerator('red', `https://s3.us-east-2.amazonaws.com/guitar-hero/1.`);
redGenerator.generateSounds(4);

let yellowGenerator = new SoundGenerator('yellow', `https://s3.us-east-2.amazonaws.com/guitar-hero/2.`);
yellowGenerator.generateSounds(8);

let blueGenerator = new SoundGenerator('blue', `https://s3.us-east-2.amazonaws.com/guitar-hero/3.`);
blueGenerator.generateSounds(32);


export default Channel
