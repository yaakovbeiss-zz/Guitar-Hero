class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.button = document.getElementById(`${this.color}-button`);
    this.buttonClass = this.buttonClass.bind(this);
    this.playShortNote = this.playShortNote.bind(this);
    this.playLongNote = this.playLongNote.bind(this);
  }

  buttonClass(note, aligned){
    if(note){
      if(note.sound.playing()){
        if(note.otherButton){
          note.otherButton.button.className = `${note.otherButton.color}-pressed-lit button`;
        }
        return `${this.color}-pressed-lit button`;
      } else {
        return `${this.color}-pressed button`;
      }
    } else{
      return `${this.color}-pressed button`;
    }
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
    if(!note.sound.playing() && aligned && strum){
      note.pressed = true;
      note.sound.play();
      this.updateScore(10);
    } else if (!aligned){
      this.controlCrowd();
      missedSound.play();
    }

  }
  playLongNote(note, aligned){

    if(!note.sound.playing() && aligned && strum){
      note.pressed = true;
      note.sound.play();
    }
    if(note.sound.playing()){
      this.updateScore(1)
    }

  }

  pressButton(note, aligned){
    this.pressed = true;

    if(note){

      const playNote = (note.length === 'long') ? this.playLongNote : this.playShortNote;
      if(note.otherButton && note.otherButton.pressed){
        note.otherButton.pressed = true;

        playNote(note, aligned);
        window.currentSound = note.sound;

      } else if(!note.otherButton){

        playNote(note, aligned);

      } else if(!window.currentSound.playing() ) {

        missedSound.play();
      }

    } else {
        missedSound.play()
    }
    this.button.className = this.buttonClass(note, aligned);
  }
}



let missedSound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/missed_note.mp3']
})

export default Button;
