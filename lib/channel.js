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

  playNotes(sound, doubleNote){

    let note = new Note(sound, this.color, doubleNote);

    this.notes.push(note);
    const drawNote = (note.length === 'long') ? note.longNote : note.shortNote;

    let timer = setInterval( ()=> {

      drawNote(note);
      note.pos += 1;
      let eraseNote = (note.length === 'long') ? 300 : 160;
      if(note.pos > eraseNote){

        this.notes.shift();
        clearInterval(timer)
      }
    }, 10)

  }

  aligned() {
    if(this.notes.length > 0){
      return (this.notes[0].pos > 110 && this.notes[0].pos < 150)
    }
  }

}
