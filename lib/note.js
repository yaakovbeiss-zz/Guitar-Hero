class Note{
  constructor(sound, color, double){
    this.sound = sound;
    this.color = color;
    this.double = double;
    this.ctx = null;
    this.pos = 0;
    this.length = this.sound.duration() > 2.5 && this.sound.duration() < 5 ?  'long' : 'short';
    this.pressed = false;
    this.canvas = document.getElementById(`${this.color}`)
    this.shortNote = this.shortNote.bind(this);
    this.longNote = this.longNote.bind(this);
  }

  shortNote(note){
    note.ctx = this.canvas.getContext('2d');

    let image = new Image;

    image.src = this.pressed ? `assets/images/greennotePressed.png` : `assets/images/${this.color}note.png`;

    note.ctx.drawImage(image, 0, note.pos)
    note.ctx.clearRect(0, note.pos - 5, 300, 10)
  }

  longNote(note){
    note.ctx = this.canvas.getContext('2d');

    let image = new Image;
    image.src = `assets/images/${this.color}note.png`;

    note.ctx.drawImage(image, 0, note.pos)
    let length = ( (note.sound.duration() / 3) * 130 );
    note.ctx.clearRect(0, note.pos - length, 300, 10)
  }
}



export default Note;
