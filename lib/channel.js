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
    // image.width = 200;

    note.ctx.drawImage(image, 0, note.pos)
    note.ctx.clearRect(0, note.pos - 5, 300, 10)
  }

  playNotes(sound){

    let note = new Note();

    note.sound = sound;

    this.notes.push(note);
    
    let timer = setInterval( ()=> {

      this.fillContext(note);

      note.pos += 1;

      if(note.pos > 160){
        this.notes.shift();
        clearInterval(timer)

      }
    }, 50)

  }

  aligned() {
    if(this.notes.length > 0){

      return (this.notes[0].pos > 110 && this.notes[0].pos < 150)
    }
  }

}
