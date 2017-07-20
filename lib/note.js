class Note{
  constructor(sound, color, otherButton){
    this.sound = sound;
    this.color = color;
    this.otherButton = otherButton;
    this.ctx = null;
    this.pos = 0;
    this.length = this.sound.duration() > 2.5 ?  'long' : 'short';
    this.pressed = false;
    this.canvas = document.getElementById(`${this.color}`)
    this.longNote = this.longNote.bind(this);
  }

  drawNote(note){
    note.ctx = this.canvas.getContext('2d');
    let image = new Image;
    image.src = note.pressed ? `assets/images/notePressed.png` : `assets/images/${this.color}note.png`;
    note.ctx.drawImage(image, 0, note.pos)

    note.ctx.clearRect(0, note.pos - 3, 300, 10)
    if(note.length === 'long'){
      this.longNote(note)
    }
  }

  longNote(note){
    note.ctx = this.canvas.getContext('2d');

    const my_gradient = note.ctx.createRadialGradient(75,100,200,90,60,5);

    if(!note.sound.playing()){

      switch (note.color) {
        case 'green':
        my_gradient.addColorStop(.5,"#75d35b");
        break;
        case 'red':
        my_gradient.addColorStop(.5,"#cf585c")
        break;
        case 'yellow':
        my_gradient.addColorStop(.5,"#e6e883")
        break;
        case 'blue':
        my_gradient.addColorStop(.5,"#6bb6d1")
        break;
        case 'orange':
        my_gradient.addColorStop(.5,"#d0b35a")
        break;
        default:
      }
      my_gradient.addColorStop(0,"#241d1d");
      my_gradient.addColorStop(1,"#241d1d");
      note.ctx.fillStyle = my_gradient;
      note.ctx.fillRect(100, note.pos - 3, 100, 10)
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx.clearRect(0, note.pos - length, 300, 10)

    }
    else {

      // switch (note.color) {
      //   case 'green':
      //   my_gradient.addColorStop(.5,"#dcf8ff");
      //   break;
      //   case 'red':
      //   my_gradient.addColorStop(.5,"#dcf8ff")
      //   break;
      //   case 'yellow':
      //   my_gradient.addColorStop(.5,"#dcf8ff")
      //   break;
      //   case 'blue':
      //   my_gradient.addColorStop(.5,"#dcf8ff")
      //   break;
      //   case 'orange':
      //   break;
      //   default:
      // }
      my_gradient.addColorStop(.5,"#dcf8ff")
      my_gradient.addColorStop(0,"#241d1d");
      my_gradient.addColorStop(1,"#241d1d");
      note.ctx.fillStyle = my_gradient;
      let length = ( (note.sound.duration() / 3) * 130 );
      note.ctx.fillRect(100, note.pos - length, 100, (length + 10))
      note.ctx.clearRect(0, note.pos - length, 300, 10)
      note.ctx.clearRect(0, 0, 300, 0 + (note.pos - length))
    }

  }
}



export default Note;
