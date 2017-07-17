import Note from './note.js';

export default class Channel{
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

    let note = new Note(sound, this.color, otherButton);
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
