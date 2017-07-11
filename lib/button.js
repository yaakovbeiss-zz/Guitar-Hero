class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.buttonClass = this.buttonClass.bind(this);

  }

  buttonClass(){
    const pushed = this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button `
    return pushed;
  }
  unpressButton(){
    let button = document.getElementById(`${this.color}-button`);
    this.pressed = false;
    button.className = this.buttonClass();

  }
  updateScore(){
    let score = document.getElementById('score');
    let numScore = parseInt(score.innerText) + 10;

    score.innerText = numScore;
    crowd._volume = numScore / 900;
    console.log(crowd._volume)
    crowd.play();
  }




  pressButton(note, aligned){

    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();

    if(note){

      if(!note.sound.playing() && aligned){
        note.sound.play();
        this.updateScore();
      } else if (!aligned){
        missedSound.play();
        crowd.stop();
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
