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

export default Button;
