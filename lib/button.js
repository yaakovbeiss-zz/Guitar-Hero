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
    this.updateScore(1)
    if(!note.sound.playing() && aligned){
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

export default Button;
