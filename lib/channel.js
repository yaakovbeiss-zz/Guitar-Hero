import Note from './note.js';

export default class Channel{
  constructor(color){
    this.color = color;
    this.canvas = document.getElementById(`${this.color}`)
    this.targetPosition = 0;
    this.playNotes = this.playNotes.bind(this);
    this.notes = [];
  }

  playNotes(sound, otherButton){

    let note = new Note(sound, this.color, otherButton);
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
let missedSound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/missed_note.mp3']
})
