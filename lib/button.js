import { sound } from './entry.js';
import Channel from './channel.js'

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
    // sound.stop()
  }



  pressButton(aligned){
    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();
    if(!sound.playing() && aligned){
      sound.play();
    } else if (!aligned){
      missedSound.play()
    }
  }
}
let sound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/1+(1).wav']
})
let missedSound = new Howl({
  buffer: true,
  html5: true,
  src: ['https://s3.us-east-2.amazonaws.com/guitar-hero/missed_note.mp3']
})

export default Button;
