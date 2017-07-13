

class Guitar{
  constructor(channels, playlist){
    this.channels = channels;
    this.playlist = playlist;
    this.doubleNote = false
  }

  playSong(){
    let timing = 0;
    setTimeout( () => {
      for(let i = 0; i < this.playlist.length; i++){
        setTimeout( ()=> {
          let sound = this.playlist.shift();
          switch ( Math.floor((Math.random() * 6) + 1 ) ) {
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
              let first = Math.floor((Math.random() * 5) + 1 )
              let second = Math.floor((Math.random() * 5) + 1 )

              this.channels[first].playNotes(sound);
              this.channels[second].playNotes(sound);
              this.doubleNote = true;
              break;
            default:
              this.channels[0].playNotes(sound);
          }

        }, timing * 982)
        timing += this.playlist[i].duration();
      }
    }, 3500)
  }


}

// window.addEventListener("keydown", (e) => {
//
//   switch (e.keyCode) {
//     case 65:
//       greenButton.pressButton(greenChannel.notes[0], greenChannel.aligned());
//       break
//     case 83:
//       redButton.pressButton(redChannel.notes[0], redChannel.aligned());
//       break
//     case 68:
//       yellowButton.pressButton(yellowChannel.notes[0], yellowChannel.aligned());
//       break;
//     case 70:
//       blueButton.pressButton(blueChannel.notes[0], blueChannel.aligned());
//       break;
//     case 71:
//       orangeButton.pressButton(orangeChannel.notes[0], orangeChannel.aligned());
//       break;
//     case 32:
//       // startGame();
//       break;
//     default:
//       console.log('no button here')
//   }
//
// })
// window.addEventListener("keyup", (e) => {
//   switch (e.keyCode) {
//     case 65:
//       greenButton.unpressButton(greenChannel.notes[0]);
//       break
//     case 83:
//       redButton.unpressButton(redChannel.notes[0]);
//       break
//     case 68:
//       yellowButton.unpressButton(yellowChannel.notes[0]);
//       break;
//     case 70:
//       blueButton.unpressButton(blueChannel.notes[0]);
//       break;
//     case 71:
//       orangeButton.unpressButton(orangeChannel.notes[0]);
//       break;
//     default:
//       console.log('no button here')
//   }

export default Guitar;
