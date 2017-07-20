class Guitar{
  constructor(channels, buttons, playlist){
    this.channels = channels;
    this.buttons = buttons;
    this.playlist = playlist;
    this.doubleNote = false
  }

  playSong(){
    let timing = 0;
    setTimeout( () => {
      for(let i = 0; i < this.playlist.length; i++){
        setTimeout( ()=> {
          let sound = this.playlist.shift();
          switch ( 6){//Math.floor((Math.random() * 6) + 1) ) {
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

        }, timing * 981)

        timing += this.playlist[i].duration();
      }
    }, 3490)
  }


}

export default Guitar;
