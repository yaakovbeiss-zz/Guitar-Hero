import Button from './button.js'
import Channel from './channel.js'

class Guitar{
  constructor(channels, buttons, playlist){
    this.channels = channels;
    this.buttons = buttons;
    this.playlist = playlist;
    this.intervals = [];
    this.doubleNote = false
    this.strum = this.strum.bind(this);
    this.unStrum = this.unStrum.bind(this);
  }

  playSong(){
    let timing = 0;
    setTimeout( () => {
      for(let i = 0; i < this.playlist.length; i++){
        this.intervals.push(setTimeout( ()=> {
          let sound = this.playlist.shift();
          switch ( Math.floor((Math.random() * 7) + 1) ) {
            case 1:
              this.channels[0].playNotes(sound);

              break;
            case 2:
              this.channels[1].playNotes(sound);

              break;
            case 3:
              this.channels[2].playNotes(sound);

              break;
            case 4:
              this.channels[3].playNotes(sound);

              break;
            case 5:
              this.channels[4].playNotes(sound);

              break;
            case 6:
            case 7:
              let first = Math.floor((Math.random() * 5) )
              let second = Math.floor((Math.random() * 5) )
              let firstButton = this.buttons[first];
              let secondButton = this.buttons[second];
              this.channels[first].playNotes(sound, secondButton);
              this.channels[second].playNotes(sound, firstButton);

              break;
            default:
              this.channels[0].playNotes(sound);
          }

        }, timing * 981) )

        timing += this.playlist[i].duration();
      }
    }, 3490)
  }

  updateScore(points){
    let score = document.getElementById('score');
    let numScore = parseInt(score.innerText) + points;
    score.innerText = numScore;
    crowd._volume = numScore / 4000;
    crowd.play();
  }

  strum(){
    this.buttons.forEach( (button, idx) =>{
      if(button.pressed){
        let channel = this.channels[idx];
        if(channel.aligned()){
          let color = button.color;
          button.button.className = `${color}-pressed-lit button`;
          let duration = channel.notes[0].sound.duration() * 981;
          this.unStrum(duration, button);
          if(!channel.notes[0].sound.playing()){
            channel.notes[0].sound.play()
            this.updateScore(10);
          }
        }
      }
    })
  }

  unStrum(duration, button){
    setTimeout( () => {
      button.button.className = button.buttonClass();
    }, duration)
  }

  clearIntervals(){
    this.intervals.forEach( (interval) => {
      clearInterval(interval);
    })
  }

}

export default Guitar;
