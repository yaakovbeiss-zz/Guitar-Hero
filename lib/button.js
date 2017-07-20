class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.button = document.getElementById(`${this.color}-button`);
    this.buttonClass = this.buttonClass.bind(this);
    // this.litButton = this.litButton.bind(this);
    this.playShortNote = this.playShortNote.bind(this);
    this.playLongNote = this.playLongNote.bind(this);
  }

  buttonClass(){
    const pushed = this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button `
    return pushed;
  }
  litButton(color){
    return `${color}-pressed-lit button`;
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
    crowd._volume = crowd._volume / 2;
  }
  playShortNote(note, aligned){

    if(note.sound.playing()){
      this.button.className = this.litButton(this.color);
    }
    if(!note.sound.playing() && aligned ){
      note.pressed = true;
      note.sound.play();
      this.updateScore(10);
    } else if (!aligned){
      missedSound.play();
      this.controlCrowd();
    }
    console.log(this.button.className)
  }
  playLongNote(note, aligned){
    if(note.sound.playing()){
      this.updateScore(1)
      this.button.className = this.litButton(this.color);
    }
    if(!note.sound.playing() && aligned){
      note.pressed = true;
      note.sound.play();
    }
    console.log(this.button.className)
  }

  pressButton(note, aligned){
    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();

    if(note){
      const playNote = (note.length === 'long') ? this.playLongNote : this.playShortNote;

      if(note.otherButton && note.otherButton.pressed && strum){
        playNote(note, aligned);
        note.otherButton.className = this.litButton(note.otherButton.color);
        button.className = this.litButton(this.color);

      } else if(!note.otherButton && strum){
        playNote(note, aligned);
        button.className = this.litButton(this.color);

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
